:orphan:  .. only available via index, not via toctree

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

   :versions: 1.1-1, 1.1-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends perl-statistics-descriptive: 
   
   :depends perl-statistics-distributions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-ttest

   and update with::

      conda update perl-statistics-ttest

   or use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-ttest:<tag>

   (see `perl-statistics-ttest/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-ttest| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-ttest.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-ttest| image:: https://quay.io/repository/biocontainers/perl-statistics-ttest/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-ttest
.. _`perl-statistics-ttest/tags`: https://quay.io/repository/biocontainers/perl-statistics-ttest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-ttest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-ttest/README.html