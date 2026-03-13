:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rolde'
.. highlight: bash

bioconductor-rolde
==================

.. conda:recipe:: bioconductor-rolde
   :replaces_section_title:
   :noindex:

   RolDE\: Robust longitudinal Differential Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RolDE.html
   :license: GPL-3
   :recipe: /`bioconductor-rolde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rolde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rolde/meta.yaml>`_

   RolDE detects longitudinal differential expression between two conditions in noisy high\-troughput data. Suitable even for data with a moderate amount of missing values.RolDE is a composite method\, consisting of three independent modules with different approaches to detecting longitudinal differential expression. The combination of these diverse modules allows RolDE to robustly detect varying differences in longitudinal trends and expression levels in diverse data types and experimental settings.


.. conda:package:: bioconductor-rolde

   |downloads_bioconductor-rolde| |docker_bioconductor-rolde|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-rots: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-foreach: 
   :depends on r-matrixstats: 
   :depends on r-nlme: 
   :depends on r-rngtools: 

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

    pixi global install bioconductor-rolde

to add into an existing workspace instead, run::

    pixi add bioconductor-rolde

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rolde

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rolde

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rolde:<tag>

(see `bioconductor-rolde/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rolde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rolde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rolde
   :alt:   (downloads)
.. |docker_bioconductor-rolde| image:: https://quay.io/repository/biocontainers/bioconductor-rolde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rolde
.. _`bioconductor-rolde/tags`: https://quay.io/repository/biocontainers/bioconductor-rolde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rolde";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rolde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rolde/README.html