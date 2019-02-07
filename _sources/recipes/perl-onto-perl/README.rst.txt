.. title:: Package Recipe 'perl-onto-perl'
.. highlight: bash


perl-onto-perl
==============

.. conda:recipe:: perl-onto-perl
   :replaces_section_title:

   PERL modules for manipulating OBO\-formatted ontologies\, such as the Gene Ontology \(GO\)

   :homepage: http://metacpan.org/pod/ONTO-PERL
   :license: perl_5
   :recipe: /`perl-onto-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl/meta.yaml>`_

   


.. conda:package:: perl-onto-perl

   |downloads_perl-onto-perl| |docker_perl-onto-perl|

   :versions: 1.45

   :depends: :conda:package:`perl-date-manip`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-onto-perl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-onto-perl

   and update with::

      conda update perl-onto-perl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-onto-perl


.. |required_by_perl-onto-perl| conda:required_by:: perl-onto-perl
.. |downloads_perl-onto-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-onto-perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-onto-perl| image:: https://quay.io/repository/biocontainers/perl-onto-perl/status
   :target: https://quay.io/repository/biocontainers/perl-onto-perl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-onto-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-onto-perl/README.html

