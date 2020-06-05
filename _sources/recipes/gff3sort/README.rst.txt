:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff3sort'
.. highlight: bash

gff3sort
========

.. conda:recipe:: gff3sort
   :replaces_section_title:
   :noindex:

   A Perl Script to sort gff3 files and produce suitable results for tabix tools

   :homepage: https://github.com/billzt/gff3sort
   :license: GNU General Public License v3.0
   :recipe: /`gff3sort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort/meta.yaml>`_

   


.. conda:package:: gff3sort

   |downloads_gff3sort| |docker_gff3sort|

   :versions:
      
      

      ``0.1.a1a2bc9-1``,  ``0.1.a1a2bc9-0``

      

   
   :depends perl: 
   :depends perl-data-match: 
   :depends perl-sort-naturally: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gff3sort

   and update with::

      conda update gff3sort

   or use the docker container::

      docker pull quay.io/biocontainers/gff3sort:<tag>

   (see `gff3sort/tags`_ for valid values for ``<tag>``)


.. |downloads_gff3sort| image:: https://img.shields.io/conda/dn/bioconda/gff3sort.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3sort
   :alt:   (downloads)
.. |docker_gff3sort| image:: https://quay.io/repository/biocontainers/gff3sort/status
   :target: https://quay.io/repository/biocontainers/gff3sort
.. _`gff3sort/tags`: https://quay.io/repository/biocontainers/gff3sort?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3sort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3sort/README.html