:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htratfocus.db'
.. highlight: bash

bioconductor-htratfocus.db
==========================

.. conda:recipe:: bioconductor-htratfocus.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_Rat\-Focus Array annotation data \(chip htratfocus\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/htratfocus.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htratfocus.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htratfocus.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htratfocus.db/meta.yaml>`_

   Affymetrix Affymetrix HT\_Rat\-Focus Array annotation data \(chip htratfocus\) assembled using data from public repositories


.. conda:package:: bioconductor-htratfocus.db

   |downloads_bioconductor-htratfocus.db| |docker_bioconductor-htratfocus.db|

   :versions:
      
      

      ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.rn.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-htratfocus.db

   and update with::

      mamba update bioconductor-htratfocus.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-htratfocus.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htratfocus.db:<tag>

   (see `bioconductor-htratfocus.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htratfocus.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htratfocus.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htratfocus.db
   :alt:   (downloads)
.. |docker_bioconductor-htratfocus.db| image:: https://quay.io/repository/biocontainers/bioconductor-htratfocus.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htratfocus.db
.. _`bioconductor-htratfocus.db/tags`: https://quay.io/repository/biocontainers/bioconductor-htratfocus.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htratfocus.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htratfocus.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htratfocus.db/README.html