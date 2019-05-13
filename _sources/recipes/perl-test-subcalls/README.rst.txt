:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-subcalls'
.. highlight: bash

perl-test-subcalls
==================

.. conda:recipe:: perl-test-subcalls/1.10
   :replaces_section_title:

   Track the number of times subs are called

   :homepage: https://github.com/karenetheridge/Test-SubCalls
   :license: perl_5
   :recipe: /`perl-test-subcalls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls>`_/`1.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10/meta.yaml>`_

   


.. conda:package:: perl-test-subcalls

   |downloads_perl-test-subcalls| |docker_perl-test-subcalls|

   :versions: 1.10-2, 1.10-1, 1.10-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :depends perl-hook-lexwrap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-subcalls

   and update with::

      conda update perl-test-subcalls

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-subcalls:<tag>

   (see `perl-test-subcalls/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-subcalls| image:: https://img.shields.io/conda/dn/bioconda/perl-test-subcalls.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-subcalls
   :alt:   (downloads)
.. |docker_perl-test-subcalls| image:: https://quay.io/repository/biocontainers/perl-test-subcalls/status
   :target: https://quay.io/repository/biocontainers/perl-test-subcalls
.. _`perl-test-subcalls/tags`: https://quay.io/repository/biocontainers/perl-test-subcalls?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-subcalls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-subcalls/README.html