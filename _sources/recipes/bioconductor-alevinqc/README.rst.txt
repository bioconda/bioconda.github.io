:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alevinqc'
.. highlight: bash

bioconductor-alevinqc
=====================

.. conda:recipe:: bioconductor-alevinqc
   :replaces_section_title:
   :noindex:

   Generate QC Reports For Alevin Output

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alevinQC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alevinqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc/meta.yaml>`_

   Generate QC reports summarizing the output from an alevin run. Reports can be generated as html or pdf files\, or as shiny applications.


.. conda:package:: bioconductor-alevinqc

   |downloads_bioconductor-alevinqc| |docker_bioconductor-alevinqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-tximport: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-rcpp: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-rmarkdown: ``>=2.5``
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alevinqc

   and update with::

      conda update bioconductor-alevinqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alevinqc:<tag>

   (see `bioconductor-alevinqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alevinqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alevinqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alevinqc
   :alt:   (downloads)
.. |docker_bioconductor-alevinqc| image:: https://quay.io/repository/biocontainers/bioconductor-alevinqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alevinqc
.. _`bioconductor-alevinqc/tags`: https://quay.io/repository/biocontainers/bioconductor-alevinqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alevinqc";
        var versions = ["1.16.0","1.14.0","1.14.0","1.12.1","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html