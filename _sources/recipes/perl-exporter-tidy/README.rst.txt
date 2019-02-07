.. title:: Package Recipe 'perl-exporter-tidy'
.. highlight: bash


perl-exporter-tidy
==================

.. conda:recipe:: perl-exporter-tidy
   :replaces_section_title:

   Another way of exporting symbols

   :homepage: http://metacpan.org/pod/Exporter-Tidy
   :license: unknown
   :recipe: /`perl-exporter-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tidy/meta.yaml>`_

   


.. conda:package:: perl-exporter-tidy

   |downloads_perl-exporter-tidy| |docker_perl-exporter-tidy|

   :versions: 0.08

   :depends: :conda:package:`perl-threaded` >=5.22.0 

   :required~by: |required_by_perl-exporter-tidy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exporter-tidy

   and update with::

      conda update perl-exporter-tidy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-exporter-tidy


.. |required_by_perl-exporter-tidy| conda:required_by:: perl-exporter-tidy
.. |downloads_perl-exporter-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-exporter-tidy.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-exporter-tidy| image:: https://quay.io/repository/biocontainers/perl-exporter-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-exporter-tidy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exporter-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exporter-tidy/README.html

