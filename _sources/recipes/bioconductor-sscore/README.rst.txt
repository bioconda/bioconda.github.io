:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sscore'
.. highlight: bash

bioconductor-sscore
===================

.. conda:recipe:: bioconductor-sscore
   :replaces_section_title:
   :noindex:

   S\-Score Algorithm for Affymetrix Oligonucleotide Microarrays

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/sscore.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sscore/meta.yaml>`_
   :links: biotools: :biotools:`sscore`, doi: :doi:`10.1016/S1046-2023(03)00156-7`

   This package contains an implementation of the S\-Score algorithm as described by Zhang et al \(2002\).


.. conda:package:: bioconductor-sscore

   |downloads_bioconductor-sscore| |docker_bioconductor-sscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-affyio: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sscore

   and update with::

      conda update bioconductor-sscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sscore:<tag>

   (see `bioconductor-sscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sscore
   :alt:   (downloads)
.. |docker_bioconductor-sscore| image:: https://quay.io/repository/biocontainers/bioconductor-sscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sscore
.. _`bioconductor-sscore/tags`: https://quay.io/repository/biocontainers/bioconductor-sscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sscore";
        var versions = ["1.72.0","1.70.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sscore/README.html