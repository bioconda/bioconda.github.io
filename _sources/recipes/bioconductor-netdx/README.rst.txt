:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netdx'
.. highlight: bash

bioconductor-netdx
==================

.. conda:recipe:: bioconductor-netdx
   :replaces_section_title:
   :noindex:

   Network\-based patient classifier

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/netDx.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netdx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netdx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netdx/meta.yaml>`_

   netDx is a general\-purpose algorithm to build a patient classifier from heterogenous patient data. The method converts data into patient similarity networks at the level of features. Feature selection identifies features of predictive value to each class. Methods are provided for versatile predictor design and performance evaluation using standard measures. netDx natively groups molecular data into pathway\-level features and connects with Cytoscape for network visualization of pathway themes. For method details see\: Pai et al. \(2019\). netDx\: interpretable patient classification using integrated patient similarity networks. Molecular Systems Biology. 15\, e8497


.. conda:package:: bioconductor-netdx

   |downloads_bioconductor-netdx| |docker_bioconductor-netdx|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bigmemory: 
   :depends r-combinat: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-plotrix: 
   :depends r-pracma: 
   :depends r-rappdirs: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-rtsne: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-netdx

   and update with::

      mamba update bioconductor-netdx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netdx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netdx:<tag>

   (see `bioconductor-netdx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netdx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netdx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netdx
   :alt:   (downloads)
.. |docker_bioconductor-netdx| image:: https://quay.io/repository/biocontainers/bioconductor-netdx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netdx
.. _`bioconductor-netdx/tags`: https://quay.io/repository/biocontainers/bioconductor-netdx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netdx";
        var versions = ["1.14.0","1.12.0","1.9.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netdx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netdx/README.html