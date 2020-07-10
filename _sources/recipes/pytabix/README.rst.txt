:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytabix'
.. highlight: bash

pytabix
=======

.. conda:recipe:: pytabix
   :replaces_section_title:
   :noindex:

   Fast random access to sorted files compressed with bgzip and indexed by tabix.

   :homepage: https://github.com/slowkow/pytabix
   :license: MIT
   :recipe: /`pytabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix/meta.yaml>`_

   


.. conda:package:: pytabix

   |downloads_pytabix| |docker_pytabix|

   :versions:
      
      

      ``0.0.2-8``,  ``0.0.2-7``,  ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytabix

   and update with::

      conda update pytabix

   or use the docker container::

      docker pull quay.io/biocontainers/pytabix:<tag>

   (see `pytabix/tags`_ for valid values for ``<tag>``)


.. |downloads_pytabix| image:: https://img.shields.io/conda/dn/bioconda/pytabix.svg?style=flat
   :target: https://anaconda.org/bioconda/pytabix
   :alt:   (downloads)
.. |docker_pytabix| image:: https://quay.io/repository/biocontainers/pytabix/status
   :target: https://quay.io/repository/biocontainers/pytabix
.. _`pytabix/tags`: https://quay.io/repository/biocontainers/pytabix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytabix/README.html