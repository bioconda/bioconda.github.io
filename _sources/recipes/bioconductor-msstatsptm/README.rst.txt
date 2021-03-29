:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsptm'
.. highlight: bash

bioconductor-msstatsptm
=======================

.. conda:recipe:: bioconductor-msstatsptm
   :replaces_section_title:
   :noindex:

   Statistical Characterization of Post\-translational Modifications

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MSstatsPTM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsptm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm/meta.yaml>`_

   MSstatsPTM provides general statistical methods for quantitative characterization of post\-translational modifications \(PTMs\). Typically\, the analysis involves the quantification of PTM sites \(i.e.\, modified residues\) and their corresponding proteins\, as well as the integration of the quantification results. MSstatsPTM provides functions for summarization\, estimation of PTM site abundance\, and detection of changes in PTMs across experimental conditions.


.. conda:package:: bioconductor-msstatsptm

   |downloads_bioconductor-msstatsptm| |docker_bioconductor-msstatsptm|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsptm

   and update with::

      conda update bioconductor-msstatsptm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsptm:<tag>

   (see `bioconductor-msstatsptm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsptm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsptm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsptm
   :alt:   (downloads)
.. |docker_bioconductor-msstatsptm| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsptm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsptm
.. _`bioconductor-msstatsptm/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsptm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html