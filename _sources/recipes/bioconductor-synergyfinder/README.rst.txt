:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synergyfinder'
.. highlight: bash

bioconductor-synergyfinder
==========================

.. conda:recipe:: bioconductor-synergyfinder
   :replaces_section_title:
   :noindex:

   Calculate and Visualize Synergy Scores for Drug Combinations

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/synergyfinder.html
   :license: Mozilla Public License 2.0
   :recipe: /`bioconductor-synergyfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synergyfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synergyfinder/meta.yaml>`_
   :links: biotools: :biotools:`synergyfinder`, doi: :doi:`10.1093/bioinformatics/btx162`

   Efficient implementations for analyzing pre\-clinical multiple drug combination datasets. 1. Synergy scores valuculation via all the popular models\, including HSA\, Loewe\, Bliss and ZIP\; 2. Drug Sensitivity Score \(CSS\) and Relitave Inhibition \(RI\) for drug sensitivity evaluation\; 3. Visualization for drug combination matrices and scores. Based on this package\, we also provide a web application \(http\:\/\/synergyfinder.org\/\) for users who prefer more friendly user interface.


.. conda:package:: bioconductor-synergyfinder

   |downloads_bioconductor-synergyfinder| |docker_bioconductor-synergyfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.10-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.1-0</code>,  <code>1.10.2-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.4.10-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: ``>=1.0.3``
   :depends r-drc: ``>=3.0-1``
   :depends r-furrr: ``>=0.2.2``
   :depends r-future: ``>=1.21.0``
   :depends r-ggforce: ``>=0.3.2``
   :depends r-ggplot2: ``>=3.3.3``
   :depends r-ggrepel: ``>=0.9.1``
   :depends r-gstat: ``>=2.0-6``
   :depends r-kriging: ``>=1.1``
   :depends r-lattice: ``>=0.20-41``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-mice: ``>=3.13.0``
   :depends r-nleqslv: ``>=3.3.2``
   :depends r-pbapply: ``>=1.4-3``
   :depends r-plotly: ``>=4.9.3``
   :depends r-purrr: ``>=0.3.4``
   :depends r-reshape2: ``>=1.4.4``
   :depends r-sp: ``>=1.4-5``
   :depends r-spatialextremes: ``>=2.0-9``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tidyr: ``>=1.1.2``
   :depends r-tidyverse: ``>=1.3.0``
   :depends r-vegan: ``>=2.5-7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synergyfinder

   and update with::

      conda update bioconductor-synergyfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synergyfinder:<tag>

   (see `bioconductor-synergyfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synergyfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synergyfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synergyfinder
   :alt:   (downloads)
.. |docker_bioconductor-synergyfinder| image:: https://quay.io/repository/biocontainers/bioconductor-synergyfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synergyfinder
.. _`bioconductor-synergyfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-synergyfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synergyfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synergyfinder/README.html