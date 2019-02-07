.. title:: Package Recipe 'perl-pod-simple'
.. highlight: bash


perl-pod-simple
===============

.. conda:recipe:: perl-pod-simple/3.35
   :replaces_section_title:

   framework for parsing Pod

   :homepage: http://search.cpan.org/dist/Pod-Simple/
   :license: perl_5
   :recipe: /`perl-pod-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple>`_/`3.35 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple/3.35>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple/3.35/meta.yaml>`_

   


.. conda:package:: perl-pod-simple

   |downloads_perl-pod-simple| |docker_perl-pod-simple|

   :versions: 3.35

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-pod-escapes`  :conda:package:`perl-test`  

   :required~by: |required_by_perl-pod-simple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-simple

   and update with::

      conda update perl-pod-simple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-simple


.. |required_by_perl-pod-simple| conda:required_by:: perl-pod-simple
.. |downloads_perl-pod-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-simple| image:: https://quay.io/repository/biocontainers/perl-pod-simple/status
   :target: https://quay.io/repository/biocontainers/perl-pod-simple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-simple/README.html

