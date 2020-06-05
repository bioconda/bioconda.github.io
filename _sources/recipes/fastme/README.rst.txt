:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastme'
.. highlight: bash

fastme
======

.. conda:recipe:: fastme
   :replaces_section_title:
   :noindex:

   a comprehensive\, accurate and fast distance\-based phylogeny inference program.

   :homepage: http://www.atgc-montpellier.fr/fastme/binaries.php
   :license: GPLv3
   :recipe: /`fastme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastme/meta.yaml>`_
   :links: biotools: :biotools:`fastme`, doi: :doi:`10.1093/molbev/msv150`

   


.. conda:package:: fastme

   |downloads_fastme| |docker_fastme|

   :versions:
      
      

      ``2.1.5-0``

      

   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastme

   and update with::

      conda update fastme

   or use the docker container::

      docker pull quay.io/biocontainers/fastme:<tag>

   (see `fastme/tags`_ for valid values for ``<tag>``)


.. |downloads_fastme| image:: https://img.shields.io/conda/dn/bioconda/fastme.svg?style=flat
   :target: https://anaconda.org/bioconda/fastme
   :alt:   (downloads)
.. |docker_fastme| image:: https://quay.io/repository/biocontainers/fastme/status
   :target: https://quay.io/repository/biocontainers/fastme
.. _`fastme/tags`: https://quay.io/repository/biocontainers/fastme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastme/README.html