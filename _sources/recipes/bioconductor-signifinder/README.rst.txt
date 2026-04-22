:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signifinder'
.. highlight: bash

bioconductor-signifinder
========================

.. conda:recipe:: bioconductor-signifinder
   :replaces_section_title:
   :noindex:

   Collection and implementation of public transcriptional cancer signatures

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/signifinder.html
   :license: AGPL-3
   :recipe: /`bioconductor-signifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signifinder/meta.yaml>`_

   signifinder is an R package for computing and exploring a compendium of tumor signatures. It allows to compute a variety of signatures coming from public literature\, based on gene expression values\, and return single\-sample \(\-cell\/\-spot\) scores. Currently\, signifinder collects more than 70 distinct signatures\, relating to multiple tumors and multiple cancer processes.


.. conda:package:: bioconductor-signifinder

   |downloads_bioconductor-signifinder| |docker_bioconductor-signifinder|

   :versions:
      
      

      ``1.12.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-consensusov: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-gsva: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dgeobj.utils: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggridges: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-maxstat: 
   :depends on r-openair: 
   :depends on r-patchwork: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-signifinder

to add into an existing workspace instead, run::

    pixi add bioconductor-signifinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-signifinder

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-signifinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-signifinder:<tag>

(see `bioconductor-signifinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-signifinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signifinder
   :alt:   (downloads)
.. |docker_bioconductor-signifinder| image:: https://quay.io/repository/biocontainers/bioconductor-signifinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signifinder
.. _`bioconductor-signifinder/tags`: https://quay.io/repository/biocontainers/bioconductor-signifinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signifinder";
        var versions = ["1.12.0","1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signifinder/README.html