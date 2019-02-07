.. title:: Package Recipe 'perl-class-load'
.. highlight: bash


perl-class-load
===============

.. conda:recipe:: perl-class-load
   :replaces_section_title:

   A working \(require \"Class\:\:Name\"\) and more

   :homepage: https://github.com/moose/Class-Load
   :license: perl_5
   :recipe: /`perl-class-load <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load/meta.yaml>`_

   


.. conda:package:: perl-class-load

   |downloads_perl-class-load| |docker_perl-class-load|

   :versions: 0.25, 0.23

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-base`  :conda:package:`perl-carp`  :conda:package:`perl-data-optlist`  :conda:package:`perl-exporter`  :conda:package:`perl-module-implementation`  :conda:package:`perl-module-runtime`  :conda:package:`perl-package-stash`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-class-load|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-load

   and update with::

      conda update perl-class-load

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-class-load


.. |required_by_perl-class-load| conda:required_by:: perl-class-load
.. |downloads_perl-class-load| image:: https://img.shields.io/conda/dn/bioconda/perl-class-load.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-load| image:: https://quay.io/repository/biocontainers/perl-class-load/status
   :target: https://quay.io/repository/biocontainers/perl-class-load







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-load/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-load/README.html

