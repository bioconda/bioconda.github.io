:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophasm'
.. highlight: bash

prophasm
========

.. conda:recipe:: prophasm
   :replaces_section_title:
   :noindex:

   ProPhasm – ProPhyle Assembler. Compressing k\-mer sets via assembling contigs.

   :homepage: https://github.com/prophyle/prophasm
   :license: MIT
   :recipe: /`prophasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophasm/meta.yaml>`_

   


.. conda:package:: prophasm

   |downloads_prophasm| |docker_prophasm|

   :versions:
      
      

      ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophasm

   and update with::

      conda update prophasm

   or use the docker container::

      docker pull quay.io/biocontainers/prophasm:<tag>

   (see `prophasm/tags`_ for valid values for ``<tag>``)


.. |downloads_prophasm| image:: https://img.shields.io/conda/dn/bioconda/prophasm.svg?style=flat
   :target: https://anaconda.org/bioconda/prophasm
   :alt:   (downloads)
.. |docker_prophasm| image:: https://quay.io/repository/biocontainers/prophasm/status
   :target: https://quay.io/repository/biocontainers/prophasm
.. _`prophasm/tags`: https://quay.io/repository/biocontainers/prophasm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophasm/README.html