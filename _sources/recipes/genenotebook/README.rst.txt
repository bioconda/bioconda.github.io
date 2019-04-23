:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genenotebook'
.. highlight: bash

genenotebook
============

.. conda:recipe:: genenotebook
   :replaces_section_title:

   A colleborative notebook for comparative genomics

   :homepage: https://genenotebook.github.io
   :license: AGPL-3.0
   :recipe: /`genenotebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook/meta.yaml>`_

   


.. conda:package:: genenotebook

   |downloads_genenotebook| |docker_genenotebook|

   :versions: 0.1.15-4, 0.1.14-2, 0.1.13-0, 0.1.12-0, 0.1.11-0, 0.1.10-0, 0.1.9-0, 0.1.8-0, 0.1.7-0, 0.1.6-1, 0.1.5-1, 0.1.4-1, 0.1.4-0, 0.1.3-0, 0.1.2-1, 0.1.2-0, 0.1.1-0
   
   :depends blast: 
   :depends libcxx: >=4.0.1
   :depends mongodb: >=3.4
   :depends nodejs: 8.11.4.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genenotebook

   and update with::

      conda update genenotebook

   or use the docker container::

      docker pull quay.io/biocontainers/genenotebook:<tag>

   (see `genenotebook/tags`_ for valid values for ``<tag>``)


.. |downloads_genenotebook| image:: https://img.shields.io/conda/dn/bioconda/genenotebook.svg?style=flat
   :alt:   (downloads)
.. |docker_genenotebook| image:: https://quay.io/repository/biocontainers/genenotebook/status
   :target: https://quay.io/repository/biocontainers/genenotebook
.. _`genenotebook/tags`: https://quay.io/repository/biocontainers/genenotebook?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genenotebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genenotebook/README.html