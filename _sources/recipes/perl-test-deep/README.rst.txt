:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-deep'
.. highlight: bash

perl-test-deep
==============

.. conda:recipe:: perl-test-deep
   :replaces_section_title:

   Extremely flexible deep comparison

   :homepage: http://github.com/rjbs/Test-Deep/
   :license: perl_5
   :recipe: /`perl-test-deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-deep/meta.yaml>`_

   


.. conda:package:: perl-test-deep

   |downloads_perl-test-deep| |docker_perl-test-deep|

   :versions: 1.128-1, 1.128-0, 1.120-3, 1.120-2, 1.120-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-deep

   and update with::

      conda update perl-test-deep

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-deep:<tag>

   (see `perl-test-deep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-deep| image:: https://img.shields.io/conda/dn/bioconda/perl-test-deep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-deep| image:: https://quay.io/repository/biocontainers/perl-test-deep/status
   :target: https://quay.io/repository/biocontainers/perl-test-deep
.. _`perl-test-deep/tags`: https://quay.io/repository/biocontainers/perl-test-deep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-deep/README.html