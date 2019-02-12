.. title:: Package Recipe 'perl-text-balanced'
.. highlight: bash


perl-text-balanced
==================

.. conda:recipe:: perl-text-balanced
   :replaces_section_title:

   Extract delimited text sequences from strings

   :homepage: http://metacpan.org/pod/Text::Balanced
   :license: perl_5
   :recipe: /`perl-text-balanced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced/meta.yaml>`_

   


.. conda:package:: perl-text-balanced

   |downloads_perl-text-balanced| |docker_perl-text-balanced|

   :versions: 2.03

   :depends: :conda:package:`gcc`  :conda:package:`libgcc`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-text-balanced|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-balanced

   and update with::

      conda update perl-text-balanced

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-text-balanced


.. |required_by_perl-text-balanced| conda:required_by:: perl-text-balanced
.. |downloads_perl-text-balanced| image:: https://img.shields.io/conda/dn/bioconda/perl-text-balanced.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-balanced| image:: https://quay.io/repository/biocontainers/perl-text-balanced/status
   :target: https://quay.io/repository/biocontainers/perl-text-balanced







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-balanced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-balanced/README.html

