:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netboost'
.. highlight: bash

bioconductor-netboost
=====================

.. conda:recipe:: bioconductor-netboost
   :replaces_section_title:
   :noindex:

   Network Analysis Supported by Boosting

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/netboost.html
   :license: GPL-3
   :recipe: /`bioconductor-netboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboost/meta.yaml>`_

   Boosting supported network analysis for high\-dimensional omics applications. This package comes bundled with the MC\-UPGMA clustering package by Yaniv Loewenstein.


.. conda:package:: bioconductor-netboost

   |downloads_bioconductor-netboost| |docker_bioconductor-netboost|

   :versions:
      
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=14.0.4``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-colorspace: 
   :depends on r-dynamictreecut: 
   :depends on r-r.utils: 
   :depends on r-rcpp: 
   :depends on r-rcppparallel: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-netboost

to add into an existing workspace instead, run::

    pixi add bioconductor-netboost

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-netboost

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-netboost

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-netboost:<tag>

(see `bioconductor-netboost/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-netboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netboost
   :alt:   (downloads)
.. |docker_bioconductor-netboost| image:: https://quay.io/repository/biocontainers/bioconductor-netboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netboost
.. _`bioconductor-netboost/tags`: https://quay.io/repository/biocontainers/bioconductor-netboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netboost";
        var versions = ["2.6.0","2.2.0","2.0.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netboost/README.html