.. title:: Package Recipe 'perl-array-compare'
.. highlight: bash


perl-array-compare
==================

.. conda:recipe:: perl-array-compare
   :replaces_section_title:

   Perl extension for comparing arrays.

   :homepage: http://metacpan.org/pod/Array::Compare
   :license: perl_5
   :recipe: /`perl-array-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare/meta.yaml>`_

   


.. conda:package:: perl-array-compare

   |downloads_perl-array-compare| |docker_perl-array-compare|

   :versions: 3.0.1, 2.11

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-moo`  :conda:package:`perl-types-standard`  

   :required~by: |required_by_perl-array-compare|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-array-compare

   and update with::

      conda update perl-array-compare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-array-compare


.. |required_by_perl-array-compare| conda:required_by:: perl-array-compare
.. |downloads_perl-array-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-array-compare.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-array-compare| image:: https://quay.io/repository/biocontainers/perl-array-compare/status
   :target: https://quay.io/repository/biocontainers/perl-array-compare







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-compare/README.html

