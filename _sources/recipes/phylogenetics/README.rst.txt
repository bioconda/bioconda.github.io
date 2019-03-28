:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylogenetics'
.. highlight: bash

phylogenetics
=============

.. conda:recipe:: phylogenetics
   :replaces_section_title:

   Python API for managing a phylogenetics projects.

   :homepage: https://github.com/Zsailer/phylogenetics
   :license: BSD / BSD-3-Clause
   :recipe: /`phylogenetics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenetics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenetics/meta.yaml>`_

   


.. conda:package:: phylogenetics

   |downloads_phylogenetics| |docker_phylogenetics|

   :versions: 0.5.0-0
   
   :depends biopython: 
   
   :depends dendropy: 
   
   :depends pandas: 
   
   :depends phylopandas: 
   
   :depends phylovega: 
   
   :depends pyasr: 
   
   :depends python: >=3.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylogenetics

   and update with::

      conda update phylogenetics

   or use the docker container::

      docker pull quay.io/biocontainers/phylogenetics:<tag>

   (see `phylogenetics/tags`_ for valid values for ``<tag>``)


.. |downloads_phylogenetics| image:: https://img.shields.io/conda/dn/bioconda/phylogenetics.svg?style=flat
   :alt:   (downloads)
.. |docker_phylogenetics| image:: https://quay.io/repository/biocontainers/phylogenetics/status
   :target: https://quay.io/repository/biocontainers/phylogenetics
.. _`phylogenetics/tags`: https://quay.io/repository/biocontainers/phylogenetics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylogenetics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylogenetics/README.html