:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smad'
.. highlight: bash

bioconductor-smad
=================

.. conda:recipe:: bioconductor-smad
   :replaces_section_title:

   Assigning probability scores to prey proteins captured in affinity purification mass spectrometry \(AP\-MS\) expriments to infer protein\- protein interactions. The output would facilitate non\-specific background removal as contaminants are commonly found in AP\-MS data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SMAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smad/meta.yaml>`_

   


.. conda:package:: bioconductor-smad

   |downloads_bioconductor-smad| |docker_bioconductor-smad|

   :versions: 1.0.1-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-magrittr: >=1.5
   :depends r-matrixstats: 
   :depends r-rcpp: >=1.0.0
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-smad

   and update with::

      conda update bioconductor-smad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smad:<tag>

   (see `bioconductor-smad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smad
   :alt:   (downloads)
.. |docker_bioconductor-smad| image:: https://quay.io/repository/biocontainers/bioconductor-smad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smad
.. _`bioconductor-smad/tags`: https://quay.io/repository/biocontainers/bioconductor-smad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smad/README.html