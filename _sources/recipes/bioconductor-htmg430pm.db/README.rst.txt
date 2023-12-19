:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htmg430pm.db'
.. highlight: bash

bioconductor-htmg430pm.db
=========================

.. conda:recipe:: bioconductor-htmg430pm.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_MG\-430\_PM Array annotation data \(chip htmg430pm\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/htmg430pm.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htmg430pm.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430pm.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430pm.db/meta.yaml>`_

   Affymetrix Affymetrix HT\_MG\-430\_PM Array annotation data \(chip htmg430pm\) assembled using data from public repositories


.. conda:package:: bioconductor-htmg430pm.db

   |downloads_bioconductor-htmg430pm.db| |docker_bioconductor-htmg430pm.db|

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

      mamba install bioconductor-htmg430pm.db

   and update with::

      mamba update bioconductor-htmg430pm.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-htmg430pm.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htmg430pm.db:<tag>

   (see `bioconductor-htmg430pm.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htmg430pm.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htmg430pm.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htmg430pm.db
   :alt:   (downloads)
.. |docker_bioconductor-htmg430pm.db| image:: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db
.. _`bioconductor-htmg430pm.db/tags`: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htmg430pm.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htmg430pm.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htmg430pm.db/README.html