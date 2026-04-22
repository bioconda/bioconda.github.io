:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathmed'
.. highlight: bash

bioconductor-pathmed
====================

.. conda:recipe:: bioconductor-pathmed
   :replaces_section_title:
   :noindex:

   Scoring Personalized Molecular Portraits

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/pathMED.html
   :license: GPL-2
   :recipe: /`bioconductor-pathmed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathmed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathmed/meta.yaml>`_

   PathMED is a collection of tools to facilitate precision medicine studies with omics data \(e.g. transcriptomics\). Among its funcionalities\, genesets scores for individual samples may be calculated with several methods. These scores may be used to train machine learning models and to predict clinical features on new data. For this\, several machine learning methods are evaluated in order to select the best method based on internal validation and to tune the hyperparameters. Performance metrics and a ready\-to\-use model to predict the outcomes for new patients are returned.


.. conda:package:: bioconductor-pathmed

   |downloads_bioconductor-pathmed| |docker_bioconductor-pathmed|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-decoupler: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-gsva: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-singscore: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-caretensemble: 
   :depends on r-dplyr: 
   :depends on r-factoextra: 
   :depends on r-factominer: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-metrica: 
   :depends on r-pbapply: 
   :depends on r-reshape2: 
   :depends on r-stringi: 

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

    pixi global install bioconductor-pathmed

to add into an existing workspace instead, run::

    pixi add bioconductor-pathmed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pathmed

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pathmed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pathmed:<tag>

(see `bioconductor-pathmed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pathmed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathmed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathmed
   :alt:   (downloads)
.. |docker_bioconductor-pathmed| image:: https://quay.io/repository/biocontainers/bioconductor-pathmed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathmed
.. _`bioconductor-pathmed/tags`: https://quay.io/repository/biocontainers/bioconductor-pathmed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathmed";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathmed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathmed/README.html