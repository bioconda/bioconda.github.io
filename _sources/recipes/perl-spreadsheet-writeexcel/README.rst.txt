:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spreadsheet-writeexcel'
.. highlight: bash

perl-spreadsheet-writeexcel
===========================

.. conda:recipe:: perl-spreadsheet-writeexcel
   :replaces_section_title:

   Write to a cross platform Excel binary file

   :homepage: http://metacpan.org/pod/Spreadsheet-WriteExcel
   :license: perl_5
   :recipe: /`perl-spreadsheet-writeexcel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-writeexcel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-writeexcel/meta.yaml>`_

   


.. conda:package:: perl-spreadsheet-writeexcel

   |downloads_perl-spreadsheet-writeexcel| |docker_perl-spreadsheet-writeexcel|

   :versions: 2.40-2, 2.40-1, 2.40-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-ole-storage_lite: 
   :depends perl-parse-recdescent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-spreadsheet-writeexcel

   and update with::

      conda update perl-spreadsheet-writeexcel

   or use the docker container::

      docker pull quay.io/biocontainers/perl-spreadsheet-writeexcel:<tag>

   (see `perl-spreadsheet-writeexcel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-spreadsheet-writeexcel| image:: https://img.shields.io/conda/dn/bioconda/perl-spreadsheet-writeexcel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-spreadsheet-writeexcel
   :alt:   (downloads)
.. |docker_perl-spreadsheet-writeexcel| image:: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel/status
   :target: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel
.. _`perl-spreadsheet-writeexcel/tags`: https://quay.io/repository/biocontainers/perl-spreadsheet-writeexcel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spreadsheet-writeexcel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spreadsheet-writeexcel/README.html