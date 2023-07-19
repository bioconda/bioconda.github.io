:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraymvout'
.. highlight: bash

bioconductor-arraymvout
=======================

.. conda:recipe:: bioconductor-arraymvout
   :replaces_section_title:
   :noindex:

   multivariate outlier detection for expression array QA

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/arrayMvout.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arraymvout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout/meta.yaml>`_

   This package supports the application of diverse quality metrics to AffyBatch instances\, summarizing these metrics via PCA\, and then performing parametric outlier detection on the PCs to identify aberrant arrays with a fixed Type I error rate


.. conda:package:: bioconductor-arraymvout

   |downloads_bioconductor-arraymvout| |docker_bioconductor-arraymvout|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affycontam: ``>=1.58.0,<1.59.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-lumi: ``>=2.52.0,<2.53.0``
   :depends bioconductor-mdqc: ``>=1.62.0,<1.63.0``
   :depends bioconductor-parody: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arraymvout

   and update with::

      conda update bioconductor-arraymvout

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arraymvout:<tag>

   (see `bioconductor-arraymvout/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arraymvout| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraymvout.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arraymvout
   :alt:   (downloads)
.. |docker_bioconductor-arraymvout| image:: https://quay.io/repository/biocontainers/bioconductor-arraymvout/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraymvout
.. _`bioconductor-arraymvout/tags`: https://quay.io/repository/biocontainers/bioconductor-arraymvout?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arraymvout";
        var versions = ["1.58.0","1.56.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html