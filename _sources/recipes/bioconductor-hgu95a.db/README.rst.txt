:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95a.db'
.. highlight: bash

bioconductor-hgu95a.db
======================

.. conda:recipe:: bioconductor-hgu95a.db
   :replaces_section_title:
   :noindex:

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95a\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/hgu95a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95a.db/meta.yaml>`_

   Affymetrix Human Genome U95 Set annotation data \(chip hgu95a\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu95a.db

   |downloads_bioconductor-hgu95a.db| |docker_bioconductor-hgu95a.db|

   :versions:
      
      

      ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95a.db

   and update with::

      conda update bioconductor-hgu95a.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95a.db:<tag>

   (see `bioconductor-hgu95a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95a.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu95a.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95a.db
.. _`bioconductor-hgu95a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95a.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95a.db";
        var versions = ["3.13.0","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95a.db/README.html