:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-tiny'
.. highlight: bash

perl-config-tiny
================

.. conda:recipe:: perl-config-tiny
   :replaces_section_title:

   Read\/Write .ini style files with as little code as possible

   :homepage: http://metacpan.org/pod/Config::Tiny
   :license: perl_5
   :recipe: /`perl-config-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-tiny/meta.yaml>`_

   


.. conda:package:: perl-config-tiny

   |downloads_perl-config-tiny| |docker_perl-config-tiny|

   :versions: 2.24-0, 2.23-1, 2.23-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-pathtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-tiny

   and update with::

      conda update perl-config-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-config-tiny:<tag>

   (see `perl-config-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-config-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-config-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-tiny
   :alt:   (downloads)
.. |docker_perl-config-tiny| image:: https://quay.io/repository/biocontainers/perl-config-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-config-tiny
.. _`perl-config-tiny/tags`: https://quay.io/repository/biocontainers/perl-config-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-tiny/README.html