:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecoli2.db'
.. highlight: bash

bioconductor-ecoli2.db
======================

.. conda:recipe:: bioconductor-ecoli2.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix E\_coli\_2 Array annotation data \(chip ecoli2\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/ecoli2.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ecoli2.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2.db/meta.yaml>`_

   Affymetrix Affymetrix E\_coli\_2 Array annotation data \(chip ecoli2\) assembled using data from public repositories


.. conda:package:: bioconductor-ecoli2.db

   |downloads_bioconductor-ecoli2.db| |docker_bioconductor-ecoli2.db|

   :versions:
      
      

      ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.eck12.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecoli2.db

   and update with::

      conda update bioconductor-ecoli2.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecoli2.db:<tag>

   (see `bioconductor-ecoli2.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecoli2.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecoli2.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecoli2.db
   :alt:   (downloads)
.. |docker_bioconductor-ecoli2.db| image:: https://quay.io/repository/biocontainers/bioconductor-ecoli2.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecoli2.db
.. _`bioconductor-ecoli2.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ecoli2.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ecoli2.db";
        var versions = ["3.13.0","3.13.0","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecoli2.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecoli2.db/README.html