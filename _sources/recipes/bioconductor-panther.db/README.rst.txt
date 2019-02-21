:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panther.db'
.. highlight: bash

bioconductor-panther.db
=======================

.. conda:recipe:: bioconductor-panther.db
   :replaces_section_title:

   A set of annotation maps describing the entire Gene Ontology assembled using data from PANTHER.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/PANTHER.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panther.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db/meta.yaml>`_

   


.. conda:package:: bioconductor-panther.db

   |downloads_bioconductor-panther.db| |docker_bioconductor-panther.db|

   :versions: 1.0.4-3, 1.0.4-2, 1.0.4-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rsqlite: 
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panther.db

   and update with::

      conda update bioconductor-panther.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panther.db:<tag>

   (see `bioconductor-panther.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panther.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panther.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-panther.db| image:: https://quay.io/repository/biocontainers/bioconductor-panther.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panther.db
.. _`bioconductor-panther.db/tags`: https://quay.io/repository/biocontainers/bioconductor-panther.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panther.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panther.db/README.html