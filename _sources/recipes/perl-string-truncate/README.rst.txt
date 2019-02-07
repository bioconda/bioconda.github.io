.. title:: Package Recipe 'perl-string-truncate'
.. highlight: bash


perl-string-truncate
====================

.. conda:recipe:: perl-string-truncate
   :replaces_section_title:

   a module for when strings are too long to be displayed in...

   :homepage: https://github.com/rjbs/String-Truncate
   :license: perl_5
   :recipe: /`perl-string-truncate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-truncate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-truncate/meta.yaml>`_

   


.. conda:package:: perl-string-truncate

   |downloads_perl-string-truncate| |docker_perl-string-truncate|

   :versions: 1.100602

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-sub-exporter`  :conda:package:`perl-sub-install`  

   :required~by: |required_by_perl-string-truncate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-string-truncate

   and update with::

      conda update perl-string-truncate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-string-truncate


.. |required_by_perl-string-truncate| conda:required_by:: perl-string-truncate
.. |downloads_perl-string-truncate| image:: https://img.shields.io/conda/dn/bioconda/perl-string-truncate.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-string-truncate| image:: https://quay.io/repository/biocontainers/perl-string-truncate/status
   :target: https://quay.io/repository/biocontainers/perl-string-truncate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-truncate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-truncate/README.html

