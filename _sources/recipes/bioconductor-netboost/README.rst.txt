:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netboost'
.. highlight: bash

bioconductor-netboost
=====================

.. conda:recipe:: bioconductor-netboost
   :replaces_section_title:
   :noindex:

   Network Analysis Supported by Boosting

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/netboost.html
   :license: GPL-3
   :recipe: /`bioconductor-netboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netboost/meta.yaml>`_

   Boosting supported network analysis for high\-dimensional omics applications. This package comes bundled with the MC\-UPGMA clustering package by Yaniv Loewenstein.


.. conda:package:: bioconductor-netboost

   |downloads_bioconductor-netboost| |docker_bioconductor-netboost|

   :versions:
      
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-colorspace: 
   :depends r-dynamictreecut: 
   :depends r-r.utils: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-netboost

   and update with::

      mamba update bioconductor-netboost

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netboost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netboost:<tag>

   (see `bioconductor-netboost/tags`_ for valid values for ``<tag>``)


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