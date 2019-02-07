.. title:: Package Recipe 'perl-proc-fork'
.. highlight: bash


perl-proc-fork
==============

.. conda:recipe:: perl-proc-fork
   :replaces_section_title:

   simple\, intuitive interface to the fork\(\) system call

   :homepage: http://github.com/ap/Proc-Fork
   :license: perl_5
   :recipe: /`perl-proc-fork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-proc-fork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-proc-fork/meta.yaml>`_

   


.. conda:package:: perl-proc-fork

   |downloads_perl-proc-fork| |docker_perl-proc-fork|

   :versions: 0.806, 0.804

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-exporter-tidy`  

   :required~by: |required_by_perl-proc-fork|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-proc-fork

   and update with::

      conda update perl-proc-fork

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-proc-fork


.. |required_by_perl-proc-fork| conda:required_by:: perl-proc-fork
.. |downloads_perl-proc-fork| image:: https://img.shields.io/conda/dn/bioconda/perl-proc-fork.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-proc-fork| image:: https://quay.io/repository/biocontainers/perl-proc-fork/status
   :target: https://quay.io/repository/biocontainers/perl-proc-fork







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-proc-fork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-proc-fork/README.html

