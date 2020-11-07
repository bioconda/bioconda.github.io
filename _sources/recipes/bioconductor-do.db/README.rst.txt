:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-do.db'
.. highlight: bash

bioconductor-do.db
==================

.. conda:recipe:: bioconductor-do.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Disease Ontology

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/DO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-do.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db/meta.yaml>`_

   A set of annotation maps describing the entire Disease Ontology assembled using data from DO


.. conda:package:: bioconductor-do.db

   |downloads_bioconductor-do.db| |docker_bioconductor-do.db|

   :versions:
      
      

      ``2.9-9``,  ``2.9-8``,  ``2.9-7``,  ``2.9-6``,  ``2.9-4``,  ``2.9-3``,  ``2.9-1``,  ``2.9-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-do.db

   and update with::

      conda update bioconductor-do.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-do.db:<tag>

   (see `bioconductor-do.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-do.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-do.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-do.db
   :alt:   (downloads)
.. |docker_bioconductor-do.db| image:: https://quay.io/repository/biocontainers/bioconductor-do.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-do.db
.. _`bioconductor-do.db/tags`: https://quay.io/repository/biocontainers/bioconductor-do.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-do.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-do.db/README.html