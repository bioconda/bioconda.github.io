:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metablastr'
.. highlight: bash

r-metablastr
============

.. conda:recipe:: r-metablastr
   :replaces_section_title:
   :noindex:

   The metablastr package harnesses the power of BLAST by providing interface functions between it and R.

   :homepage: https://github.com/drostlab/metablastr
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-metablastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metablastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metablastr/meta.yaml>`_

   


.. conda:package:: r-metablastr

   |downloads_r-metablastr| |docker_r-metablastr|

   :versions:
      
      

      ``0.3.2-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.48.0``
   :depends on bioconductor-genomicfeatures: ``>=1.30.3``
   :depends on bioconductor-genomicranges: ``>=1.30.3``
   :depends on bioconductor-iranges: ``>=2.16``
   :depends on bioconductor-rsamtools: ``>=1.30.0``
   :depends on bioconductor-rtracklayer: ``>=1.38.3``
   :depends on libgcc-ng: ``>=12``
   :depends on libpq: ``>=15.4,<16.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-fs: ``>=1.5.1``
   :depends on r-ggplot2: ``>=3.3.3``
   :depends on r-ggridges: ``>=0.5.0``
   :depends on r-ggsci: ``>=2.9``
   :depends on r-rcolorbrewer: ``>=1.1_2``
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-readr: ``>=1.3.1``
   :depends on r-scales: ``>=1.0.0``
   :depends on r-seqinr: ``>=3.6_1``

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

    pixi global install r-metablastr

to add into an existing workspace instead, run::

    pixi add r-metablastr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-metablastr

Alternatively, to install into a new environment, run::

    conda create -n envname r-metablastr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-metablastr:<tag>

(see `r-metablastr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-metablastr| image:: https://img.shields.io/conda/dn/bioconda/r-metablastr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metablastr
   :alt:   (downloads)
.. |docker_r-metablastr| image:: https://quay.io/repository/biocontainers/r-metablastr/status
   :target: https://quay.io/repository/biocontainers/r-metablastr
.. _`r-metablastr/tags`: https://quay.io/repository/biocontainers/r-metablastr?tab=tags


.. raw:: html

    <script>
        var package = "r-metablastr";
        var versions = ["0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metablastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metablastr/README.html