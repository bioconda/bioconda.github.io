.. title:: Package Recipe 'perl-inline'
.. highlight: bash


perl-inline
===========

.. conda:recipe:: perl-inline
   :replaces_section_title:

   Write Perl Subroutines in Other Programming Languages

   :homepage: https://github.com/ingydotnet/inline-pm
   :license: perl_5
   :recipe: /`perl-inline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline/meta.yaml>`_

   


.. conda:package:: perl-inline

   |downloads_perl-inline| |docker_perl-inline|

   :versions: 0.80

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-inline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-inline

   and update with::

      conda update perl-inline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-inline


.. |required_by_perl-inline| conda:required_by:: perl-inline
.. |downloads_perl-inline| image:: https://img.shields.io/conda/dn/bioconda/perl-inline.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-inline| image:: https://quay.io/repository/biocontainers/perl-inline/status
   :target: https://quay.io/repository/biocontainers/perl-inline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline/README.html

