:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-b-hooks-endofscope'
.. highlight: bash

perl-b-hooks-endofscope
=======================

.. conda:recipe:: perl-b-hooks-endofscope/0.21
   :replaces_section_title:

   Execute code after a scope finished compilation

   :homepage: https://github.com/karenetheridge/B-Hooks-EndOfScope
   :license: perl_5
   :recipe: /`perl-b-hooks-endofscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-hooks-endofscope>`_/`0.21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-hooks-endofscope/0.21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-hooks-endofscope/0.21/meta.yaml>`_

   


.. conda:package:: perl-b-hooks-endofscope

   |downloads_perl-b-hooks-endofscope| |docker_perl-b-hooks-endofscope|

   :versions: 0.21-3, 0.21-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-app-cpanminus: 
   :depends perl-module-implementation: 
   :depends perl-sub-exporter-progressive: 
   :depends perl-variable-magic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-b-hooks-endofscope

   and update with::

      conda update perl-b-hooks-endofscope

   or use the docker container::

      docker pull quay.io/biocontainers/perl-b-hooks-endofscope:<tag>

   (see `perl-b-hooks-endofscope/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-b-hooks-endofscope| image:: https://img.shields.io/conda/dn/bioconda/perl-b-hooks-endofscope.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-b-hooks-endofscope| image:: https://quay.io/repository/biocontainers/perl-b-hooks-endofscope/status
   :target: https://quay.io/repository/biocontainers/perl-b-hooks-endofscope
.. _`perl-b-hooks-endofscope/tags`: https://quay.io/repository/biocontainers/perl-b-hooks-endofscope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b-hooks-endofscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b-hooks-endofscope/README.html