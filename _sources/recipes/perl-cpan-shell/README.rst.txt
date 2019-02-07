.. title:: Package Recipe 'perl-cpan-shell'
.. highlight: bash


perl-cpan-shell
===============

.. conda:recipe:: perl-cpan-shell/5.5004
   :replaces_section_title:

   

   :homepage: http://metacpan.org/pod/CPAN::Shell
   :license: perl_5
   :recipe: /`perl-cpan-shell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell>`_/`5.5004 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell/5.5004>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell/5.5004/meta.yaml>`_

   


.. conda:package:: perl-cpan-shell

   |downloads_perl-cpan-shell| |docker_perl-cpan-shell|

   :versions: 5.5004

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-cpan-shell|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-shell

   and update with::

      conda update perl-cpan-shell

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cpan-shell


.. |required_by_perl-cpan-shell| conda:required_by:: perl-cpan-shell
.. |downloads_perl-cpan-shell| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-shell.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cpan-shell| image:: https://quay.io/repository/biocontainers/perl-cpan-shell/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-shell







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-shell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-shell/README.html

