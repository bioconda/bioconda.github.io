:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structure'
.. highlight: bash

structure
=========

.. conda:recipe:: structure
   :replaces_section_title:

   The program structure is a free software package for using multi\-locus genotype data to investigate population structure. Its uses include inferring the presence of distinct populations\, assigning individuals to populations\, studying hybrid zones\, identifying migrants and admixed individuals\, and estimating population allele frequencies in situations where many individuals are migrants or admixed. It can be applied to most of the commonly\-used genetic markers\, including SNPS\, microsatellites\, RFLPs and AFLPs.

   :homepage: https://web.stanford.edu/group/pritchardlab/structure.html
   :license: MIT
   :recipe: /`structure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure/meta.yaml>`_
   :links: biotools: :biotools:`Structure`

   


.. conda:package:: structure

   |downloads_structure| |docker_structure|

   :versions: 2.3.4-1, 2.3.4-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install structure

   and update with::

      conda update structure

   or use the docker container::

      docker pull quay.io/repository/biocontainers/structure:<tag>

   (see `structure/tags`_ for valid values for ``<tag>``)


.. |downloads_structure| image:: https://img.shields.io/conda/dn/bioconda/structure.svg?style=flat
   :alt:   (downloads)
.. |docker_structure| image:: https://quay.io/repository/biocontainers/structure/status
   :target: https://quay.io/repository/biocontainers/structure
.. _`structure/tags`: https://quay.io/repository/biocontainers/structure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structure/README.html