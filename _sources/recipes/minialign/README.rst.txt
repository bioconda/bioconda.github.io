:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minialign'
.. highlight: bash

minialign
=========

.. conda:recipe:: minialign
   :replaces_section_title:
   :noindex:

   Fast and accurate alignment tool for PacBio and Nanopore long reads.

   :homepage: https://github.com/ocxtal/minialign
   :license: MIT
   :recipe: /`minialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign/meta.yaml>`_

   Minialign is a little bit fast and moderately accurate nucleotide sequence
   alignment tool designed for PacBio and Nanopore long reads. It is built on
   three key algorithms\, minimizer\-based index of the minimap overlapper\,
   array\-based seed chaining\, and SIMD\-parallel Smith\-Waterman\-Gotoh extension.


.. conda:package:: minialign

   |downloads_minialign| |docker_minialign|

   :versions:
      
      

      ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minialign

   and update with::

      conda update minialign

   or use the docker container::

      docker pull quay.io/biocontainers/minialign:<tag>

   (see `minialign/tags`_ for valid values for ``<tag>``)


.. |downloads_minialign| image:: https://img.shields.io/conda/dn/bioconda/minialign.svg?style=flat
   :target: https://anaconda.org/bioconda/minialign
   :alt:   (downloads)
.. |docker_minialign| image:: https://quay.io/repository/biocontainers/minialign/status
   :target: https://quay.io/repository/biocontainers/minialign
.. _`minialign/tags`: https://quay.io/repository/biocontainers/minialign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minialign/README.html