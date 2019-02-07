.. title:: Package Recipe 'perl-file-touch'
.. highlight: bash


perl-file-touch
===============

.. conda:recipe:: perl-file-touch
   :replaces_section_title:

   update file access and modification times\, optionally creating files if needed

   :homepage: https://github.com/neilb/File-Touch
   :license: perl_5
   :recipe: /`perl-file-touch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch/meta.yaml>`_

   


.. conda:package:: perl-file-touch

   |downloads_perl-file-touch| |docker_perl-file-touch|

   :versions: 0.11

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-file-touch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-touch

   and update with::

      conda update perl-file-touch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-file-touch


.. |required_by_perl-file-touch| conda:required_by:: perl-file-touch
.. |downloads_perl-file-touch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-touch.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-file-touch| image:: https://quay.io/repository/biocontainers/perl-file-touch/status
   :target: https://quay.io/repository/biocontainers/perl-file-touch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-touch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-touch/README.html

