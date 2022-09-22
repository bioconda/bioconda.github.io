:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasillatranscriptexpr'
.. highlight: bash

bioconductor-pasillatranscriptexpr
==================================

.. conda:recipe:: bioconductor-pasillatranscriptexpr
   :replaces_section_title:
   :noindex:

   Data package with transcript expression obtained with kallisto from pasilla knock\-down RNA\-Seq data from Brooks et al.

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/PasillaTranscriptExpr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pasillatranscriptexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillatranscriptexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillatranscriptexpr/meta.yaml>`_

   Provides kallisto workflow and transcript expression of RNA\-Seq data from Brooks et al.


.. conda:package:: bioconductor-pasillatranscriptexpr

   |downloads_bioconductor-pasillatranscriptexpr| |docker_bioconductor-pasillatranscriptexpr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pasillatranscriptexpr

   and update with::

      conda update bioconductor-pasillatranscriptexpr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pasillatranscriptexpr:<tag>

   (see `bioconductor-pasillatranscriptexpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasillatranscriptexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasillatranscriptexpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasillatranscriptexpr
   :alt:   (downloads)
.. |docker_bioconductor-pasillatranscriptexpr| image:: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr
.. _`bioconductor-pasillatranscriptexpr/tags`: https://quay.io/repository/biocontainers/bioconductor-pasillatranscriptexpr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pasillatranscriptexpr";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasillatranscriptexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasillatranscriptexpr/README.html