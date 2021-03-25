:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgdspider'
.. highlight: bash

pgdspider
=========

.. conda:recipe:: pgdspider
   :replaces_section_title:
   :noindex:

   An automated data conversion tool for connecting population genetics and genomics programs

   :homepage: http://www.cmpg.unibe.ch/software/PGDSpider/
   :license: BSD / BSD-3-clause
   :recipe: /`pgdspider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgdspider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgdspider/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btr642`

   PGDSpider is a powerful automated data conversion tool for population genetic and genomics programs.
   It facilitates the data exchange possibilities between programs for a vast range of data types
   \(e.g. DNA\, RNA\, NGS\, microsatellite\, SNP\, RFLP\, AFLP\, multi\-allelic data\, allele frequency or genetic distances\).



.. conda:package:: pgdspider

   |downloads_pgdspider| |docker_pgdspider|

   :versions:
      
      

      ``2.1.1.5-1``,  ``2.1.1.5-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pgdspider

   and update with::

      conda update pgdspider

   or use the docker container::

      docker pull quay.io/biocontainers/pgdspider:<tag>

   (see `pgdspider/tags`_ for valid values for ``<tag>``)


.. |downloads_pgdspider| image:: https://img.shields.io/conda/dn/bioconda/pgdspider.svg?style=flat
   :target: https://anaconda.org/bioconda/pgdspider
   :alt:   (downloads)
.. |docker_pgdspider| image:: https://quay.io/repository/biocontainers/pgdspider/status
   :target: https://quay.io/repository/biocontainers/pgdspider
.. _`pgdspider/tags`: https://quay.io/repository/biocontainers/pgdspider?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgdspider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgdspider/README.html