:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-needs'
.. highlight: bash

perl-test-needs
===============

.. conda:recipe:: perl-test-needs
   :replaces_section_title:

   Skip tests when modules not available

   :homepage: http://metacpan.org/pod/Test::Needs
   :license: perl_5
   :recipe: /`perl-test-needs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-needs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-needs/meta.yaml>`_

   


.. conda:package:: perl-test-needs

   |downloads_perl-test-needs| |docker_perl-test-needs|

   :versions: 0.002005-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-needs

   and update with::

      conda update perl-test-needs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-needs:<tag>

   (see `perl-test-needs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-needs| image:: https://img.shields.io/conda/dn/bioconda/perl-test-needs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-needs| image:: https://quay.io/repository/biocontainers/perl-test-needs/status
   :target: https://quay.io/repository/biocontainers/perl-test-needs
.. _`perl-test-needs/tags`: https://quay.io/repository/biocontainers/perl-test-needs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-needs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-needs/README.html