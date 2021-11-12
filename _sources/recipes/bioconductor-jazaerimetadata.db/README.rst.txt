:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jazaerimetadata.db'
.. highlight: bash

bioconductor-jazaerimetadata.db
===============================

.. conda:recipe:: bioconductor-jazaerimetadata.db
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for JazaeriMetaData

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/JazaeriMetaData.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-jazaerimetadata.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jazaerimetadata.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jazaerimetadata.db/meta.yaml>`_

   A data package containing annotation data for JazaeriMetaData assembled using data from public repositories


.. conda:package:: bioconductor-jazaerimetadata.db

   |downloads_bioconductor-jazaerimetadata.db| |docker_bioconductor-jazaerimetadata.db|

   :versions:
      
      

      ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jazaerimetadata.db

   and update with::

      conda update bioconductor-jazaerimetadata.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jazaerimetadata.db:<tag>

   (see `bioconductor-jazaerimetadata.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jazaerimetadata.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jazaerimetadata.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jazaerimetadata.db
   :alt:   (downloads)
.. |docker_bioconductor-jazaerimetadata.db| image:: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db
.. _`bioconductor-jazaerimetadata.db/tags`: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jazaerimetadata.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jazaerimetadata.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jazaerimetadata.db/README.html