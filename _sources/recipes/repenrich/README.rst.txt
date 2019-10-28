:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repenrich'
.. highlight: bash

repenrich
=========

.. conda:recipe:: repenrich
   :replaces_section_title:

   RepEnrich is a method to estimate repetitive element enrichment using high\-throughput sequencing data.

   :homepage: https://github.com/nskvir/RepEnrich
   :license: Custom OSS
   :recipe: /`repenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich/meta.yaml>`_

   


.. conda:package:: repenrich

   |downloads_repenrich| |docker_repenrich|

   :versions: 1.2-2, 1.2-1, 1.2-0
   
   :depends bedtools: <2.24.0
   :depends biopython: 
   :depends bowtie: 
   :depends python: <3
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repenrich

   and update with::

      conda update repenrich

   or use the docker container::

      docker pull quay.io/biocontainers/repenrich:<tag>

   (see `repenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_repenrich| image:: https://img.shields.io/conda/dn/bioconda/repenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/repenrich
   :alt:   (downloads)
.. |docker_repenrich| image:: https://quay.io/repository/biocontainers/repenrich/status
   :target: https://quay.io/repository/biocontainers/repenrich
.. _`repenrich/tags`: https://quay.io/repository/biocontainers/repenrich?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repenrich/README.html