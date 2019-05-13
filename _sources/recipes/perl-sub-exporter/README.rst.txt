:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-exporter'
.. highlight: bash

perl-sub-exporter
=================

.. conda:recipe:: perl-sub-exporter
   :replaces_section_title:

   a sophisticated exporter for custom\-built routines

   :homepage: https://github.com/rjbs/Sub-Exporter
   :license: perl_5
   :recipe: /`perl-sub-exporter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter/meta.yaml>`_

   


.. conda:package:: perl-sub-exporter

   |downloads_perl-sub-exporter| |docker_perl-sub-exporter|

   :versions: 0.987-2, 0.987-1, 0.987-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-data-optlist: 
   :depends perl-params-util: 
   :depends perl-sub-install: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-exporter

   and update with::

      conda update perl-sub-exporter

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-exporter:<tag>

   (see `perl-sub-exporter/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-exporter| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-exporter.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-exporter
   :alt:   (downloads)
.. |docker_perl-sub-exporter| image:: https://quay.io/repository/biocontainers/perl-sub-exporter/status
   :target: https://quay.io/repository/biocontainers/perl-sub-exporter
.. _`perl-sub-exporter/tags`: https://quay.io/repository/biocontainers/perl-sub-exporter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-exporter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-exporter/README.html