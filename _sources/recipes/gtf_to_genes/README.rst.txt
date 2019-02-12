:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtf_to_genes'
.. highlight: bash

gtf_to_genes
============

.. conda:recipe:: gtf_to_genes
   :replaces_section_title:

   Fast GTF parser

   :homepage: http://code.google.com/p/gtf-to-genes/
   :license: MIT / MIT License
   :recipe: /`gtf_to_genes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtf_to_genes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtf_to_genes/meta.yaml>`_

   


.. conda:package:: gtf_to_genes

   |downloads_gtf_to_genes| |docker_gtf_to_genes|

   :versions: 1.40-1, 1.40-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gtf_to_genes

   and update with::

      conda update gtf_to_genes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gtf_to_genes:<tag>

   (see `gtf_to_genes/tags`_ for valid values for ``<tag>``)


.. |downloads_gtf_to_genes| image:: https://img.shields.io/conda/dn/bioconda/gtf_to_genes.svg?style=flat
   :alt:   (downloads)
.. |docker_gtf_to_genes| image:: https://quay.io/repository/biocontainers/gtf_to_genes/status
   :target: https://quay.io/repository/biocontainers/gtf_to_genes
.. _`gtf_to_genes/tags`: https://quay.io/repository/biocontainers/gtf_to_genes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtf_to_genes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtf_to_genes/README.html