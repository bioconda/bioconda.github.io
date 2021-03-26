:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pblat'
.. highlight: bash

pblat
=====

.. conda:recipe:: pblat
   :replaces_section_title:
   :noindex:

   blat with multi\-threads support

   :homepage: https://icebert.github.io/pblat
   :developer docs: https://github.com/icebert/pblat
   :license: OTHER
   :recipe: /`pblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pblat/meta.yaml>`_
   :links: biotools: :biotools:`pblat`, doi: :doi:`10.1186/s12859-019-2597-8`

   


.. conda:package:: pblat

   |downloads_pblat| |docker_pblat|

   :versions:
      
      

      ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pblat

   and update with::

      conda update pblat

   or use the docker container::

      docker pull quay.io/biocontainers/pblat:<tag>

   (see `pblat/tags`_ for valid values for ``<tag>``)


.. |downloads_pblat| image:: https://img.shields.io/conda/dn/bioconda/pblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pblat
   :alt:   (downloads)
.. |docker_pblat| image:: https://quay.io/repository/biocontainers/pblat/status
   :target: https://quay.io/repository/biocontainers/pblat
.. _`pblat/tags`: https://quay.io/repository/biocontainers/pblat?tab=tags






Notes
-----
pblat is modified from blat\, the licence is the same as blat. The source code and executables are freely available for academic\, nonprofit and personal use. Commercial licensing information is available on the Kent Informatics website. To cite\: Wang M \& Kong L. pblat\: a multithread blat algorithm speeding up aligning sequences to genomes. BMC Bioinformatics 2019\, 20\(1\).


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pblat/README.html