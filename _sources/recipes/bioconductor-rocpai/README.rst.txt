:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rocpai'
.. highlight: bash

bioconductor-rocpai
===================

.. conda:recipe:: bioconductor-rocpai
   :replaces_section_title:
   :noindex:

   Receiver Operating Characteristic Partial Area Indexes for evaluating classifiers

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ROCpAI.html
   :license: GPL-3
   :recipe: /`bioconductor-rocpai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai/meta.yaml>`_

   The package analyzes the Curve ROC\, identificates it among different types of Curve ROC and calculates the area under de curve through the method that is most accuracy. This package is able to standarizate proper and improper pAUC.


.. conda:package:: bioconductor-rocpai

   |downloads_bioconductor-rocpai| |docker_bioconductor-rocpai|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-fission: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-knitr: 
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

      mamba install bioconductor-rocpai

   and update with::

      mamba update bioconductor-rocpai

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rocpai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rocpai:<tag>

   (see `bioconductor-rocpai/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rocpai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rocpai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rocpai
   :alt:   (downloads)
.. |docker_bioconductor-rocpai| image:: https://quay.io/repository/biocontainers/bioconductor-rocpai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rocpai
.. _`bioconductor-rocpai/tags`: https://quay.io/repository/biocontainers/bioconductor-rocpai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rocpai";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rocpai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rocpai/README.html