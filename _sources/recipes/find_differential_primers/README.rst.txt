:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'find_differential_primers'
.. highlight: bash

find_differential_primers
=========================

.. conda:recipe:: find_differential_primers
   :replaces_section_title:
   :noindex:

   Scripts to aid the design of differential primers for diagnostic PCR.

   :homepage: https://github.com/widdowquinn/find_differential_primers
   :license: MIT / MIT
   :recipe: /`find_differential_primers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_differential_primers/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.9861`

   


.. conda:package:: find_differential_primers

   |downloads_find_differential_primers| |docker_find_differential_primers|

   :versions:
      
      

      ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.3.p1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bx-python: 
   :depends emboss: 
   :depends primer3: ``<=1.1.4``
   :depends prodigal: 
   :depends python: ``>2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install find_differential_primers

   and update with::

      conda update find_differential_primers

   or use the docker container::

      docker pull quay.io/biocontainers/find_differential_primers:<tag>

   (see `find_differential_primers/tags`_ for valid values for ``<tag>``)


.. |downloads_find_differential_primers| image:: https://img.shields.io/conda/dn/bioconda/find_differential_primers.svg?style=flat
   :target: https://anaconda.org/bioconda/find_differential_primers
   :alt:   (downloads)
.. |docker_find_differential_primers| image:: https://quay.io/repository/biocontainers/find_differential_primers/status
   :target: https://quay.io/repository/biocontainers/find_differential_primers
.. _`find_differential_primers/tags`: https://quay.io/repository/biocontainers/find_differential_primers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_differential_primers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_differential_primers/README.html