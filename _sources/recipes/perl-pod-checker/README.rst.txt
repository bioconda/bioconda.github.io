.. title:: Package Recipe 'perl-pod-checker'
.. highlight: bash


perl-pod-checker
================

.. conda:recipe:: perl-pod-checker/1.60
   :replaces_section_title:

   Pod\:\:Checker verifies POD documentation contents for compliance with the POD format specifications

   :homepage: http://metacpan.org/pod/Pod::Checker
   :license: perl_5
   :recipe: /`perl-pod-checker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker>`_/`1.60 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker/1.60>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-checker/1.60/meta.yaml>`_

   


.. conda:package:: perl-pod-checker

   |downloads_perl-pod-checker| |docker_perl-pod-checker|

   :versions: 1.60

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-pod-checker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-checker

   and update with::

      conda update perl-pod-checker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-checker


.. |required_by_perl-pod-checker| conda:required_by:: perl-pod-checker
.. |downloads_perl-pod-checker| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-checker.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-checker| image:: https://quay.io/repository/biocontainers/perl-pod-checker/status
   :target: https://quay.io/repository/biocontainers/perl-pod-checker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-checker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-checker/README.html

