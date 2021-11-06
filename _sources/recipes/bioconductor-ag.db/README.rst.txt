:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ag.db'
.. highlight: bash

bioconductor-ag.db
==================

.. conda:recipe:: bioconductor-ag.db
   :replaces_section_title:
   :noindex:

   Affymetrix Arabidopsis Genome Array annotation data \(chip ag\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/ag.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ag.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db/meta.yaml>`_

   Affymetrix Arabidopsis Genome Array annotation data \(chip ag\) assembled using data from public repositories


.. conda:package:: bioconductor-ag.db

   |downloads_bioconductor-ag.db| |docker_bioconductor-ag.db|

   :versions:
      
      

      ``3.13.0-0``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.at.tair.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ag.db

   and update with::

      conda update bioconductor-ag.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ag.db:<tag>

   (see `bioconductor-ag.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ag.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ag.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ag.db
   :alt:   (downloads)
.. |docker_bioconductor-ag.db| image:: https://quay.io/repository/biocontainers/bioconductor-ag.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ag.db
.. _`bioconductor-ag.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ag.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ag.db";
        var versions = ["3.13.0","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ag.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ag.db/README.html