:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-receptloss'
.. highlight: bash

bioconductor-receptloss
=======================

.. conda:recipe:: bioconductor-receptloss
   :replaces_section_title:
   :noindex:

   Unsupervised Identification of Genes with Expression Loss in Subsets of Tumors

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/receptLoss.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-receptloss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-receptloss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-receptloss/meta.yaml>`_

   receptLoss identifies genes whose expression is lost in subsets of tumors relative to normal tissue. It is particularly well\-suited in cases where the number of normal tissue samples is small\, as the distribution of gene expression in normal tissue samples is approximated by a Gaussian. Originally designed for identifying nuclear hormone receptor expression loss but can be applied transcriptome wide as well.


.. conda:package:: bioconductor-receptloss

   |downloads_bioconductor-receptloss| |docker_bioconductor-receptloss|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-receptloss

   and update with::

      mamba update bioconductor-receptloss

  To create a new environment, run::

      mamba create --name myenvname bioconductor-receptloss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-receptloss:<tag>

   (see `bioconductor-receptloss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-receptloss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-receptloss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-receptloss
   :alt:   (downloads)
.. |docker_bioconductor-receptloss| image:: https://quay.io/repository/biocontainers/bioconductor-receptloss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-receptloss
.. _`bioconductor-receptloss/tags`: https://quay.io/repository/biocontainers/bioconductor-receptloss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-receptloss";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-receptloss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-receptloss/README.html