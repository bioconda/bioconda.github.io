:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pindel'
.. highlight: bash

pindel
======

.. conda:recipe:: pindel
   :replaces_section_title:
   :noindex:

   Pindel can detect breakpoints of large deletions\, medium sized insertions\, inversions\, tandem duplications and other structural variants at single\-based resolution from next\-gen sequence data

   :homepage: http://gmt.genome.wustl.edu/packages/pindel/index.html
   :license: GPLv3
   :recipe: /`pindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel/meta.yaml>`_
   :links: biotools: :biotools:`pindel`

   


.. conda:package:: pindel

   |downloads_pindel| |docker_pindel|

   :versions:
      
      

      ``0.2.5b9-3``,  ``0.2.5b9-2``,  ``0.2.5b9-1``,  ``0.2.5b9-0``,  ``0.2.5b8-2``

      

   
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pindel

   and update with::

      conda update pindel

   or use the docker container::

      docker pull quay.io/biocontainers/pindel:<tag>

   (see `pindel/tags`_ for valid values for ``<tag>``)


.. |downloads_pindel| image:: https://img.shields.io/conda/dn/bioconda/pindel.svg?style=flat
   :target: https://anaconda.org/bioconda/pindel
   :alt:   (downloads)
.. |docker_pindel| image:: https://quay.io/repository/biocontainers/pindel/status
   :target: https://quay.io/repository/biocontainers/pindel
.. _`pindel/tags`: https://quay.io/repository/biocontainers/pindel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pindel/README.html