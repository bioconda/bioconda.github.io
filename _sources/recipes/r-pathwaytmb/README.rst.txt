:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathwaytmb'
.. highlight: bash

r-pathwaytmb
============

.. conda:recipe:: r-pathwaytmb
   :replaces_section_title:
   :noindex:

   A systematic bioinformatics tool to develop a new pathway\-based gene panel for tumor mutational burden \(TMB\) assessment \(pathway\-based tumor mutational burden\, PTMB\)\, using somatic mutations files in an efficient manner from either The Cancer Genome Atlas sources or any in\-house studies as long as the data is in mutation annotation file \(MAF\) format. Besides\, we develop a multiple machine learning method using the sample\'s PTMB profiles to identify cancer\-specific dysfunction pathways\, which can be a biomarker of prognostic and predictive for cancer immunotherapy.

   :homepage: https://CRAN.R-project.org/package=pathwayTMB
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-pathwaytmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathwaytmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathwaytmb/meta.yaml>`_

   


.. conda:package:: r-pathwaytmb

   |downloads_r-pathwaytmb| |docker_r-pathwaytmb|

   :versions:
      
      

      ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-clusterprofiler: 
   :depends on bioconductor-maftools: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-caret: 
   :depends on r-data.table: 
   :depends on r-glmnet: 
   :depends on r-proc: 
   :depends on r-purrr: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-survival: 
   :depends on r-survminer: 

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

    pixi global install r-pathwaytmb

to add into an existing workspace instead, run::

    pixi add r-pathwaytmb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pathwaytmb

Alternatively, to install into a new environment, run::

    conda create -n envname r-pathwaytmb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pathwaytmb:<tag>

(see `r-pathwaytmb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pathwaytmb| image:: https://img.shields.io/conda/dn/bioconda/r-pathwaytmb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathwaytmb
   :alt:   (downloads)
.. |docker_r-pathwaytmb| image:: https://quay.io/repository/biocontainers/r-pathwaytmb/status
   :target: https://quay.io/repository/biocontainers/r-pathwaytmb
.. _`r-pathwaytmb/tags`: https://quay.io/repository/biocontainers/r-pathwaytmb?tab=tags


.. raw:: html

    <script>
        var package = "r-pathwaytmb";
        var versions = ["0.1.3","0.1.3","0.1.3","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathwaytmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathwaytmb/README.html