.. title:: Package Recipe 'perl-math-bigint'
.. highlight: bash


perl-math-bigint
================

.. conda:recipe:: perl-math-bigint
   :replaces_section_title:

   Arbitrary size floating point math package

   :homepage: http://metacpan.org/pod/Math::BigInt
   :license: perl_5
   :recipe: /`perl-math-bigint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint/meta.yaml>`_

   


.. conda:package:: perl-math-bigint

   |downloads_perl-math-bigint| |docker_perl-math-bigint|

   :versions: 1.999816, 1.999813

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-math-complex`  

   :required~by: |required_by_perl-math-bigint|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-bigint

   and update with::

      conda update perl-math-bigint

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-bigint


.. |required_by_perl-math-bigint| conda:required_by:: perl-math-bigint
.. |downloads_perl-math-bigint| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigint.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-bigint| image:: https://quay.io/repository/biocontainers/perl-math-bigint/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigint







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigint/README.html

