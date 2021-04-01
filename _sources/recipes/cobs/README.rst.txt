:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobs'
.. highlight: bash

cobs
====

.. conda:recipe:: cobs
   :replaces_section_title:
   :noindex:

   Compact Bit\-Sliced Signature Index \(for Genomic k\-Mer Data or q\-Grams\)

   :homepage: https://panthema.net/cobs
   :license: MIT
   :recipe: /`cobs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobs/meta.yaml>`_

   


.. conda:package:: cobs

   |downloads_cobs| |docker_cobs|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cobs

   and update with::

      conda update cobs

   or use the docker container::

      docker pull quay.io/biocontainers/cobs:<tag>

   (see `cobs/tags`_ for valid values for ``<tag>``)


.. |downloads_cobs| image:: https://img.shields.io/conda/dn/bioconda/cobs.svg?style=flat
   :target: https://anaconda.org/bioconda/cobs
   :alt:   (downloads)
.. |docker_cobs| image:: https://quay.io/repository/biocontainers/cobs/status
   :target: https://quay.io/repository/biocontainers/cobs
.. _`cobs/tags`: https://quay.io/repository/biocontainers/cobs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobs/README.html