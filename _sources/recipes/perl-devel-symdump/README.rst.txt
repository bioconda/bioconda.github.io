.. title:: Package Recipe 'perl-devel-symdump'
.. highlight: bash


perl-devel-symdump
==================

.. conda:recipe:: perl-devel-symdump/2.18
   :replaces_section_title:

   dump symbol names or the symbol table

   :homepage: http://metacpan.org/pod/Devel::Symdump
   :license: perl_5
   :recipe: /`perl-devel-symdump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump>`_/`2.18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump/2.18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump/2.18/meta.yaml>`_

   


.. conda:package:: perl-devel-symdump

   |downloads_perl-devel-symdump| |docker_perl-devel-symdump|

   :versions: 2.18

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-devel-symdump|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-symdump

   and update with::

      conda update perl-devel-symdump

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-devel-symdump


.. |required_by_perl-devel-symdump| conda:required_by:: perl-devel-symdump
.. |downloads_perl-devel-symdump| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-symdump.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-devel-symdump| image:: https://quay.io/repository/biocontainers/perl-devel-symdump/status
   :target: https://quay.io/repository/biocontainers/perl-devel-symdump







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-symdump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-symdump/README.html

