:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minia'
.. highlight: bash

minia
=====

.. conda:recipe:: minia
   :replaces_section_title:
   :noindex:

   Minia is a short\-read assembler based on a de Bruijn graph\, capable of assembling a human genome on a desktop computer in a day.

   :homepage: https://github.com/GATB/minia
   :license: file
   :recipe: /`minia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia/meta.yaml>`_
   :links: biotools: :biotools:`minia`

   


.. conda:package:: minia

   |downloads_minia| |docker_minia|

   :versions:
      
      

      ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minia

   and update with::

      conda update minia

   or use the docker container::

      docker pull quay.io/biocontainers/minia:<tag>

   (see `minia/tags`_ for valid values for ``<tag>``)


.. |downloads_minia| image:: https://img.shields.io/conda/dn/bioconda/minia.svg?style=flat
   :target: https://anaconda.org/bioconda/minia
   :alt:   (downloads)
.. |docker_minia| image:: https://quay.io/repository/biocontainers/minia/status
   :target: https://quay.io/repository/biocontainers/minia
.. _`minia/tags`: https://quay.io/repository/biocontainers/minia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minia/README.html