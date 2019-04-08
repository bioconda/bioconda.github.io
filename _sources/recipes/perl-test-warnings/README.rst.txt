:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-warnings'
.. highlight: bash

perl-test-warnings
==================

.. conda:recipe:: perl-test-warnings
   :replaces_section_title:

   Test for warnings and the lack of them

   :homepage: https://github.com/karenetheridge/Test-Warnings
   :license: perl_5
   :recipe: /`perl-test-warnings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-warnings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-warnings/meta.yaml>`_

   


.. conda:package:: perl-test-warnings

   |downloads_perl-test-warnings| |docker_perl-test-warnings|

   :versions: 0.026-1, 0.026-0, 0.021-3, 0.021-2, 0.021-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-warnings

   and update with::

      conda update perl-test-warnings

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-warnings:<tag>

   (see `perl-test-warnings/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-warnings| image:: https://img.shields.io/conda/dn/bioconda/perl-test-warnings.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-warnings| image:: https://quay.io/repository/biocontainers/perl-test-warnings/status
   :target: https://quay.io/repository/biocontainers/perl-test-warnings
.. _`perl-test-warnings/tags`: https://quay.io/repository/biocontainers/perl-test-warnings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-warnings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-warnings/README.html