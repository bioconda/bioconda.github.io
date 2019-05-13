:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu19ksubc.db'
.. highlight: bash

bioconductor-mu19ksubc.db
=========================

.. conda:recipe:: bioconductor-mu19ksubc.db
   :replaces_section_title:

   Affymetrix Murine Genome 19k Set annotation data \(chip mu19ksubc\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mu19ksubc.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mu19ksubc.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubc.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu19ksubc.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mu19ksubc.db

   |downloads_bioconductor-mu19ksubc.db| |docker_bioconductor-mu19ksubc.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu19ksubc.db

   and update with::

      conda update bioconductor-mu19ksubc.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu19ksubc.db:<tag>

   (see `bioconductor-mu19ksubc.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu19ksubc.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu19ksubc.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mu19ksubc.db
   :alt:   (downloads)
.. |docker_bioconductor-mu19ksubc.db| image:: https://quay.io/repository/biocontainers/bioconductor-mu19ksubc.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu19ksubc.db
.. _`bioconductor-mu19ksubc.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mu19ksubc.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu19ksubc.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu19ksubc.db/README.html