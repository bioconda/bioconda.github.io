:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat-3n'
.. highlight: bash

hisat-3n
========

.. conda:recipe:: hisat-3n
   :replaces_section_title:
   :noindex:

   Graph\-based alignment of next generation sequencing reads to a population of genomes.

   :homepage: https://github.com/fulcrumgenomics/hisat-3n
   :license: GPL / GPL-3.0
   :recipe: /`hisat-3n <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat-3n>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat-3n/meta.yaml>`_
   :links: biotools: :biotools:`HISAT2`, doi: :doi:`10.1038/nmeth.3317`, doi: :doi:`10.1038/s41587-019-0201-4`, usegalaxy-eu: :usegalaxy-eu:`hisat2`

   HISAT\-3N \(hierarchical indexing for spliced alignment of transcripts \- 3 nucleotides\) is designed for nucleotide conversion sequencing technologies and implemented based on HISAT2.


.. conda:package:: hisat-3n

   |downloads_hisat-3n| |docker_hisat-3n|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on python: ``>3.5``

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

    pixi global install hisat-3n

to add into an existing workspace instead, run::

    pixi add hisat-3n

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hisat-3n

Alternatively, to install into a new environment, run::

    conda create -n envname hisat-3n

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hisat-3n:<tag>

(see `hisat-3n/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hisat-3n| image:: https://img.shields.io/conda/dn/bioconda/hisat-3n.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat-3n
   :alt:   (downloads)
.. |docker_hisat-3n| image:: https://quay.io/repository/biocontainers/hisat-3n/status
   :target: https://quay.io/repository/biocontainers/hisat-3n
.. _`hisat-3n/tags`: https://quay.io/repository/biocontainers/hisat-3n?tab=tags


.. raw:: html

    <script>
        var package = "hisat-3n";
        var versions = ["0.0.3"];
    </script>





Notes
-----
Pre\-built indices for HISAT2 can be downloaded from https\:\/\/daehwankimlab.github.io\/hisat2\/download\/.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat-3n/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat-3n/README.html