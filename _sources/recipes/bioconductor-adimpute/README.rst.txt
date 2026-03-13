:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adimpute'
.. highlight: bash

bioconductor-adimpute
=====================

.. conda:recipe:: bioconductor-adimpute
   :replaces_section_title:
   :noindex:

   Adaptive Dropout Imputer \(ADImpute\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ADImpute.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-adimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute/meta.yaml>`_

   Single\-cell RNA sequencing \(scRNA\-seq\) methods are typically unable to quantify the expression levels of all genes in a cell\, creating a need for the computational prediction of missing values \(‘dropout imputation’\). Most existing dropout imputation methods are limited in the sense that they exclusively use the scRNA\-seq dataset at hand and do not exploit external gene\-gene relationship information. Here we propose two novel methods\: a gene regulatory network\-based approach using gene\-gene relationships learnt from external data and a baseline approach corresponding to a sample\-wide average. ADImpute can implement these novel methods and also combine them with existing imputation methods \(currently supported\: DrImpute\, SAVER\). ADImpute can learn the best performing method per gene and combine the results from different methods into an ensemble.


.. conda:package:: bioconductor-adimpute

   |downloads_bioconductor-adimpute| |docker_bioconductor-adimpute|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 
   :depends on r-drimpute: 
   :depends on r-kernlab: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-rsvd: 
   :depends on r-saver: 

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

    pixi global install bioconductor-adimpute

to add into an existing workspace instead, run::

    pixi add bioconductor-adimpute

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adimpute

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adimpute

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adimpute:<tag>

(see `bioconductor-adimpute/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adimpute
   :alt:   (downloads)
.. |docker_bioconductor-adimpute| image:: https://quay.io/repository/biocontainers/bioconductor-adimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adimpute
.. _`bioconductor-adimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-adimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adimpute";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adimpute/README.html