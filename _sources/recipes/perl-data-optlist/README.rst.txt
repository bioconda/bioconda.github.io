:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-optlist'
.. highlight: bash

perl-data-optlist
=================

.. conda:recipe:: perl-data-optlist
   :replaces_section_title:

   parse and validate simple name\/value option pairs

   :homepage: https://github.com/rjbs/Data-OptList
   :license: perl_5
   :recipe: /`perl-data-optlist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-optlist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-optlist/meta.yaml>`_

   


.. conda:package:: perl-data-optlist

   |downloads_perl-data-optlist| |docker_perl-data-optlist|

   :versions: 0.110-2, 0.110-1, 0.110-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-params-util: 
   
   :depends perl-sub-install: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-optlist

   and update with::

      conda update perl-data-optlist

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-optlist:<tag>

   (see `perl-data-optlist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-optlist| image:: https://img.shields.io/conda/dn/bioconda/perl-data-optlist.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-data-optlist| image:: https://quay.io/repository/biocontainers/perl-data-optlist/status
   :target: https://quay.io/repository/biocontainers/perl-data-optlist
.. _`perl-data-optlist/tags`: https://quay.io/repository/biocontainers/perl-data-optlist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-optlist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-optlist/README.html