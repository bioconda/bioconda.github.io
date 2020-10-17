:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-mem2'
.. highlight: bash

bwa-mem2
========

.. conda:recipe:: bwa-mem2
   :replaces_section_title:
   :noindex:

   The next version of bwa\-mem

   :homepage: https://github.com/bwa-mem2/bwa-mem2
   :license: MIT
   :recipe: /`bwa-mem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-mem2/meta.yaml>`_
   :links: doi: :doi:`10.1109/IPDPS.2019.00041`

   


.. conda:package:: bwa-mem2

   |downloads_bwa-mem2| |docker_bwa-mem2|

   :versions:
      
      

      ``2.1-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwa-mem2

   and update with::

      conda update bwa-mem2

   or use the docker container::

      docker pull quay.io/biocontainers/bwa-mem2:<tag>

   (see `bwa-mem2/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-mem2| image:: https://img.shields.io/conda/dn/bioconda/bwa-mem2.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-mem2
   :alt:   (downloads)
.. |docker_bwa-mem2| image:: https://quay.io/repository/biocontainers/bwa-mem2/status
   :target: https://quay.io/repository/biocontainers/bwa-mem2
.. _`bwa-mem2/tags`: https://quay.io/repository/biocontainers/bwa-mem2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-mem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-mem2/README.html