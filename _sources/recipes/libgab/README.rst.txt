:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgab'
.. highlight: bash

libgab
======

.. conda:recipe:: libgab
   :replaces_section_title:
   :noindex:

   Several C\+\+ subroutines useful for bioinformatics

   :homepage: https://github.com/grenaud/libgab
   :license: GPL
   :recipe: /`libgab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab/meta.yaml>`_

   


.. conda:package:: libgab

   |downloads_libgab| |docker_libgab|

   :versions:
      
      

      ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libgab

   and update with::

      conda update libgab

   or use the docker container::

      docker pull quay.io/biocontainers/libgab:<tag>

   (see `libgab/tags`_ for valid values for ``<tag>``)


.. |downloads_libgab| image:: https://img.shields.io/conda/dn/bioconda/libgab.svg?style=flat
   :target: https://anaconda.org/bioconda/libgab
   :alt:   (downloads)
.. |docker_libgab| image:: https://quay.io/repository/biocontainers/libgab/status
   :target: https://quay.io/repository/biocontainers/libgab
.. _`libgab/tags`: https://quay.io/repository/biocontainers/libgab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgab/README.html