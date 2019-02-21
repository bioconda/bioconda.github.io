:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatshap'
.. highlight: bash

whatshap
========

.. conda:recipe:: whatshap
   :replaces_section_title:

   phase genomic variants using DNA sequencing reads \(haplotype assembly\)

   :homepage: https://whatshap.readthedocs.io/
   :license: MIT License
   :recipe: /`whatshap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap/meta.yaml>`_

   


.. conda:package:: whatshap

   |downloads_whatshap| |docker_whatshap|

   :versions: 0.18-0, 0.17-0, 0.16-0, 0.15-0, 0.14.1-0, 0.13-0, 0.12-0, 0.11-0, 0.9-0
   
   :depends biopython: >=1.73
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends networkx: 
   
   :depends pyfaidx: >=0.5.5.2
   
   :depends pysam: >=0.15
   
   :depends python: >=3.6,<3.7.0a0
   
   :depends pyvcf: 
   
   :depends setuptools: 
   
   :depends xopen: >=0.5.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install whatshap

   and update with::

      conda update whatshap

   or use the docker container::

      docker pull quay.io/biocontainers/whatshap:<tag>

   (see `whatshap/tags`_ for valid values for ``<tag>``)


.. |downloads_whatshap| image:: https://img.shields.io/conda/dn/bioconda/whatshap.svg?style=flat
   :alt:   (downloads)
.. |docker_whatshap| image:: https://quay.io/repository/biocontainers/whatshap/status
   :target: https://quay.io/repository/biocontainers/whatshap
.. _`whatshap/tags`: https://quay.io/repository/biocontainers/whatshap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatshap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatshap/README.html