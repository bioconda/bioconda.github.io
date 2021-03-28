:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htstream'
.. highlight: bash

htstream
========

.. conda:recipe:: htstream
   :replaces_section_title:
   :noindex:

   HTStream is a quality control and processing pipeline for High Throughput Sequencing data.
   The difference between HTStream and other tools is that HTStream uses a tab delimited fastq format that allows for streaming from application to application.
   This streaming creates some awesome efficiencies when processing HTS data and makes it fully interoperable with other standard Linux tools. 

   :homepage: https://s4hts.github.io/HTStream/
   :license: Apache / Apache 2.0
   :recipe: /`htstream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htstream/meta.yaml>`_

   


.. conda:package:: htstream

   |downloads_htstream| |docker_htstream|

   :versions:
      
      

      ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htstream

   and update with::

      conda update htstream

   or use the docker container::

      docker pull quay.io/biocontainers/htstream:<tag>

   (see `htstream/tags`_ for valid values for ``<tag>``)


.. |downloads_htstream| image:: https://img.shields.io/conda/dn/bioconda/htstream.svg?style=flat
   :target: https://anaconda.org/bioconda/htstream
   :alt:   (downloads)
.. |docker_htstream| image:: https://quay.io/repository/biocontainers/htstream/status
   :target: https://quay.io/repository/biocontainers/htstream
.. _`htstream/tags`: https://quay.io/repository/biocontainers/htstream?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htstream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htstream/README.html