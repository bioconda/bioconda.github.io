.. title:: Package Recipe 'perl-xml-semanticdiff'
.. highlight: bash


perl-xml-semanticdiff
=====================

.. conda:recipe:: perl-xml-semanticdiff
   :replaces_section_title:

   Perl extension for comparing XML documents.

   :homepage: http://metacpan.org/pod/XML-SemanticDiff
   :license: perl_5
   :recipe: /`perl-xml-semanticdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-semanticdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-semanticdiff/meta.yaml>`_

   


.. conda:package:: perl-xml-semanticdiff

   |downloads_perl-xml-semanticdiff| |docker_perl-xml-semanticdiff|

   :versions: 1.0007, 1.0004

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-digest-md5`  :conda:package:`perl-encode`  :conda:package:`perl-xml-parser`  

   :required~by: |required_by_perl-xml-semanticdiff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-semanticdiff

   and update with::

      conda update perl-xml-semanticdiff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-semanticdiff


.. |required_by_perl-xml-semanticdiff| conda:required_by:: perl-xml-semanticdiff
.. |downloads_perl-xml-semanticdiff| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-semanticdiff.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-semanticdiff| image:: https://quay.io/repository/biocontainers/perl-xml-semanticdiff/status
   :target: https://quay.io/repository/biocontainers/perl-xml-semanticdiff







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-semanticdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-semanticdiff/README.html

