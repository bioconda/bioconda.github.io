:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-octad.db'
.. highlight: bash

bioconductor-octad.db
=====================

.. conda:recipe:: bioconductor-octad.db
   :replaces_section_title:
   :noindex:

   Open Cancer TherApeutic Discovery \(OCTAD\) database

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/octad.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-octad.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db/meta.yaml>`_

   Open Cancer TherApeutic Discovery \(OCTAD\) package implies sRGES approach for the drug discovery. The essential idea is to identify drugs that reverse the gene expression signature of a disease by tamping down over\-expressed genes and stimulating weakly expressed ones. The following package contains all required precomputed data for whole OCTAD pipeline computation.


.. conda:package:: bioconductor-octad.db

   |downloads_bioconductor-octad.db| |docker_bioconductor-octad.db|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-octad.db

   and update with::

      conda update bioconductor-octad.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-octad.db:<tag>

   (see `bioconductor-octad.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-octad.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-octad.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-octad.db
   :alt:   (downloads)
.. |docker_bioconductor-octad.db| image:: https://quay.io/repository/biocontainers/bioconductor-octad.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-octad.db
.. _`bioconductor-octad.db/tags`: https://quay.io/repository/biocontainers/bioconductor-octad.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-octad.db";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-octad.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-octad.db/README.html