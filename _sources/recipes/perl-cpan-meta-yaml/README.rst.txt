:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-meta-yaml'
.. highlight: bash

perl-cpan-meta-yaml
===================

.. conda:recipe:: perl-cpan-meta-yaml
   :replaces_section_title:

   Read and write a subset of YAML for CPAN Meta files

   :homepage: https://github.com/Perl-Toolchain-Gang/CPAN-Meta-YAML
   :license: perl_5
   :recipe: /`perl-cpan-meta-yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-yaml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-yaml/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-yaml

   |downloads_perl-cpan-meta-yaml| |docker_perl-cpan-meta-yaml|

   :versions: 0.018-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-carp: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cpan-meta-yaml

   and update with::

      conda update perl-cpan-meta-yaml

   or use the docker container::

      docker pull quay.io/biocontainers/perl-cpan-meta-yaml:<tag>

   (see `perl-cpan-meta-yaml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cpan-meta-yaml| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-yaml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cpan-meta-yaml
   :alt:   (downloads)
.. |docker_perl-cpan-meta-yaml| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-yaml/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-yaml
.. _`perl-cpan-meta-yaml/tags`: https://quay.io/repository/biocontainers/perl-cpan-meta-yaml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-yaml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-yaml/README.html