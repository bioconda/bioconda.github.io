:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gkmsvm'
.. highlight: bash

r-gkmsvm
========

.. conda:recipe:: r-gkmsvm
   :replaces_section_title:
   :noindex:

   Imports the \'gkmSVM\' v2.0 functionalities into R \<http\:\/\/www.beerlab.org\/gkmsvm\/\> It also uses the \'kernlab\' library \(separate R package by different authors\) for various SVM algorithms.

   :homepage: https://CRAN.R-project.org/package=gkmSVM
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-gkmsvm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm/meta.yaml>`_

   


.. conda:package:: r-gkmsvm

   |downloads_r-gkmsvm| |docker_r-gkmsvm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.83.0-0</code>,  <code>0.82.0-3</code>,  <code>0.82.0-2</code>,  <code>0.82.0-1</code>,  <code>0.82.0-0</code>,  <code>0.81.0-4</code>,  <code>0.81.0-3</code>,  <code>0.81.0-2</code>,  <code>0.81.0-1</code>,  </span></summary>
      

      ``0.83.0-0``,  ``0.82.0-3``,  ``0.82.0-2``,  ``0.82.0-1``,  ``0.82.0-0``,  ``0.81.0-4``,  ``0.81.0-3``,  ``0.81.0-2``,  ``0.81.0-1``,  ``0.81.0-0``,  ``0.80.0-1``,  ``0.80.0-0``,  ``0.79.0-1``,  ``0.79.0-0``,  ``0.71.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernlab: 
   :depends r-rcpp: 
   :depends r-rocr: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gkmsvm

   and update with::

      conda update r-gkmsvm

   or use the docker container::

      docker pull quay.io/biocontainers/r-gkmsvm:<tag>

   (see `r-gkmsvm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gkmsvm| image:: https://img.shields.io/conda/dn/bioconda/r-gkmsvm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gkmsvm
   :alt:   (downloads)
.. |docker_r-gkmsvm| image:: https://quay.io/repository/biocontainers/r-gkmsvm/status
   :target: https://quay.io/repository/biocontainers/r-gkmsvm
.. _`r-gkmsvm/tags`: https://quay.io/repository/biocontainers/r-gkmsvm?tab=tags


.. raw:: html

    <script>
        var package = "r-gkmsvm";
        var versions = ["0.83.0","0.82.0","0.82.0","0.82.0","0.82.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gkmsvm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gkmsvm/README.html