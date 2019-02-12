:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-scope-guard'
.. highlight: bash

perl-scope-guard
================

.. conda:recipe:: perl-scope-guard
   :replaces_section_title:

   lexically\-scoped resource management

   :homepage: http://metacpan.org/pod/Scope::Guard
   :license: perl_5
   :recipe: /`perl-scope-guard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scope-guard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scope-guard/meta.yaml>`_

   


.. conda:package:: perl-scope-guard

   |downloads_perl-scope-guard| |docker_perl-scope-guard|

   :versions: 0.21-2, 0.21-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-scope-guard

   and update with::

      conda update perl-scope-guard

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-scope-guard:<tag>

   (see `perl-scope-guard/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-scope-guard| image:: https://img.shields.io/conda/dn/bioconda/perl-scope-guard.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-scope-guard| image:: https://quay.io/repository/biocontainers/perl-scope-guard/status
   :target: https://quay.io/repository/biocontainers/perl-scope-guard
.. _`perl-scope-guard/tags`: https://quay.io/repository/biocontainers/perl-scope-guard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-scope-guard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-scope-guard/README.html