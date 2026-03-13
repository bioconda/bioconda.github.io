:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eztune'
.. highlight: bash

r-eztune
========

.. conda:recipe:: r-eztune
   :replaces_section_title:
   :noindex:

   Contains two functions that are intended to make tuning supervised learning methods easy. The eztune function uses a genetic algorithm or Hooke\-Jeeves optimizer to find the best set of tuning parameters. The user can choose the optimizer\, the learning method\, and if optimization will be based on accuracy obtained through validation error\, cross validation\, or resubstitution. The function eztune.cv will compute a cross validated error rate. The purpose of eztune\_cv is to provide a cross validated accuracy or MSE when resubstitution or validation data are used for optimization because error measures from both approaches can be misleading.

   :homepage: https://CRAN.R-project.org/package=EZtune
   :license: GPL3 / GPL-3
   :recipe: /`r-eztune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eztune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eztune/meta.yaml>`_

   


.. conda:package:: r-eztune

   |downloads_r-eztune| |docker_r-eztune|

   :versions:
      
      

      ``3.1.1-1``,  ``3.1.1-0``

      

   
   :depends on bioconductor-biocstyle: 
   :depends on r-ada: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-e1071: 
   :depends on r-ga: 
   :depends on r-gbm: 
   :depends on r-glmnet: 
   :depends on r-optimx: 
   :depends on r-rocr: 
   :depends on r-rpart: 

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

    pixi global install r-eztune

to add into an existing workspace instead, run::

    pixi add r-eztune

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-eztune

Alternatively, to install into a new environment, run::

    conda create -n envname r-eztune

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-eztune:<tag>

(see `r-eztune/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-eztune| image:: https://img.shields.io/conda/dn/bioconda/r-eztune.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eztune
   :alt:   (downloads)
.. |docker_r-eztune| image:: https://quay.io/repository/biocontainers/r-eztune/status
   :target: https://quay.io/repository/biocontainers/r-eztune
.. _`r-eztune/tags`: https://quay.io/repository/biocontainers/r-eztune?tab=tags


.. raw:: html

    <script>
        var package = "r-eztune";
        var versions = ["3.1.1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eztune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eztune/README.html