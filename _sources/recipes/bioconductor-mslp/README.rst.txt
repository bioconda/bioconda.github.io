:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mslp'
.. highlight: bash

bioconductor-mslp
=================

.. conda:recipe:: bioconductor-mslp
   :replaces_section_title:
   :noindex:

   Predict synthetic lethal partners of tumour mutations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mslp.html
   :license: GPL-3
   :recipe: /`bioconductor-mslp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mslp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mslp/meta.yaml>`_

   An integrated pipeline to predict the potential synthetic lethality partners \(SLPs\) of tumour mutations\, based on gene expression\, mutation profiling and cell line genetic screens data. It has builtd\-in support for data from cBioPortal. The primary SLPs correlating with muations in WT and compensating for the loss of function of mutations are predicted by random forest based methods \(GENIE3\) and Rank Products\, respectively. Genetic screens are employed to identfy consensus SLPs leads to reduced cell viability when perturbed.


.. conda:package:: bioconductor-mslp

   |downloads_bioconductor-mslp| |docker_bioconductor-mslp|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-rankprod: ``>=3.32.0,<3.33.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.13.0``
   :depends r-dorng: 
   :depends r-fmsb: 
   :depends r-foreach: 
   :depends r-magrittr: 
   :depends r-proc: 
   :depends r-randomforest: 
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

      mamba install bioconductor-mslp

   and update with::

      mamba update bioconductor-mslp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mslp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mslp:<tag>

   (see `bioconductor-mslp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mslp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mslp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mslp
   :alt:   (downloads)
.. |docker_bioconductor-mslp| image:: https://quay.io/repository/biocontainers/bioconductor-mslp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mslp
.. _`bioconductor-mslp/tags`: https://quay.io/repository/biocontainers/bioconductor-mslp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mslp";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mslp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mslp/README.html