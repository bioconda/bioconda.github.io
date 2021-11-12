:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hta20probeset.db'
.. highlight: bash

bioconductor-hta20probeset.db
=============================

.. conda:recipe:: bioconductor-hta20probeset.db
   :replaces_section_title:
   :noindex:

   Affymetrix hta20 annotation data \(chip hta20probeset\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hta20probeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hta20probeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20probeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20probeset.db/meta.yaml>`_

   Affymetrix hta20 annotation data \(chip hta20probeset\) assembled using data from public repositories


.. conda:package:: bioconductor-hta20probeset.db

   |downloads_bioconductor-hta20probeset.db| |docker_bioconductor-hta20probeset.db|

   :versions:
      
      

      ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hta20probeset.db

   and update with::

      conda update bioconductor-hta20probeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hta20probeset.db:<tag>

   (see `bioconductor-hta20probeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hta20probeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hta20probeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hta20probeset.db
   :alt:   (downloads)
.. |docker_bioconductor-hta20probeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db
.. _`bioconductor-hta20probeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hta20probeset.db";
        var versions = ["8.8.0","8.7.0","8.7.0","8.7.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hta20probeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hta20probeset.db/README.html