:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htmg430b.db'
.. highlight: bash

bioconductor-htmg430b.db
========================

.. conda:recipe:: bioconductor-htmg430b.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_MG\-430B Array annotation data \(chip htmg430b\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/htmg430b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htmg430b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430b.db/meta.yaml>`_

   Affymetrix Affymetrix HT\_MG\-430B Array annotation data \(chip htmg430b\) assembled using data from public repositories


.. conda:package:: bioconductor-htmg430b.db

   |downloads_bioconductor-htmg430b.db| |docker_bioconductor-htmg430b.db|

   :versions:
      
      

      ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-htmg430b.db

   and update with::

      mamba update bioconductor-htmg430b.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-htmg430b.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htmg430b.db:<tag>

   (see `bioconductor-htmg430b.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htmg430b.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htmg430b.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htmg430b.db
   :alt:   (downloads)
.. |docker_bioconductor-htmg430b.db| image:: https://quay.io/repository/biocontainers/bioconductor-htmg430b.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htmg430b.db
.. _`bioconductor-htmg430b.db/tags`: https://quay.io/repository/biocontainers/bioconductor-htmg430b.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htmg430b.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htmg430b.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htmg430b.db/README.html