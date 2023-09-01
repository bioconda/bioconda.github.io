:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qiime2r'
.. highlight: bash

r-qiime2r
=========

.. conda:recipe:: r-qiime2r
   :replaces_section_title:
   :noindex:

   Import qiime2 artifacts to R.

   :homepage: https://github.com/jbisanz/qiime2R
   :license: MIT / MIT
   :recipe: /`r-qiime2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiime2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiime2r/meta.yaml>`_

   Importing QIIME2 artifacts and associated data into R sessions.


.. conda:package:: r-qiime2r

   |downloads_r-qiime2r| |docker_r-qiime2r|

   :versions:
      
      

      ``0.99.20-1``,  ``0.99.20-0``

      

   
   :depends bioconductor-biostrings: ``>=2.46.0``
   :depends bioconductor-phyloseq: ``>=1.22.3``
   :depends bioconductor-rhdf5: ``>=2.26.2``
   :depends r-ape: ``>=5.2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.12.8``
   :depends r-dplyr: ``>=0.8.1``
   :depends r-dt: ``>=0.2``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-hmisc: ``>=4.1-1``
   :depends r-matrix: ``>=1.2-17``
   :depends r-tibble: ``>=2.1.3``
   :depends r-tidyr: ``>=0.8.3``
   :depends r-yaml: ``>=2.2.0``
   :depends r-zcompositions: ``>=1.0.3.1``
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

      mamba install r-qiime2r

   and update with::

      mamba update r-qiime2r

  To create a new environment, run::

      mamba create --name myenvname r-qiime2r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-qiime2r:<tag>

   (see `r-qiime2r/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qiime2r| image:: https://img.shields.io/conda/dn/bioconda/r-qiime2r.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qiime2r
   :alt:   (downloads)
.. |docker_r-qiime2r| image:: https://quay.io/repository/biocontainers/r-qiime2r/status
   :target: https://quay.io/repository/biocontainers/r-qiime2r
.. _`r-qiime2r/tags`: https://quay.io/repository/biocontainers/r-qiime2r?tab=tags


.. raw:: html

    <script>
        var package = "r-qiime2r";
        var versions = ["0.99.20","0.99.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qiime2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qiime2r/README.html