.. title:: Package Recipe 'perl-http-negotiate'
.. highlight: bash


perl-http-negotiate
===================

.. conda:recipe:: perl-http-negotiate
   :replaces_section_title:

   choose a variant to serve

   :homepage: http://metacpan.org/pod/HTTP::Negotiate
   :license: perl_5
   :recipe: /`perl-http-negotiate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-negotiate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-negotiate/meta.yaml>`_

   


.. conda:package:: perl-http-negotiate

   |downloads_perl-http-negotiate| |docker_perl-http-negotiate|

   :versions: 6.01

   :depends: :conda:package:`perl-http-message`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-http-negotiate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-negotiate

   and update with::

      conda update perl-http-negotiate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-http-negotiate


.. |required_by_perl-http-negotiate| conda:required_by:: perl-http-negotiate
.. |downloads_perl-http-negotiate| image:: https://img.shields.io/conda/dn/bioconda/perl-http-negotiate.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-http-negotiate| image:: https://quay.io/repository/biocontainers/perl-http-negotiate/status
   :target: https://quay.io/repository/biocontainers/perl-http-negotiate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-negotiate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-negotiate/README.html

