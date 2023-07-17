:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htratfocus.db'
.. highlight: bash

bioconductor-htratfocus.db
==========================

.. conda:recipe:: bioconductor-htratfocus.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_Rat\-Focus Array annotation data \(chip htratfocus\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/htratfocus.db.html
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htratfocus.db

   and update with::

      conda update bioconductor-htratfocus.db

   or use the docker container::

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