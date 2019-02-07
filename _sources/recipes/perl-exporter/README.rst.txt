.. title:: Package Recipe 'perl-exporter'
.. highlight: bash


perl-exporter
=============

.. conda:recipe:: perl-exporter/5.72
   :replaces_section_title:

   Implements default import method for modules

   :homepage: http://metacpan.org/pod/Exporter
   :license: perl_5
   :recipe: /`perl-exporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter>`_/`5.72 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter/5.72>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter/5.72/meta.yaml>`_

   


.. conda:package:: perl-exporter

   |downloads_perl-exporter| |docker_perl-exporter|

   :versions: 5.72

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-exporter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exporter

   and update with::

      conda update perl-exporter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-exporter


.. |required_by_perl-exporter| conda:required_by:: perl-exporter
.. |downloads_perl-exporter| image:: https://img.shields.io/conda/dn/bioconda/perl-exporter.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-exporter| image:: https://quay.io/repository/biocontainers/perl-exporter/status
   :target: https://quay.io/repository/biocontainers/perl-exporter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exporter/README.html

