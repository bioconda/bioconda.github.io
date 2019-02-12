:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mixin-linewise'
.. highlight: bash

perl-mixin-linewise
===================

.. conda:recipe:: perl-mixin-linewise
   :replaces_section_title:

   write your linewise code for handles\; this does the rest

   :homepage: https://github.com/rjbs/Mixin-Linewise
   :license: perl_5
   :recipe: /`perl-mixin-linewise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise/meta.yaml>`_

   


.. conda:package:: perl-mixin-linewise

   |downloads_perl-mixin-linewise| |docker_perl-mixin-linewise|

   :versions: 0.108-1, 0.108-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-extutils-makemaker: 
   
   :depends perl-pathtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mixin-linewise

   and update with::

      conda update perl-mixin-linewise

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-mixin-linewise:<tag>

   (see `perl-mixin-linewise/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mixin-linewise| image:: https://img.shields.io/conda/dn/bioconda/perl-mixin-linewise.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mixin-linewise| image:: https://quay.io/repository/biocontainers/perl-mixin-linewise/status
   :target: https://quay.io/repository/biocontainers/perl-mixin-linewise
.. _`perl-mixin-linewise/tags`: https://quay.io/repository/biocontainers/perl-mixin-linewise?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mixin-linewise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mixin-linewise/README.html