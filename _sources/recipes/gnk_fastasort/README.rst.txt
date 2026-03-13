:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnk_fastasort'
.. highlight: bash

gnk_fastasort
=============

.. conda:recipe:: gnk_fastasort
   :replaces_section_title:
   :noindex:

   A package to generate a GenomeNote ordered TSV of a genome.

   :homepage: https://github.com/sanger-tol/gnk_fastasort
   :license: MIT
   :recipe: /`gnk_fastasort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnk_fastasort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnk_fastasort/meta.yaml>`_

   This package uses can use either a SAMTOOLS FAIDX indexed genome or
   an API call to NCBI to retrieve a sequence report.
   This is then used to generate a preferred ordering of the genome as a TSV\,
   which can then be used to re\-order a pretextsnapshot or create a re\-ordered
   fasta file using samtools faidx.



.. conda:package:: gnk_fastasort

   |downloads_gnk_fastasort| |docker_gnk_fastasort|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on python: ``>=3.12``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gnk_fastasort

to add into an existing workspace instead, run::

    pixi add gnk_fastasort

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gnk_fastasort

Alternatively, to install into a new environment, run::

    conda create -n envname gnk_fastasort

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gnk_fastasort:<tag>

(see `gnk_fastasort/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gnk_fastasort| image:: https://img.shields.io/conda/dn/bioconda/gnk_fastasort.svg?style=flat
   :target: https://anaconda.org/bioconda/gnk_fastasort
   :alt:   (downloads)
.. |docker_gnk_fastasort| image:: https://quay.io/repository/biocontainers/gnk_fastasort/status
   :target: https://quay.io/repository/biocontainers/gnk_fastasort
.. _`gnk_fastasort/tags`: https://quay.io/repository/biocontainers/gnk_fastasort?tab=tags


.. raw:: html

    <script>
        var package = "gnk_fastasort";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnk_fastasort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnk_fastasort/README.html