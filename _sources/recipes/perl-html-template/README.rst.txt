.. title:: Package Recipe 'perl-html-template'
.. highlight: bash


perl-html-template
==================

.. conda:recipe:: perl-html-template
   :replaces_section_title:

   Perl module to use HTML\-like templating language

   :homepage: https://metacpan.org/pod/HTML::Template
   :license: perl_5
   :recipe: /`perl-html-template <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-template>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-template/meta.yaml>`_

   


.. conda:package:: perl-html-template

   |downloads_perl-html-template| |docker_perl-html-template|

   :versions: 2.97, 2.95

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-cgi`  :conda:package:`perl-scalar-list-utils`  

   :required~by: |required_by_perl-html-template|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-template

   and update with::

      conda update perl-html-template

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-html-template


.. |required_by_perl-html-template| conda:required_by:: perl-html-template
.. |downloads_perl-html-template| image:: https://img.shields.io/conda/dn/bioconda/perl-html-template.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-html-template| image:: https://quay.io/repository/biocontainers/perl-html-template/status
   :target: https://quay.io/repository/biocontainers/perl-html-template







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-template/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-template/README.html

