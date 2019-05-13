:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cg-pipeline'
.. highlight: bash

perl-cg-pipeline
================

.. conda:recipe:: perl-cg-pipeline
   :replaces_section_title:

   Perl libraries required for CG\-Pipeline.

   :homepage: https://github.com/lskatz/CG-Pipeline
   :license: GPL / GNU GPL
   :recipe: /`perl-cg-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cg-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cg-pipeline/meta.yaml>`_

   


.. conda:package:: perl-cg-pipeline

   |downloads_perl-cg-pipeline| |docker_perl-cg-pipeline|

   :versions: 0.5-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-dbi: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-spec: 
   :depends perl-file-temp: 
   :depends perl-list-util: 
   :depends perl-storable: 
   :depends perl-xml-dom: 
   :depends perl-xml-dom-xpath: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cg-pipeline

   and update with::

      conda update perl-cg-pipeline

   or use the docker container::

      docker pull quay.io/biocontainers/perl-cg-pipeline:<tag>

   (see `perl-cg-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cg-pipeline| image:: https://img.shields.io/conda/dn/bioconda/perl-cg-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cg-pipeline
   :alt:   (downloads)
.. |docker_perl-cg-pipeline| image:: https://quay.io/repository/biocontainers/perl-cg-pipeline/status
   :target: https://quay.io/repository/biocontainers/perl-cg-pipeline
.. _`perl-cg-pipeline/tags`: https://quay.io/repository/biocontainers/perl-cg-pipeline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cg-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cg-pipeline/README.html