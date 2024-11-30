:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enmcb'
.. highlight: bash

bioconductor-enmcb
==================

.. conda:recipe:: bioconductor-enmcb
   :replaces_section_title:
   :noindex:

   Predicting Disease Progression Based on Methylation Correlated Blocks using Ensemble Models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EnMCB.html
   :license: GPL-2
   :recipe: /`bioconductor-enmcb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmcb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enmcb/meta.yaml>`_

   Creation of the correlated blocks using DNA methylation profiles. Machine learning models can be constructed to predict differentially methylated blocks and disease progression.


.. conda:package:: bioconductor-enmcb

   |downloads_bioconductor-enmcb| |docker_bioconductor-enmcb|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mboost: 
   :depends r-rms: 
   :depends r-survival: 
   :depends r-survivalroc: 
   :depends r-survivalsvm: 
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

      mamba install bioconductor-enmcb

   and update with::

      mamba update bioconductor-enmcb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enmcb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enmcb:<tag>

   (see `bioconductor-enmcb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enmcb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enmcb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enmcb
   :alt:   (downloads)
.. |docker_bioconductor-enmcb| image:: https://quay.io/repository/biocontainers/bioconductor-enmcb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enmcb
.. _`bioconductor-enmcb/tags`: https://quay.io/repository/biocontainers/bioconductor-enmcb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enmcb";
        var versions = ["1.14.0","1.12.0","1.6.0","1.4.0","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enmcb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enmcb/README.html