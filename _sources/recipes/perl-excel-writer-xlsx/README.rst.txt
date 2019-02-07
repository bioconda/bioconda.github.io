.. title:: Package Recipe 'perl-excel-writer-xlsx'
.. highlight: bash


perl-excel-writer-xlsx
======================

.. conda:recipe:: perl-excel-writer-xlsx
   :replaces_section_title:

   Create a new file in the Excel 2007\+ XLSX format.

   :homepage: http://jmcnamara.github.com/excel-writer-xlsx/
   :license: perl_5
   :recipe: /`perl-excel-writer-xlsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-excel-writer-xlsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-excel-writer-xlsx/meta.yaml>`_

   


.. conda:package:: perl-excel-writer-xlsx

   |downloads_perl-excel-writer-xlsx| |docker_perl-excel-writer-xlsx|

   :versions: 0.98, 0.95

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-archive-zip`  :conda:package:`perl-file-temp`  

   :required~by: |required_by_perl-excel-writer-xlsx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-excel-writer-xlsx

   and update with::

      conda update perl-excel-writer-xlsx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-excel-writer-xlsx


.. |required_by_perl-excel-writer-xlsx| conda:required_by:: perl-excel-writer-xlsx
.. |downloads_perl-excel-writer-xlsx| image:: https://img.shields.io/conda/dn/bioconda/perl-excel-writer-xlsx.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-excel-writer-xlsx| image:: https://quay.io/repository/biocontainers/perl-excel-writer-xlsx/status
   :target: https://quay.io/repository/biocontainers/perl-excel-writer-xlsx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-excel-writer-xlsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-excel-writer-xlsx/README.html

