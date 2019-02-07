.. title:: Package Recipe 'perl-try-tiny'
.. highlight: bash


perl-try-tiny
=============

.. conda:recipe:: perl-try-tiny
   :replaces_section_title:

   minimal try\/catch with proper preservation of \$\@

   :homepage: https://github.com/karenetheridge/Try-Tiny
   :license: mit
   :recipe: /`perl-try-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny/meta.yaml>`_

   


.. conda:package:: perl-try-tiny

   |downloads_perl-try-tiny| |docker_perl-try-tiny|

   :versions: 0.30, 0.24

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-try-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-try-tiny

   and update with::

      conda update perl-try-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-try-tiny


.. |required_by_perl-try-tiny| conda:required_by:: perl-try-tiny
.. |downloads_perl-try-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-try-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-try-tiny| image:: https://quay.io/repository/biocontainers/perl-try-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-try-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-try-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-try-tiny/README.html

