:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-purple'
.. highlight: bash

hmftools-purple
===============

.. conda:recipe:: hmftools-purple
   :replaces_section_title:
   :noindex:

   Purity\/ploidy estimator. Leverages the read depth and tumor BAF to estimate the purity of a sample and generate a copy number profile

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/purity-ploidy-estimator
   :license: MIT / MIT
   :recipe: /`hmftools-purple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple/meta.yaml>`_

   


.. conda:package:: hmftools-purple

   |downloads_hmftools-purple| |docker_hmftools-purple|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.51-0</code>,  <code>2.50-0</code>,  <code>2.48-0</code>,  <code>2.47-1</code>,  <code>2.47-0</code>,  <code>2.46-0</code>,  <code>2.45-0</code>,  <code>2.44-0</code>,  <code>2.43-0</code>,  </span></summary>
      

      ``2.51-0``,  ``2.50-0``,  ``2.48-0``,  ``2.47-1``,  ``2.47-0``,  ``2.46-0``,  ``2.45-0``,  ``2.44-0``,  ``2.43-0``,  ``2.41-0``,  ``2.40-0``,  ``2.39-0``,  ``2.38-0``,  ``2.37-0``,  ``2.36-0``,  ``2.35-0``,  ``2.34-0``,  ``2.32-0``,  ``2.31-0``,  ``2.25-1``,  ``2.17-1``,  ``2.16-1``,  ``2.16-0``,  ``2.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-variantannotation: 
   :depends circos: ``>=0.69.6``
   :depends openjdk: ``>=8``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-tidyr: 
   :depends xorg-libxtst: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-purple

   and update with::

      conda update hmftools-purple

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-purple:<tag>

   (see `hmftools-purple/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-purple| image:: https://img.shields.io/conda/dn/bioconda/hmftools-purple.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-purple
   :alt:   (downloads)
.. |docker_hmftools-purple| image:: https://quay.io/repository/biocontainers/hmftools-purple/status
   :target: https://quay.io/repository/biocontainers/hmftools-purple
.. _`hmftools-purple/tags`: https://quay.io/repository/biocontainers/hmftools-purple?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-purple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-purple/README.html