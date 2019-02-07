.. title:: Package Recipe 'perl-parallel-loops'
.. highlight: bash


perl-parallel-loops
===================

.. conda:recipe:: perl-parallel-loops
   :replaces_section_title:

   Execute loops using parallel forked subprocesses

   :homepage: http://metacpan.org/pod/Parallel::Loops
   :license: perl_5
   :recipe: /`perl-parallel-loops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-loops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-loops/meta.yaml>`_

   


.. conda:package:: perl-parallel-loops

   |downloads_perl-parallel-loops| |docker_perl-parallel-loops|

   :versions: 0.10, 0.08

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-parallel-forkmanager`  

   :required~by: |required_by_perl-parallel-loops|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parallel-loops

   and update with::

      conda update perl-parallel-loops

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-parallel-loops


.. |required_by_perl-parallel-loops| conda:required_by:: perl-parallel-loops
.. |downloads_perl-parallel-loops| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-loops.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-parallel-loops| image:: https://quay.io/repository/biocontainers/perl-parallel-loops/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-loops







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-loops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-loops/README.html

