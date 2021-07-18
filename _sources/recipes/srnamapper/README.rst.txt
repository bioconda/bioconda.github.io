:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnamapper'
.. highlight: bash

srnamapper
==========

.. conda:recipe:: srnamapper
   :replaces_section_title:
   :noindex:

   Mapping small RNA data to a genome.

   :homepage: https://github.com/mzytnicki/srnaMapper
   :license: GPL3
   :recipe: /`srnamapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper/meta.yaml>`_

   


.. conda:package:: srnamapper

   |downloads_srnamapper| |docker_srnamapper|

   :versions:
      
      

      ``1.0.6-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends make: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srnamapper

   and update with::

      conda update srnamapper

   or use the docker container::

      docker pull quay.io/biocontainers/srnamapper:<tag>

   (see `srnamapper/tags`_ for valid values for ``<tag>``)


.. |downloads_srnamapper| image:: https://img.shields.io/conda/dn/bioconda/srnamapper.svg?style=flat
   :target: https://anaconda.org/bioconda/srnamapper
   :alt:   (downloads)
.. |docker_srnamapper| image:: https://quay.io/repository/biocontainers/srnamapper/status
   :target: https://quay.io/repository/biocontainers/srnamapper
.. _`srnamapper/tags`: https://quay.io/repository/biocontainers/srnamapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnamapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnamapper/README.html