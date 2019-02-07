.. title:: Package Recipe 'perl-env-path'
.. highlight: bash


perl-env-path
=============

.. conda:recipe:: perl-env-path
   :replaces_section_title:

   Advanced operations on path variables

   :homepage: http://metacpan.org/pod/Env::Path
   :license: unknown
   :recipe: /`perl-env-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-env-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-env-path/meta.yaml>`_

   


.. conda:package:: perl-env-path

   |downloads_perl-env-path| |docker_perl-env-path|

   :versions: 0.19

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-env-path|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-env-path

   and update with::

      conda update perl-env-path

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-env-path


.. |required_by_perl-env-path| conda:required_by:: perl-env-path
.. |downloads_perl-env-path| image:: https://img.shields.io/conda/dn/bioconda/perl-env-path.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-env-path| image:: https://quay.io/repository/biocontainers/perl-env-path/status
   :target: https://quay.io/repository/biocontainers/perl-env-path







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-env-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-env-path/README.html

