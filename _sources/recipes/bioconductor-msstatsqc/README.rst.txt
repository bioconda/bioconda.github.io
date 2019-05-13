:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsqc'
.. highlight: bash

bioconductor-msstatsqc
======================

.. conda:recipe:: bioconductor-msstatsqc
   :replaces_section_title:

   MSstatsQC is an R package which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MSstatsQC.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc/meta.yaml>`_

   


.. conda:package:: bioconductor-msstatsqc

   |downloads_bioconductor-msstatsqc| |docker_bioconductor-msstatsqc|

   :versions: 2.0.1-0
   
   :depends bioconductor-msnbase: >=2.8.0,<2.9.0
   :depends bioconductor-qcmetrics: >=1.20.0,<1.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-plotly: 
   :depends r-recordlinkage: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsqc

   and update with::

      conda update bioconductor-msstatsqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsqc:<tag>

   (see `bioconductor-msstatsqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsqc
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqc| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqc
.. _`bioconductor-msstatsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html