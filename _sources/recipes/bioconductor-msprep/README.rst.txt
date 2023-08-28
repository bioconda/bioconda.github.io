:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msprep'
.. highlight: bash

bioconductor-msprep
===================

.. conda:recipe:: bioconductor-msprep
   :replaces_section_title:
   :noindex:

   Package for Summarizing\, Filtering\, Imputing\, and Normalizing Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSPrep.html
   :license: GPL-3
   :recipe: /`bioconductor-msprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep/meta.yaml>`_

   Package performs summarization of replicates\, filtering by frequency\, several different options for imputing missing data\, and a variety of options for transforming\, batch correcting\, and normalizing data.


.. conda:package:: bioconductor-msprep

   |downloads_bioconductor-msprep| |docker_bioconductor-msprep|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-pcamethods: ``>=1.92.0,<1.93.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crmn: 
   :depends r-dplyr: ``>=0.7``
   :depends r-magrittr: 
   :depends r-missforest: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: ``>=1.2``
   :depends r-tidyr: 
   :depends r-vim: 
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

      mamba install bioconductor-msprep

   and update with::

      mamba update bioconductor-msprep

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msprep:<tag>

   (see `bioconductor-msprep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msprep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msprep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msprep
   :alt:   (downloads)
.. |docker_bioconductor-msprep| image:: https://quay.io/repository/biocontainers/bioconductor-msprep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msprep
.. _`bioconductor-msprep/tags`: https://quay.io/repository/biocontainers/bioconductor-msprep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msprep";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msprep/README.html