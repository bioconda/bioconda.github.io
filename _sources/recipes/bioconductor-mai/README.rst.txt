:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mai'
.. highlight: bash

bioconductor-mai
================

.. conda:recipe:: bioconductor-mai
   :replaces_section_title:
   :noindex:

   Mechanism\-Aware Imputation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAI.html
   :license: GPL-3
   :recipe: /`bioconductor-mai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mai/meta.yaml>`_

   A two\-step approach to imputing missing data in metabolomics. Step 1 uses a random forest classifier to classify missing values as either Missing Completely at Random\/Missing At Random \(MCAR\/MAR\) or Missing Not At Random \(MNAR\). MCAR\/MAR are combined because it is often difficult to distinguish these two missing types in metabolomics data. Step 2 imputes the missing values based on the classified missing mechanisms\, using the appropriate imputation algorithms. Imputation algorithms tested and available for MCAR\/MAR include Bayesian Principal Component Analysis \(BPCA\)\, Multiple Imputation No\-Skip K\-Nearest Neighbors \(Multi\_nsKNN\)\, and Random Forest. Imputation algorithms tested and available for MNAR include nsKNN and a single imputation approach for imputation of metabolites where left\-censoring is present.


.. conda:package:: bioconductor-mai

   |downloads_bioconductor-mai| |docker_bioconductor-mai|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-pcamethods: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-doparallel: 
   :depends on r-e1071: 
   :depends on r-foreach: 
   :depends on r-future: 
   :depends on r-future.apply: 
   :depends on r-missforest: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-mai

to add into an existing workspace instead, run::

    pixi add bioconductor-mai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mai

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mai:<tag>

(see `bioconductor-mai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mai
   :alt:   (downloads)
.. |docker_bioconductor-mai| image:: https://quay.io/repository/biocontainers/bioconductor-mai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mai
.. _`bioconductor-mai/tags`: https://quay.io/repository/biocontainers/bioconductor-mai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mai";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mai/README.html