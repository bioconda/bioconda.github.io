:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spreadsheet-parseexcel'
.. highlight: bash

perl-spreadsheet-parseexcel
===========================

.. conda:recipe:: perl-spreadsheet-parseexcel
   :replaces_section_title:

   Read information from an Excel file.

   :homepage: http://github.com/runrig/spreadsheet-parseexcel/
   :license: perl_5
   :recipe: /`perl-spreadsheet-parseexcel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel/meta.yaml>`_

   


.. conda:package:: perl-spreadsheet-parseexcel

   |downloads_perl-spreadsheet-parseexcel| |docker_perl-spreadsheet-parseexcel|

   :versions: 0.65-2, 0.65-1, 0.65-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-crypt-rc4: 
   :depends perl-digest-perl-md5: 
   :depends perl-io-stringy: 
   :depends perl-jcode: 
   :depends perl-ole-storage_lite: 
   :depends perl-spreadsheet-writeexcel: 
   :depends perl-unicode-map: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-spreadsheet-parseexcel

   and update with::

      conda update perl-spreadsheet-parseexcel

   or use the docker container::

      docker pull quay.io/biocontainers/perl-spreadsheet-parseexcel:<tag>

   (see `perl-spreadsheet-parseexcel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-spreadsheet-parseexcel| image:: https://img.shields.io/conda/dn/bioconda/perl-spreadsheet-parseexcel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-spreadsheet-parseexcel
   :alt:   (downloads)
.. |docker_perl-spreadsheet-parseexcel| image:: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel/status
   :target: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel
.. _`perl-spreadsheet-parseexcel/tags`: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html