:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fmcsr'
.. highlight: bash

bioconductor-fmcsr
==================

.. conda:recipe:: bioconductor-fmcsr
   :replaces_section_title:

   The fmcsR package introduces an efficient maximum common substructure \(MCS\) algorithms combined with a novel matching strategy that allows for atom and\/or bond mismatches in the substructures shared among two small molecules. The resulting flexible MCSs \(FMCSs\) are often larger than strict MCSs\, resulting in the identification of more common features in their source structures\, as well as a higher sensitivity in finding compounds with weak structural similarities. The fmcsR package provides several utilities to use the FMCS algorithm for pairwise compound comparisons\, structure similarity searching and clustering.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/fmcsR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fmcsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmcsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmcsr/meta.yaml>`_

   


.. conda:package:: bioconductor-fmcsr

   |downloads_bioconductor-fmcsr| |docker_bioconductor-fmcsr|

   :versions: 1.24.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-chemminer: >=3.34.0,<3.35.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-runit: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fmcsr

   and update with::

      conda update bioconductor-fmcsr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fmcsr:<tag>

   (see `bioconductor-fmcsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fmcsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fmcsr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fmcsr| image:: https://quay.io/repository/biocontainers/bioconductor-fmcsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fmcsr
.. _`bioconductor-fmcsr/tags`: https://quay.io/repository/biocontainers/bioconductor-fmcsr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fmcsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fmcsr/README.html