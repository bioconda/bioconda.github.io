.. title:: Package Recipe 'perl-pod-usage'
.. highlight: bash


perl-pod-usage
==============

.. conda:recipe:: perl-pod-usage
   :replaces_section_title:

   print a usage message from embedded pod documentation 

   :homepage: http://search.cpan.org/~marekr/Pod-Usage-1.69/
   :license: perl_5
   :recipe: /`perl-pod-usage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage/meta.yaml>`_

   


.. conda:package:: perl-pod-usage

   |downloads_perl-pod-usage| |docker_perl-pod-usage|

   :versions: 1.69

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-getopt-long`  :conda:package:`perl-pod-escapes`  :conda:package:`perl-test`  

   :required~by: |required_by_perl-pod-usage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-usage

   and update with::

      conda update perl-pod-usage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-usage


.. |required_by_perl-pod-usage| conda:required_by:: perl-pod-usage
.. |downloads_perl-pod-usage| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-usage.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-usage| image:: https://quay.io/repository/biocontainers/perl-pod-usage/status
   :target: https://quay.io/repository/biocontainers/perl-pod-usage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-usage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-usage/README.html

