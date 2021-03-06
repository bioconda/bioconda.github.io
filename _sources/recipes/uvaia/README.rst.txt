:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uvaia'
.. highlight: bash

uvaia
=====

.. conda:recipe:: uvaia
   :replaces_section_title:
   :noindex:

   Reference\-based alignment and sequence database search

   :homepage: https://github.com/quadram-institute-bioscience/uvaia
   :license: GPLv3
   :recipe: /`uvaia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvaia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uvaia/meta.yaml>`_
   :links: biotools: :biotools:`uvaia`

   


.. conda:package:: uvaia

   |downloads_uvaia| |docker_uvaia|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install uvaia

   and update with::

      conda update uvaia

   or use the docker container::

      docker pull quay.io/biocontainers/uvaia:<tag>

   (see `uvaia/tags`_ for valid values for ``<tag>``)


.. |downloads_uvaia| image:: https://img.shields.io/conda/dn/bioconda/uvaia.svg?style=flat
   :target: https://anaconda.org/bioconda/uvaia
   :alt:   (downloads)
.. |docker_uvaia| image:: https://quay.io/repository/biocontainers/uvaia/status
   :target: https://quay.io/repository/biocontainers/uvaia
.. _`uvaia/tags`: https://quay.io/repository/biocontainers/uvaia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uvaia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uvaia/README.html