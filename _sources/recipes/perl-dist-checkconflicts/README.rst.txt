.. title:: Package Recipe 'perl-dist-checkconflicts'
.. highlight: bash


perl-dist-checkconflicts
========================

.. conda:recipe:: perl-dist-checkconflicts
   :replaces_section_title:

   declare version conflicts for your dist

   :homepage: http://metacpan.org/release/Dist-CheckConflicts
   :license: perl_5
   :recipe: /`perl-dist-checkconflicts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dist-checkconflicts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dist-checkconflicts/meta.yaml>`_

   


.. conda:package:: perl-dist-checkconflicts

   |downloads_perl-dist-checkconflicts| |docker_perl-dist-checkconflicts|

   :versions: 0.11

   :depends: :conda:package:`perl-module-runtime`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-dist-checkconflicts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dist-checkconflicts

   and update with::

      conda update perl-dist-checkconflicts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-dist-checkconflicts


.. |required_by_perl-dist-checkconflicts| conda:required_by:: perl-dist-checkconflicts
.. |downloads_perl-dist-checkconflicts| image:: https://img.shields.io/conda/dn/bioconda/perl-dist-checkconflicts.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dist-checkconflicts| image:: https://quay.io/repository/biocontainers/perl-dist-checkconflicts/status
   :target: https://quay.io/repository/biocontainers/perl-dist-checkconflicts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dist-checkconflicts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dist-checkconflicts/README.html

