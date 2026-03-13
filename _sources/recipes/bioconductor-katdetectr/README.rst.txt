:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-katdetectr'
.. highlight: bash

bioconductor-katdetectr
=======================

.. conda:recipe:: bioconductor-katdetectr
   :replaces_section_title:
   :noindex:

   Detection\, Characterization and Visualization of Kataegis in Sequencing Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/katdetectr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-katdetectr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr/meta.yaml>`_

   Kataegis refers to the occurrence of regional hypermutation and is a phenomenon observed in a wide range of malignancies. Using changepoint detection katdetectr aims to identify putative kataegis foci from common data\-formats housing genomic variants.  Katdetectr has shown to be a robust package for the detection\, characterization and visualization of kataegis.


.. conda:package:: bioconductor-katdetectr

   |downloads_bioconductor-katdetectr| |docker_bioconductor-katdetectr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-changepoint: ``>=2.2.3``
   :depends on r-changepoint.np: ``>=1.0.3``
   :depends on r-checkmate: ``>=2.0.0``
   :depends on r-dplyr: ``>=1.0.8``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-ggtext: ``>=0.1.1``
   :depends on r-rdpack: ``>=2.3.1``
   :depends on r-rlang: ``>=1.0.2``
   :depends on r-scales: ``>=1.2.0``
   :depends on r-tibble: ``>=3.1.6``
   :depends on r-tidyr: ``>=1.2.0``

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

    pixi global install bioconductor-katdetectr

to add into an existing workspace instead, run::

    pixi add bioconductor-katdetectr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-katdetectr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-katdetectr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-katdetectr:<tag>

(see `bioconductor-katdetectr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-katdetectr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-katdetectr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-katdetectr
   :alt:   (downloads)
.. |docker_bioconductor-katdetectr| image:: https://quay.io/repository/biocontainers/bioconductor-katdetectr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-katdetectr
.. _`bioconductor-katdetectr/tags`: https://quay.io/repository/biocontainers/bioconductor-katdetectr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-katdetectr";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html