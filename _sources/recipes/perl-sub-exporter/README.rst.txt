.. title:: Package Recipe 'perl-sub-exporter'
.. highlight: bash


perl-sub-exporter
=================

.. conda:recipe:: perl-sub-exporter
   :replaces_section_title:

   a sophisticated exporter for custom\-built routines

   :homepage: https://github.com/rjbs/Sub-Exporter
   :license: perl_5
   :recipe: /`perl-sub-exporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter/meta.yaml>`_

   


.. conda:package:: perl-sub-exporter

   |downloads_perl-sub-exporter| |docker_perl-sub-exporter|

   :versions: 0.987

   :depends: :conda:package:`perl-apache-test`  :conda:package:`perl-data-optlist`  :conda:package:`perl-params-util`  :conda:package:`perl-sub-install`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-sub-exporter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-exporter

   and update with::

      conda update perl-sub-exporter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-sub-exporter


.. |required_by_perl-sub-exporter| conda:required_by:: perl-sub-exporter
.. |downloads_perl-sub-exporter| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-exporter.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-exporter| image:: https://quay.io/repository/biocontainers/perl-sub-exporter/status
   :target: https://quay.io/repository/biocontainers/perl-sub-exporter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-exporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-exporter/README.html

