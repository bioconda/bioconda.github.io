:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bfc'
.. highlight: bash

bfc
===

.. conda:recipe:: bfc
   :replaces_section_title:
   :noindex:

   BFC is a standalone high\-performance tool for correcting sequencing errors from Illumina sequencing data.

   :homepage: https://github.com/lh3/bfc
   :license: MIT
   :recipe: /`bfc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc/meta.yaml>`_

   


.. conda:package:: bfc

   |downloads_bfc| |docker_bfc|

   :versions:
      
      

      ``r181-5``,  ``r181-4``,  ``r181-3``,  ``r181-2``,  ``r181-1``,  ``r181-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bfc

   and update with::

      conda update bfc

   or use the docker container::

      docker pull quay.io/biocontainers/bfc:<tag>

   (see `bfc/tags`_ for valid values for ``<tag>``)


.. |downloads_bfc| image:: https://img.shields.io/conda/dn/bioconda/bfc.svg?style=flat
   :target: https://anaconda.org/bioconda/bfc
   :alt:   (downloads)
.. |docker_bfc| image:: https://quay.io/repository/biocontainers/bfc/status
   :target: https://quay.io/repository/biocontainers/bfc
.. _`bfc/tags`: https://quay.io/repository/biocontainers/bfc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bfc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bfc/README.html