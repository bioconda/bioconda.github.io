:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbl2asn'
.. highlight: bash

tbl2asn
=======

.. conda:recipe:: tbl2asn
   :replaces_section_title:
   :noindex:

   tbl2asn is a program that automates the creation of sequence records for submission to GenBank

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/tbl2asn2
   :license: Public Domain
   :recipe: /`tbl2asn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn/meta.yaml>`_

   


.. conda:package:: tbl2asn

   |downloads_tbl2asn| |docker_tbl2asn|

   :versions:
      
      

      ``25.7-1``,  ``25.7-0``,  ``25.6-3``,  ``25.6-2``,  ``25.6-1``,  ``25.6-0``,  ``25.3-0``,  ``25.0-0``

      

   
   :depends libidn11: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tbl2asn

   and update with::

      conda update tbl2asn

   or use the docker container::

      docker pull quay.io/biocontainers/tbl2asn:<tag>

   (see `tbl2asn/tags`_ for valid values for ``<tag>``)


.. |downloads_tbl2asn| image:: https://img.shields.io/conda/dn/bioconda/tbl2asn.svg?style=flat
   :target: https://anaconda.org/bioconda/tbl2asn
   :alt:   (downloads)
.. |docker_tbl2asn| image:: https://quay.io/repository/biocontainers/tbl2asn/status
   :target: https://quay.io/repository/biocontainers/tbl2asn
.. _`tbl2asn/tags`: https://quay.io/repository/biocontainers/tbl2asn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbl2asn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbl2asn/README.html