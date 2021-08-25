:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chicken.db'
.. highlight: bash

bioconductor-chicken.db
=======================

.. conda:recipe:: bioconductor-chicken.db
   :replaces_section_title:
   :noindex:

   Affymetrix chicken annotation data \(chip chicken\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/chicken.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chicken.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicken.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chicken.db/meta.yaml>`_

   Affymetrix chicken annotation data \(chip chicken\) assembled using data from public repositories


.. conda:package:: bioconductor-chicken.db

   |downloads_bioconductor-chicken.db| |docker_bioconductor-chicken.db|

   :versions:
      
      

      ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.gg.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chicken.db

   and update with::

      conda update bioconductor-chicken.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chicken.db:<tag>

   (see `bioconductor-chicken.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chicken.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chicken.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chicken.db
   :alt:   (downloads)
.. |docker_bioconductor-chicken.db| image:: https://quay.io/repository/biocontainers/bioconductor-chicken.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chicken.db
.. _`bioconductor-chicken.db/tags`: https://quay.io/repository/biocontainers/bioconductor-chicken.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chicken.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chicken.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chicken.db/README.html