:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-xml'
.. highlight: bash

perl-test-xml
=============

.. conda:recipe:: perl-test-xml
   :replaces_section_title:

   Compare XML in perl tests

   :homepage: http://metacpan.org/pod/Test-XML
   :license: perl_5
   :recipe: /`perl-test-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml/meta.yaml>`_

   


.. conda:package:: perl-test-xml

   |downloads_perl-test-xml| |docker_perl-test-xml|

   :versions: 0.08-1, 0.08-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-xml-parser: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-writer: 
   :depends perl-xml-semanticdiff: 
   :depends perl-xml-twig: 
   :depends perl-xml-xpath: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-xml

   and update with::

      conda update perl-test-xml

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-xml:<tag>

   (see `perl-test-xml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-xml| image:: https://img.shields.io/conda/dn/bioconda/perl-test-xml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-xml| image:: https://quay.io/repository/biocontainers/perl-test-xml/status
   :target: https://quay.io/repository/biocontainers/perl-test-xml
.. _`perl-test-xml/tags`: https://quay.io/repository/biocontainers/perl-test-xml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-xml/README.html