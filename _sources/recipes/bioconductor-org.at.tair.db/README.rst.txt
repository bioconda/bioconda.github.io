:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.at.tair.db'
.. highlight: bash

bioconductor-org.at.tair.db
===========================

.. conda:recipe:: bioconductor-org.at.tair.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Arabidopsis

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/org.At.tair.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.at.tair.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.at.tair.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.at.tair.db/meta.yaml>`_

   Genome wide annotation for Arabidopsis\, primarily based on mapping using TAIR identifiers.


.. conda:package:: bioconductor-org.at.tair.db

   |downloads_bioconductor-org.at.tair.db| |docker_bioconductor-org.at.tair.db|

   :versions:
      
      

      ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-org.at.tair.db

   and update with::

      conda update bioconductor-org.at.tair.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.at.tair.db:<tag>

   (see `bioconductor-org.at.tair.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.at.tair.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.at.tair.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.at.tair.db
   :alt:   (downloads)
.. |docker_bioconductor-org.at.tair.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db
.. _`bioconductor-org.at.tair.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.at.tair.db";
        var versions = ["3.14.0","3.13.0","3.12.0","3.12.0","3.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.at.tair.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.at.tair.db/README.html