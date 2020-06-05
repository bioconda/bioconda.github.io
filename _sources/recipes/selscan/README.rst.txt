:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selscan'
.. highlight: bash

selscan
=======

.. conda:recipe:: selscan
   :replaces_section_title:
   :noindex:

   a program to calculate EHH\-based scans for positive selection in genomes

   :homepage: https://github.com/szpiech/selscan
   :license: GPL / GPL-3.0
   :recipe: /`selscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selscan/meta.yaml>`_
   :links: biotools: :biotools:`selscan`, doi: :doi:`10.1093/molbev/msu211`

   


.. conda:package:: selscan

   |downloads_selscan| |docker_selscan|

   :versions:
      
      

      ``1.2.0a-0``,  ``1.1.0b-3``,  ``1.1.0b-2``,  ``1.1.0b-1``,  ``1.1.0b-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selscan

   and update with::

      conda update selscan

   or use the docker container::

      docker pull quay.io/biocontainers/selscan:<tag>

   (see `selscan/tags`_ for valid values for ``<tag>``)


.. |downloads_selscan| image:: https://img.shields.io/conda/dn/bioconda/selscan.svg?style=flat
   :target: https://anaconda.org/bioconda/selscan
   :alt:   (downloads)
.. |docker_selscan| image:: https://quay.io/repository/biocontainers/selscan/status
   :target: https://quay.io/repository/biocontainers/selscan
.. _`selscan/tags`: https://quay.io/repository/biocontainers/selscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selscan/README.html