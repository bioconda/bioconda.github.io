:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savage'
.. highlight: bash

savage
======

.. conda:recipe:: savage
   :replaces_section_title:

   SAVAGE \(Strain Aware VirAl GEnome assembly\) reconstructs individual \(viral\) haplotypes from a mixed sample.

   :homepage: https://github.com/HaploConduct/HaploConduct/tree/master/savage
   :license: GPL v3
   :recipe: /`savage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage/meta.yaml>`_

   


.. conda:package:: savage

   |downloads_savage| |docker_savage|

   :versions: 0.4.2-0, 0.4.1-0, 0.4.0-2, 0.4.0-1, 0.4.0-0, 0.3.0-0, 0.2.1-1, 0.2.1-0
   
   :depends boost: >=1.70.0,<1.70.1.0a0
   :depends bwa: 
   :depends kallisto: >=0.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :depends rust-overlaps: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install savage

   and update with::

      conda update savage

   or use the docker container::

      docker pull quay.io/biocontainers/savage:<tag>

   (see `savage/tags`_ for valid values for ``<tag>``)


.. |downloads_savage| image:: https://img.shields.io/conda/dn/bioconda/savage.svg?style=flat
   :target: https://anaconda.org/bioconda/savage
   :alt:   (downloads)
.. |docker_savage| image:: https://quay.io/repository/biocontainers/savage/status
   :target: https://quay.io/repository/biocontainers/savage
.. _`savage/tags`: https://quay.io/repository/biocontainers/savage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savage/README.html