.. title:: Package Recipe 'perl-go-perl'
.. highlight: bash


perl-go-perl
============

.. conda:recipe:: perl-go-perl
   :replaces_section_title:

   perl modules for GO and other OBO ontologies

   :homepage: http://metacpan.org/pod/go-perl
   :license: BSD-3-Clause
   :recipe: /`perl-go-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl/meta.yaml>`_

   


.. conda:package:: perl-go-perl

   |downloads_perl-go-perl| |docker_perl-go-perl|

   :versions: 0.15

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-data-dumper`  :conda:package:`perl-data-stag`  

   :required~by: |required_by_perl-go-perl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-go-perl

   and update with::

      conda update perl-go-perl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-go-perl


.. |required_by_perl-go-perl| conda:required_by:: perl-go-perl
.. |downloads_perl-go-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-go-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-go-perl| image:: https://quay.io/repository/biocontainers/perl-go-perl/status
   :target: https://quay.io/repository/biocontainers/perl-go-perl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-go-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-go-perl/README.html

