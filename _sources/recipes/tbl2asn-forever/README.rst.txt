:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbl2asn-forever'
.. highlight: bash

tbl2asn-forever
===============

.. conda:recipe:: tbl2asn-forever
   :replaces_section_title:
   :noindex:

   tbl2asn is a program that automates the creation of sequence records for submission to GenBank

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/tbl2asn2
   :license: Public Domain
   :recipe: /`tbl2asn-forever <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever/meta.yaml>`_

   


.. conda:package:: tbl2asn-forever

   |downloads_tbl2asn-forever| |docker_tbl2asn-forever|

   :versions:
      
      

      ``25.7.2f-1``,  ``25.7.2f-0``,  ``25.7.1f-0``,  ``25.7f-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libidn11: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tbl2asn-forever

   and update with::

      conda update tbl2asn-forever

   or use the docker container::

      docker pull quay.io/biocontainers/tbl2asn-forever:<tag>

   (see `tbl2asn-forever/tags`_ for valid values for ``<tag>``)


.. |downloads_tbl2asn-forever| image:: https://img.shields.io/conda/dn/bioconda/tbl2asn-forever.svg?style=flat
   :target: https://anaconda.org/bioconda/tbl2asn-forever
   :alt:   (downloads)
.. |docker_tbl2asn-forever| image:: https://quay.io/repository/biocontainers/tbl2asn-forever/status
   :target: https://quay.io/repository/biocontainers/tbl2asn-forever
.. _`tbl2asn-forever/tags`: https://quay.io/repository/biocontainers/tbl2asn-forever?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbl2asn-forever/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbl2asn-forever/README.html