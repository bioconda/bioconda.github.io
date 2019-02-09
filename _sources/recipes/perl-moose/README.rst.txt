.. title:: Package Recipe 'perl-moose'
.. highlight: bash


perl-moose
==========

.. conda:recipe:: perl-moose
   :replaces_section_title:

   A postmodern object system for Perl 5

   :homepage: http://moose.perl.org/
   :license: perl_5
   :recipe: /`perl-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moose/meta.yaml>`_

   


.. conda:package:: perl-moose

   |downloads_perl-moose| |docker_perl-moose|

   :versions: 2.2011, 2.2009, 2.1804

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-class-load` >=0.09 :conda:package:`perl-class-load-xs`  :conda:package:`perl-data-optlist`  :conda:package:`perl-devel-globaldestruction`  :conda:package:`perl-devel-overloadinfo`  :conda:package:`perl-devel-stacktrace`  :conda:package:`perl-dist-checkconflicts` >=0.02 :conda:package:`perl-eval-closure` >=0.04 :conda:package:`perl-module-runtime`  :conda:package:`perl-module-runtime-conflicts`  :conda:package:`perl-mro-compat`  :conda:package:`perl-package-deprecationmanager`  :conda:package:`perl-package-stash`  :conda:package:`perl-package-stash-xs`  :conda:package:`perl-params-util`  :conda:package:`perl-parent`  :conda:package:`perl-sub-exporter`  :conda:package:`perl-sub-identify`  :conda:package:`perl-sub-name`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-moose|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moose

   and update with::

      conda update perl-moose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moose


.. |required_by_perl-moose| conda:required_by:: perl-moose
.. |downloads_perl-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-moose.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moose| image:: https://quay.io/repository/biocontainers/perl-moose/status
   :target: https://quay.io/repository/biocontainers/perl-moose







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moose/README.html

