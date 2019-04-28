:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lyve-set'
.. highlight: bash

perl-lyve-set
=============

.. conda:recipe:: perl-lyve-set
   :replaces_section_title:

   Perl libraries required for Lyve\-SET.

   :homepage: https://github.com/lskatz/lyve-SET
   :license: MIT / MIT
   :recipe: /`perl-lyve-set <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lyve-set>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lyve-set/meta.yaml>`_

   


.. conda:package:: perl-lyve-set

   |downloads_perl-lyve-set| |docker_perl-lyve-set|

   :versions: 2.0.1-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-data-dumper: 
   :depends perl-exporter: 
   :depends perl-number-range: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lyve-set

   and update with::

      conda update perl-lyve-set

   or use the docker container::

      docker pull quay.io/biocontainers/perl-lyve-set:<tag>

   (see `perl-lyve-set/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lyve-set| image:: https://img.shields.io/conda/dn/bioconda/perl-lyve-set.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-lyve-set| image:: https://quay.io/repository/biocontainers/perl-lyve-set/status
   :target: https://quay.io/repository/biocontainers/perl-lyve-set
.. _`perl-lyve-set/tags`: https://quay.io/repository/biocontainers/perl-lyve-set?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lyve-set/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lyve-set/README.html