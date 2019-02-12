:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jazaerimetadata.db'
.. highlight: bash

bioconductor-jazaerimetadata.db
===============================

.. conda:recipe:: bioconductor-jazaerimetadata.db
   :replaces_section_title:

   A data package containing annotation data for JazaeriMetaData assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/JazaeriMetaData.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-jazaerimetadata.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jazaerimetadata.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jazaerimetadata.db/meta.yaml>`_

   


.. conda:package:: bioconductor-jazaerimetadata.db

   |downloads_bioconductor-jazaerimetadata.db| |docker_bioconductor-jazaerimetadata.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jazaerimetadata.db

   and update with::

      conda update bioconductor-jazaerimetadata.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db:<tag>

   (see `bioconductor-jazaerimetadata.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jazaerimetadata.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jazaerimetadata.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-jazaerimetadata.db| image:: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db
.. _`bioconductor-jazaerimetadata.db/tags`: https://quay.io/repository/biocontainers/bioconductor-jazaerimetadata.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jazaerimetadata.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jazaerimetadata.db/README.html