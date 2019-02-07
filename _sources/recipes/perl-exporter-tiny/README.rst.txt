.. title:: Package Recipe 'perl-exporter-tiny'
.. highlight: bash


perl-exporter-tiny
==================

.. conda:recipe:: perl-exporter-tiny
   :replaces_section_title:

   Exporter with the features of Sub\:\:Exporter but only core dependencies

   :homepage: https://metacpan.org/release/Exporter-Tiny
   :license: perl_5
   :recipe: /`perl-exporter-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tiny/meta.yaml>`_

   


.. conda:package:: perl-exporter-tiny

   |downloads_perl-exporter-tiny| |docker_perl-exporter-tiny|

   :versions: 1.002001, 1.000000, 0.042

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-exporter-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exporter-tiny

   and update with::

      conda update perl-exporter-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-exporter-tiny


.. |required_by_perl-exporter-tiny| conda:required_by:: perl-exporter-tiny
.. |downloads_perl-exporter-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-exporter-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-exporter-tiny| image:: https://quay.io/repository/biocontainers/perl-exporter-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-exporter-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exporter-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exporter-tiny/README.html

