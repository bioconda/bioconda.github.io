:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meat'
.. highlight: bash

bioconductor-meat
=================

.. conda:recipe:: bioconductor-meat
   :replaces_section_title:
   :noindex:

   Muscle Epigenetic Age Test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MEAT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-meat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meat/meta.yaml>`_

   This package estimates epigenetic age in skeletal muscle\, using DNA methylation data generated with the Illumina Infinium technology \(HM27\, HM450 and HMEPIC\).


.. conda:package:: bioconductor-meat

   |downloads_bioconductor-meat| |docker_bioconductor-meat|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-watermelon: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dynamictreecut: ``>=1.63``
   :depends r-glmnet: ``>=2.0``
   :depends r-rpmm: ``>=1.25``
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-meat

   and update with::

      mamba update bioconductor-meat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-meat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meat:<tag>

   (see `bioconductor-meat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meat
   :alt:   (downloads)
.. |docker_bioconductor-meat| image:: https://quay.io/repository/biocontainers/bioconductor-meat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meat
.. _`bioconductor-meat/tags`: https://quay.io/repository/biocontainers/bioconductor-meat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meat";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meat/README.html