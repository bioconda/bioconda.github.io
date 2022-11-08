:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htmg430b.db'
.. highlight: bash

bioconductor-htmg430b.db
========================

.. conda:recipe:: bioconductor-htmg430b.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_MG\-430B Array annotation data \(chip htmg430b\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/htmg430b.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htmg430b.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430b.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430b.db/meta.yaml>`_

   Affymetrix Affymetrix HT\_MG\-430B Array annotation data \(chip htmg430b\) assembled using data from public repositories


.. conda:package:: bioconductor-htmg430b.db

   |downloads_bioconductor-htmg430b.db| |docker_bioconductor-htmg430b.db|

   :versions:
      
      

      ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends bioconductor-org.mm.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htmg430b.db

   and update with::

      conda update bioconductor-htmg430b.db

   or use the docker container::

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
        var versions = ["3.13.0","3.13.0","3.13.0"];
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