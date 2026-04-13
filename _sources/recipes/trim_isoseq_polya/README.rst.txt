:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trim_isoseq_polya'
.. highlight: bash

trim_isoseq_polya
=================

.. conda:recipe:: trim_isoseq_polya
   :replaces_section_title:
   :noindex:

   Trims polyA tails from IsoSeq FASTA files

   :homepage: https://github.com/PacificBiosciences/trim_isoseq_polyA
   :license: BSD-3-Clause-Clear
   :recipe: /`trim_isoseq_polya <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim_isoseq_polya>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trim_isoseq_polya/meta.yaml>`_

   


.. conda:package:: trim_isoseq_polya

   |downloads_trim_isoseq_polya| |docker_trim_isoseq_polya|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

   :additional platforms:
      

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

    pixi global install trim_isoseq_polya

to add into an existing workspace instead, run::

    pixi add trim_isoseq_polya

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trim_isoseq_polya

Alternatively, to install into a new environment, run::

    conda create -n envname trim_isoseq_polya

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trim_isoseq_polya:<tag>

(see `trim_isoseq_polya/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trim_isoseq_polya| image:: https://img.shields.io/conda/dn/bioconda/trim_isoseq_polya.svg?style=flat
   :target: https://anaconda.org/bioconda/trim_isoseq_polya
   :alt:   (downloads)
.. |docker_trim_isoseq_polya| image:: https://quay.io/repository/biocontainers/trim_isoseq_polya/status
   :target: https://quay.io/repository/biocontainers/trim_isoseq_polya
.. _`trim_isoseq_polya/tags`: https://quay.io/repository/biocontainers/trim_isoseq_polya?tab=tags


.. raw:: html

    <script>
        var package = "trim_isoseq_polya";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trim_isoseq_polya/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trim_isoseq_polya/README.html