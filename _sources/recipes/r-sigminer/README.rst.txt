:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigminer'
.. highlight: bash

r-sigminer
==========

.. conda:recipe:: r-sigminer
   :replaces_section_title:
   :noindex:

   Genomic alterations including single nucleotide substitution\, copy number alteration\, etc. are the major force for cancer initialization and development. Due to the specificity of molecular lesions caused by genomic alterations\, we can generate characteristic alteration spectra\, called \'signature\' \(Wang\, Shixiang\, et al.  \(2020\) \<DOI\:10.1101\/2020.04.27.20082404\> \& Alexandrov\, Ludmil B.\, et al. \(2020\) \<DOI\:10.1038\/s41586\-020\-1943\-3\> \& Macintyre\, Geoff\, et al. \(2018\) \<DOI\:10.1038\/s41588\-018\-0179\-8\>\).  This package helps users to extract\, analyze and visualize signatures from genomic alteration records\, thus providing new insight into cancer study.

   :homepage: https://github.com/ShixiangWang/sigminer
   :license: MIT / MIT
   :recipe: /`r-sigminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigminer/meta.yaml>`_

   


.. conda:package:: r-sigminer

   |downloads_r-sigminer| |docker_r-sigminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-maftools: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cli: ``>=2.0.0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-furrr: ``>=0.2.0``
   :depends r-future: 
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-ggpubr: 
   :depends r-magrittr: 
   :depends r-nmf: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rlang: ``>=0.1.2``
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sigminer

   and update with::

      conda update r-sigminer

   or use the docker container::

      docker pull quay.io/biocontainers/r-sigminer:<tag>

   (see `r-sigminer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sigminer| image:: https://img.shields.io/conda/dn/bioconda/r-sigminer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigminer
   :alt:   (downloads)
.. |docker_r-sigminer| image:: https://quay.io/repository/biocontainers/r-sigminer/status
   :target: https://quay.io/repository/biocontainers/r-sigminer
.. _`r-sigminer/tags`: https://quay.io/repository/biocontainers/r-sigminer?tab=tags


.. raw:: html

    <script>
        var package = "r-sigminer";
        var versions = ["2.1.0","2.0.5","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigminer/README.html