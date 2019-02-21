:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-differences'
.. highlight: bash

perl-test-differences
=====================

.. conda:recipe:: perl-test-differences
   :replaces_section_title:

   Test strings and data structures and show differences if not ok

   :homepage: http://metacpan.org/pod/Test-Differences
   :license: Perl
   :recipe: /`perl-test-differences <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-differences>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-differences/meta.yaml>`_

   


.. conda:package:: perl-test-differences

   |downloads_perl-test-differences| |docker_perl-test-differences|

   :versions: 0.64-2, 0.64-1, 0.64-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-capture-tiny: 
   
   :depends perl-text-diff: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-differences

   and update with::

      conda update perl-test-differences

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-differences:<tag>

   (see `perl-test-differences/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-differences| image:: https://img.shields.io/conda/dn/bioconda/perl-test-differences.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-differences| image:: https://quay.io/repository/biocontainers/perl-test-differences/status
   :target: https://quay.io/repository/biocontainers/perl-test-differences
.. _`perl-test-differences/tags`: https://quay.io/repository/biocontainers/perl-test-differences?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-differences/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-differences/README.html