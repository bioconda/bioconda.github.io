:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hierfstat'
.. highlight: bash

r-hierfstat
===========

.. conda:recipe:: r-hierfstat
   :replaces_section_title:

   Allows the estimation of hierarchical F\-statistics from haploid or diploid genetic data  with any numbers  of levels in the hierarchy\, following the algorithm of Yang \(Evolution\, 1998\, 52\(4\)\:950\-956\;  \<DOI\:10.2307\/2411227\>. Functions are also given to test via randomisations the significance of each F and variance components\,   using the likelihood\-ratio statistics G.

   :homepage: http://www.r-project.org, http://github.com/jgx65/hierfstat
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-hierfstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hierfstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hierfstat/meta.yaml>`_

   


.. conda:package:: r-hierfstat

   |downloads_r-hierfstat| |docker_r-hierfstat|

   :versions: 0.04_22-0
   
   :depends r-ade4: 
   :depends r-adegenet: 
   :depends r-base: >=3.5,<3.6.0a0
   :depends r-gtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-hierfstat

   and update with::

      conda update r-hierfstat

   or use the docker container::

      docker pull quay.io/biocontainers/r-hierfstat:<tag>

   (see `r-hierfstat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-hierfstat| image:: https://img.shields.io/conda/dn/bioconda/r-hierfstat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hierfstat
   :alt:   (downloads)
.. |docker_r-hierfstat| image:: https://quay.io/repository/biocontainers/r-hierfstat/status
   :target: https://quay.io/repository/biocontainers/r-hierfstat
.. _`r-hierfstat/tags`: https://quay.io/repository/biocontainers/r-hierfstat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hierfstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hierfstat/README.html