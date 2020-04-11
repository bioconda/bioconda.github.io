:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamaps'
.. highlight: bash

metamaps
========

.. conda:recipe:: metamaps
   :replaces_section_title:

   MetaMaps is a tool for long\-read metagenomic analysis

   :homepage: https://github.com/DiltheyLab/MetaMaps
   :license: Public Domain / Public Domain
   :recipe: /`metamaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps/meta.yaml>`_

   


.. conda:package:: metamaps

   |downloads_metamaps| |docker_metamaps|

   :versions: 0.1.98102e9-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: 
   :depends perl-file-slurp: 
   :depends perl-http-message: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-simple: 
   :depends perl-math-random: 
   :depends perl-set-intervaltree: 
   :depends perl-statistics-basic: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metamaps

   and update with::

      conda update metamaps

   or use the docker container::

      docker pull quay.io/biocontainers/metamaps:<tag>

   (see `metamaps/tags`_ for valid values for ``<tag>``)


.. |downloads_metamaps| image:: https://img.shields.io/conda/dn/bioconda/metamaps.svg?style=flat
   :target: https://anaconda.org/bioconda/metamaps
   :alt:   (downloads)
.. |docker_metamaps| image:: https://quay.io/repository/biocontainers/metamaps/status
   :target: https://quay.io/repository/biocontainers/metamaps
.. _`metamaps/tags`: https://quay.io/repository/biocontainers/metamaps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamaps/README.html