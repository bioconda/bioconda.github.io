:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedtk'
.. highlight: bash

bedtk
=====

.. conda:recipe:: bedtk
   :replaces_section_title:
   :noindex:

   Bedtk is a set of simple tools to process BED files.

   :homepage: https://github.com/lh3/bedtk
   :license: MIT
   :recipe: /`bedtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk/meta.yaml>`_
   :links: biotools: :biotools:`bedtk`

   Bedtk is a set of simple tools to process BED files. It so far implements intersection\, subtraction\, sorting\, merging and computing the breadth of coverage. Bedtk is not as versatile as bedtools and never aims to match the bedtools feature set. It instead focuses on performance. Bedtk is several to tens of times faster and uses a fraction of memory. It also provides a few convenient functions. For example\, sorting\, merging and intersection can be done in one go without Unix pipes.



.. conda:package:: bedtk

   |downloads_bedtk| |docker_bedtk|

   :versions:
      
      

      ``0.0.r25.dirty-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bedtk

   and update with::

      conda update bedtk

   or use the docker container::

      docker pull quay.io/biocontainers/bedtk:<tag>

   (see `bedtk/tags`_ for valid values for ``<tag>``)


.. |downloads_bedtk| image:: https://img.shields.io/conda/dn/bioconda/bedtk.svg?style=flat
   :target: https://anaconda.org/bioconda/bedtk
   :alt:   (downloads)
.. |docker_bedtk| image:: https://quay.io/repository/biocontainers/bedtk/status
   :target: https://quay.io/repository/biocontainers/bedtk
.. _`bedtk/tags`: https://quay.io/repository/biocontainers/bedtk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtk/README.html