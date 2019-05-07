:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-inter'
.. highlight: bash

perl-test-inter
===============

.. conda:recipe:: perl-test-inter
   :replaces_section_title:

   framework for more readable interactive test scripts

   :homepage: http://metacpan.org/pod/Test::Inter
   :license: perl_5
   :recipe: /`perl-test-inter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter/meta.yaml>`_

   


.. conda:package:: perl-test-inter

   |downloads_perl-test-inter| |docker_perl-test-inter|

   :versions: 1.09-0, 1.07-0, 1.06-1, 1.06-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-inter

   and update with::

      conda update perl-test-inter

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-inter:<tag>

   (see `perl-test-inter/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-inter| image:: https://img.shields.io/conda/dn/bioconda/perl-test-inter.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-inter| image:: https://quay.io/repository/biocontainers/perl-test-inter/status
   :target: https://quay.io/repository/biocontainers/perl-test-inter
.. _`perl-test-inter/tags`: https://quay.io/repository/biocontainers/perl-test-inter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-inter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-inter/README.html