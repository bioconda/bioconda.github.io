:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotradis'
.. highlight: bash

biotradis
=========

.. conda:recipe:: biotradis
   :replaces_section_title:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/sanger-pathogens/Bio-Tradis
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`biotradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis/meta.yaml>`_

   


.. conda:package:: biotradis

   |downloads_biotradis| |docker_biotradis|

   :versions: 1.4.5-1, 1.4.5-0, 1.4.1-0, 1.4.1.dev-4, 1.4.1.dev-3, 1.4.1.dev-2, 1.4.1.dev-1, 1.4.1.dev-0
   
   :depends bioconductor-edger: 
   :depends bwa: 
   :depends perl: 
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: >=1.7.2
   :depends perl-exception-class: 
   :depends perl-local-lib: 
   :depends perl-moose: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pathtools: 
   :depends perl-scalar-util-numeric: 
   :depends perl-text-csv: 
   :depends r-base: 
   :depends r-getopt: 
   :depends r-mass: 
   :depends samtools: 
   :depends smalt: 
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biotradis

   and update with::

      conda update biotradis

   or use the docker container::

      docker pull quay.io/biocontainers/biotradis:<tag>

   (see `biotradis/tags`_ for valid values for ``<tag>``)


.. |downloads_biotradis| image:: https://img.shields.io/conda/dn/bioconda/biotradis.svg?style=flat
   :target: https://anaconda.org/bioconda/biotradis
   :alt:   (downloads)
.. |docker_biotradis| image:: https://quay.io/repository/biocontainers/biotradis/status
   :target: https://quay.io/repository/biocontainers/biotradis
.. _`biotradis/tags`: https://quay.io/repository/biocontainers/biotradis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotradis/README.html