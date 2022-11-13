:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timerquant'
.. highlight: bash

bioconductor-timerquant
=======================

.. conda:recipe:: bioconductor-timerquant
   :replaces_section_title:
   :noindex:

   Timer Quantification

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/TimerQuant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-timerquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant/meta.yaml>`_

   Supplementary Data package for tandem timer methods paper by Barry et al. \(2015\) including TimerQuant shiny applications.


.. conda:package:: bioconductor-timerquant

   |downloads_bioconductor-timerquant| |docker_bioconductor-timerquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-desolve: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-locfit: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timerquant

   and update with::

      conda update bioconductor-timerquant

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timerquant:<tag>

   (see `bioconductor-timerquant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timerquant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timerquant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timerquant
   :alt:   (downloads)
.. |docker_bioconductor-timerquant| image:: https://quay.io/repository/biocontainers/bioconductor-timerquant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timerquant
.. _`bioconductor-timerquant/tags`: https://quay.io/repository/biocontainers/bioconductor-timerquant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timerquant";
        var versions = ["1.27.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timerquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timerquant/README.html