.. title:: Package Recipe 'perl-xml-sax-writer'
.. highlight: bash


perl-xml-sax-writer
===================

.. conda:recipe:: perl-xml-sax-writer
   :replaces_section_title:

   SAX2 XML Writer

   :homepage: https://github.com/perigrin/xml-sax-writer
   :license: perl_5
   :recipe: /`perl-xml-sax-writer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer/meta.yaml>`_

   


.. conda:package:: perl-xml-sax-writer

   |downloads_perl-xml-sax-writer| |docker_perl-xml-sax-writer|

   :versions: 0.57, 0.56

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-xml-filter-buffertext`  :conda:package:`perl-xml-namespacesupport`  :conda:package:`perl-xml-sax-base`  

   :required~by: |required_by_perl-xml-sax-writer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-sax-writer

   and update with::

      conda update perl-xml-sax-writer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-sax-writer


.. |required_by_perl-xml-sax-writer| conda:required_by:: perl-xml-sax-writer
.. |downloads_perl-xml-sax-writer| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax-writer.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-sax-writer| image:: https://quay.io/repository/biocontainers/perl-xml-sax-writer/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax-writer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html

