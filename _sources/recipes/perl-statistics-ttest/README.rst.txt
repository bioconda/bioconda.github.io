.. title:: Package Recipe 'perl-statistics-ttest'
.. highlight: bash


perl-statistics-ttest
=====================

.. conda:recipe:: perl-statistics-ttest
   :replaces_section_title:

   Perl module to perform T\-test on 2 independent samples Statistics\:\:TTest\:\:Sufficient \- Perl module to perfrom T\-Test on 2 indepdent samples using sufficient statistics

   :homepage: http://metacpan.org/pod/Statistics-TTest
   :license: perl_5
   :recipe: /`perl-statistics-ttest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-ttest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-ttest/meta.yaml>`_

   


.. conda:package:: perl-statistics-ttest

   |downloads_perl-statistics-ttest| |docker_perl-statistics-ttest|

   :versions: 1.1

   :depends: :conda:package:`perl-statistics-descriptive`  :conda:package:`perl-statistics-distributions`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-statistics-ttest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-ttest

   and update with::

      conda update perl-statistics-ttest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-statistics-ttest


.. |required_by_perl-statistics-ttest| conda:required_by:: perl-statistics-ttest
.. |downloads_perl-statistics-ttest| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-ttest.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-ttest| image:: https://quay.io/repository/biocontainers/perl-statistics-ttest/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-ttest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-ttest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-ttest/README.html

