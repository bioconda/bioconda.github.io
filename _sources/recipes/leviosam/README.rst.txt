:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviosam'
.. highlight: bash

leviosam
========

.. conda:recipe:: leviosam
   :replaces_section_title:
   :noindex:

   lift\-over of alignments for variant\-aware references

   :homepage: https://github.com/alshai/levioSAM
   :license: MIT
   :recipe: /`leviosam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviosam/meta.yaml>`_

   


.. conda:package:: leviosam

   |downloads_leviosam| |docker_leviosam|

   :versions:
      
      

      ``3.1.1-0``,  ``0.4.0-0``,  ``0.3.1.2-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends sdsl-lite: ``>=2.1.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install leviosam

   and update with::

      conda update leviosam

   or use the docker container::

      docker pull quay.io/biocontainers/leviosam:<tag>

   (see `leviosam/tags`_ for valid values for ``<tag>``)


.. |downloads_leviosam| image:: https://img.shields.io/conda/dn/bioconda/leviosam.svg?style=flat
   :target: https://anaconda.org/bioconda/leviosam
   :alt:   (downloads)
.. |docker_leviosam| image:: https://quay.io/repository/biocontainers/leviosam/status
   :target: https://quay.io/repository/biocontainers/leviosam
.. _`leviosam/tags`: https://quay.io/repository/biocontainers/leviosam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviosam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviosam/README.html