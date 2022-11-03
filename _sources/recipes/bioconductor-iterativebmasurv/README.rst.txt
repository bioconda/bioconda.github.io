:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterativebmasurv'
.. highlight: bash

bioconductor-iterativebmasurv
=============================

.. conda:recipe:: bioconductor-iterativebmasurv
   :replaces_section_title:
   :noindex:

   The Iterative Bayesian Model Averaging \(BMA\) Algorithm For Survival Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/iterativeBMAsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebmasurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv/meta.yaml>`_
   :links: biotools: :biotools:`iterativebmasurv`, doi: :doi:`10.1186/1471-2105-10-72`

   The iterative Bayesian Model Averaging \(BMA\) algorithm for survival analysis is a variable selection method for applying survival analysis to microarray data.


.. conda:package:: bioconductor-iterativebmasurv

   |downloads_bioconductor-iterativebmasurv| |docker_bioconductor-iterativebmasurv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bma: 
   :depends r-leaps: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterativebmasurv

   and update with::

      conda update bioconductor-iterativebmasurv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterativebmasurv:<tag>

   (see `bioconductor-iterativebmasurv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterativebmasurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebmasurv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterativebmasurv
   :alt:   (downloads)
.. |docker_bioconductor-iterativebmasurv| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv
.. _`bioconductor-iterativebmasurv/tags`: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iterativebmasurv";
        var versions = ["1.56.0","1.52.0","1.50.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html