:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucleosim'
.. highlight: bash

bioconductor-nucleosim
======================

.. conda:recipe:: bioconductor-nucleosim
   :replaces_section_title:

   This package can generate a synthetic map with reads covering the nucleosome regions as well as a synthetic map with forward and reverse reads emulating next\-generation sequencing. The user has choice between three different distributions for the read positioning\: Normal\, Student and Uniform.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nucleoSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nucleosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucleosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucleosim/meta.yaml>`_
   :links: biotools: :biotools:`nucleosim`, doi: :doi:`10.1515/sagmb-2014-0098`

   


.. conda:package:: bioconductor-nucleosim

   |downloads_bioconductor-nucleosim| |docker_bioconductor-nucleosim|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nucleosim

   and update with::

      conda update bioconductor-nucleosim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nucleosim:<tag>

   (see `bioconductor-nucleosim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucleosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucleosim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nucleosim| image:: https://quay.io/repository/biocontainers/bioconductor-nucleosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucleosim
.. _`bioconductor-nucleosim/tags`: https://quay.io/repository/biocontainers/bioconductor-nucleosim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucleosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucleosim/README.html