.. title:: Package Recipe 'perl-experimental'
.. highlight: bash


perl-experimental
=================

.. conda:recipe:: perl-experimental
   :replaces_section_title:

   Experimental features made easy

   :homepage: http://metacpan.org/pod/experimental
   :license: perl_5
   :recipe: /`perl-experimental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental/meta.yaml>`_

   


.. conda:package:: perl-experimental

   |downloads_perl-experimental| |docker_perl-experimental|

   :versions: 0.020

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-version`  

   :required~by: |required_by_perl-experimental|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-experimental

   and update with::

      conda update perl-experimental

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-experimental


.. |required_by_perl-experimental| conda:required_by:: perl-experimental
.. |downloads_perl-experimental| image:: https://img.shields.io/conda/dn/bioconda/perl-experimental.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-experimental| image:: https://quay.io/repository/biocontainers/perl-experimental/status
   :target: https://quay.io/repository/biocontainers/perl-experimental







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-experimental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-experimental/README.html

