.. title:: Package Recipe 'perl-xml-sax'
.. highlight: bash


perl-xml-sax
============

.. conda:recipe:: perl-xml-sax
   :replaces_section_title:

   Simple API for XML

   :homepage: http://metacpan.org/pod/XML::SAX
   :license: unknown
   :recipe: /`perl-xml-sax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax/meta.yaml>`_

   


.. conda:package:: perl-xml-sax

   |downloads_perl-xml-sax| |docker_perl-xml-sax|

   :versions: 1.00, 0.99

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-file-temp`  :conda:package:`perl-xml-namespacesupport`  :conda:package:`perl-xml-sax-base`  

   :required~by: |required_by_perl-xml-sax|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-sax

   and update with::

      conda update perl-xml-sax

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-sax


.. |required_by_perl-xml-sax| conda:required_by:: perl-xml-sax
.. |downloads_perl-xml-sax| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-sax| image:: https://quay.io/repository/biocontainers/perl-xml-sax/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax/README.html

