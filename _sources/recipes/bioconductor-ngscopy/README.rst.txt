:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngscopy'
.. highlight: bash

bioconductor-ngscopy
====================

.. conda:recipe:: bioconductor-ngscopy
   :replaces_section_title:

   NGScopy provides a quantitative caller for detecting copy number variations in next generation sequencing \(NGS\)\, including whole genome sequencing \(WGS\)\, whole exome sequencing \(WES\) and targeted panel sequencing \(TPS\). The caller can be parallelized by chromosomes to use multiple processors\/cores on one computer.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NGScopy.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-ngscopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopy/meta.yaml>`_

   


.. conda:package:: bioconductor-ngscopy

   |downloads_bioconductor-ngscopy| |docker_bioconductor-ngscopy|

   :versions: 1.16.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-changepoint: >=2.1.1
   
   :depends r-rbamtools: >=2.6.0
   
   :depends r-xmisc: >=0.2.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ngscopy

   and update with::

      conda update bioconductor-ngscopy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ngscopy:<tag>

   (see `bioconductor-ngscopy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ngscopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngscopy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ngscopy| image:: https://quay.io/repository/biocontainers/bioconductor-ngscopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngscopy
.. _`bioconductor-ngscopy/tags`: https://quay.io/repository/biocontainers/bioconductor-ngscopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngscopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngscopy/README.html