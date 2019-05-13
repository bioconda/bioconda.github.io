:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-visitor'
.. highlight: bash

perl-data-visitor
=================

.. conda:recipe:: perl-data-visitor/0.30
   :replaces_section_title:

   Visitor style traversal of Perl data structures

   :homepage: http://metacpan.org/release/Data-Visitor
   :license: perl_5
   :recipe: /`perl-data-visitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor>`_/`0.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-visitor/0.30/meta.yaml>`_

   


.. conda:package:: perl-data-visitor

   |downloads_perl-data-visitor| |docker_perl-data-visitor|

   :versions: 0.30-2, 0.30-1, 0.30-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-class-load: >=0.06
   :depends perl-moose: 
   :depends perl-namespace-clean: 
   :depends perl-task-weaken: 
   :depends perl-tie-toobject: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-visitor

   and update with::

      conda update perl-data-visitor

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-visitor:<tag>

   (see `perl-data-visitor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-visitor| image:: https://img.shields.io/conda/dn/bioconda/perl-data-visitor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-visitor
   :alt:   (downloads)
.. |docker_perl-data-visitor| image:: https://quay.io/repository/biocontainers/perl-data-visitor/status
   :target: https://quay.io/repository/biocontainers/perl-data-visitor
.. _`perl-data-visitor/tags`: https://quay.io/repository/biocontainers/perl-data-visitor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-visitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-visitor/README.html