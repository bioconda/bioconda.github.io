.. title:: Package Recipe 'perl-term-detect-software'
.. highlight: bash


perl-term-detect-software
=========================

.. conda:recipe:: perl-term-detect-software
   :replaces_section_title:

   Detect terminal \(emulator\) software and its capabilities

   :homepage: https://metacpan.org/release/Term-Detect-Software
   :license: perl_5
   :recipe: /`perl-term-detect-software <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-detect-software/meta.yaml>`_

   


.. conda:package:: perl-term-detect-software

   |downloads_perl-term-detect-software| |docker_perl-term-detect-software|

   :versions: 0.21

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-file-which`  

   :required~by: |required_by_perl-term-detect-software|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-term-detect-software

   and update with::

      conda update perl-term-detect-software

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-term-detect-software


.. |required_by_perl-term-detect-software| conda:required_by:: perl-term-detect-software
.. |downloads_perl-term-detect-software| image:: https://img.shields.io/conda/dn/bioconda/perl-term-detect-software.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-term-detect-software| image:: https://quay.io/repository/biocontainers/perl-term-detect-software/status
   :target: https://quay.io/repository/biocontainers/perl-term-detect-software







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-detect-software/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-detect-software/README.html

