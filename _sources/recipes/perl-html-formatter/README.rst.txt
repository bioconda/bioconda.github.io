:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-formatter'
.. highlight: bash

perl-html-formatter
===================

.. conda:recipe:: perl-html-formatter
   :replaces_section_title:

   Base class for HTML formatters

   :homepage: https://metacpan.org/release/HTML-Formatter
   :license: perl_5
   :recipe: /`perl-html-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-formatter/meta.yaml>`_

   


.. conda:package:: perl-html-formatter

   |downloads_perl-html-formatter| |docker_perl-html-formatter|

   :versions: 2.16-0, 2.14-1, 2.14-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-font-afm: 
   :depends perl-html-tree: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-formatter

   and update with::

      conda update perl-html-formatter

   or use the docker container::

      docker pull quay.io/biocontainers/perl-html-formatter:<tag>

   (see `perl-html-formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-formatter| image:: https://img.shields.io/conda/dn/bioconda/perl-html-formatter.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-html-formatter| image:: https://quay.io/repository/biocontainers/perl-html-formatter/status
   :target: https://quay.io/repository/biocontainers/perl-html-formatter
.. _`perl-html-formatter/tags`: https://quay.io/repository/biocontainers/perl-html-formatter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-formatter/README.html