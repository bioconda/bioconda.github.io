.. title:: Package Recipe 'perl-cgi'
.. highlight: bash


perl-cgi
========

.. conda:recipe:: perl-cgi
   :replaces_section_title:

   A generic file fetching mechanism

   :homepage: https://metacpan.org/pod/distribution/CGI/lib/CGI.pod
   :license: GPL
   :recipe: /`perl-cgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi/meta.yaml>`_

   


.. conda:package:: perl-cgi

   |downloads_perl-cgi| |docker_perl-cgi|

   :versions: 4.40, 4.22

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-cgi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cgi

   and update with::

      conda update perl-cgi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cgi


.. |required_by_perl-cgi| conda:required_by:: perl-cgi
.. |downloads_perl-cgi| image:: https://img.shields.io/conda/dn/bioconda/perl-cgi.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cgi| image:: https://quay.io/repository/biocontainers/perl-cgi/status
   :target: https://quay.io/repository/biocontainers/perl-cgi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cgi/README.html

