:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-harness'
.. highlight: bash

perl-test-harness
=================

.. conda:recipe:: perl-test-harness
   :replaces_section_title:

   contributing to TAP\:\:Harness

   :homepage: http://testanything.org/
   :license: perl_5
   :recipe: /`perl-test-harness <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-harness>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-harness/meta.yaml>`_

   


.. conda:package:: perl-test-harness

   |downloads_perl-test-harness| |docker_perl-test-harness|

   :versions: 3.42-0, 3.36-1, 3.36-0, 3.30-3, 3.30-2, 3.30-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-harness

   and update with::

      conda update perl-test-harness

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-harness:<tag>

   (see `perl-test-harness/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-harness| image:: https://img.shields.io/conda/dn/bioconda/perl-test-harness.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-harness
   :alt:   (downloads)
.. |docker_perl-test-harness| image:: https://quay.io/repository/biocontainers/perl-test-harness/status
   :target: https://quay.io/repository/biocontainers/perl-test-harness
.. _`perl-test-harness/tags`: https://quay.io/repository/biocontainers/perl-test-harness?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-harness/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-harness/README.html