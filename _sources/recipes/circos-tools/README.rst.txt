:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos-tools'
.. highlight: bash

circos-tools
============

.. conda:recipe:: circos-tools
   :replaces_section_title:

   circos\-tools provides several utility add\-on scripts\, such as for bundling links

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools/meta.yaml>`_

   


.. conda:package:: circos-tools

   |downloads_circos-tools| |docker_circos-tools|

   :versions: 0.23-0
   
   :depends perl: 
   :depends perl-bioperl: >=1.7
   :depends perl-carp: 
   :depends perl-config-general: 
   :depends perl-data-dumper: 
   :depends perl-file-path: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-graphics-colorobject: 
   :depends perl-list-moreutils: 
   :depends perl-math-random: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-memoize: 
   :depends perl-pod-usage: 
   :depends perl-regexp-common: 
   :depends perl-set-intspan: 
   :depends perl-statistics-descriptive: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circos-tools

   and update with::

      conda update circos-tools

   or use the docker container::

      docker pull quay.io/biocontainers/circos-tools:<tag>

   (see `circos-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_circos-tools| image:: https://img.shields.io/conda/dn/bioconda/circos-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/circos-tools
   :alt:   (downloads)
.. |docker_circos-tools| image:: https://quay.io/repository/biocontainers/circos-tools/status
   :target: https://quay.io/repository/biocontainers/circos-tools
.. _`circos-tools/tags`: https://quay.io/repository/biocontainers/circos-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos-tools/README.html