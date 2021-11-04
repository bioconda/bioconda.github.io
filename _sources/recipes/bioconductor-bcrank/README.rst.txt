:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcrank'
.. highlight: bash

bioconductor-bcrank
===================

.. conda:recipe:: bioconductor-bcrank
   :replaces_section_title:
   :noindex:

   Predicting binding site consensus from ranked DNA sequences

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BCRANK.html
   :license: GPL-2
   :recipe: /`bioconductor-bcrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank/meta.yaml>`_
   :links: biotools: :biotools:`bcrank`, doi: :doi:`10.1093/nar/gkp381`

   Functions and classes for de novo prediction of transcription factor binding consensus by heuristic search


.. conda:package:: bioconductor-bcrank

   |downloads_bioconductor-bcrank| |docker_bioconductor-bcrank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bcrank

   and update with::

      conda update bioconductor-bcrank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bcrank:<tag>

   (see `bioconductor-bcrank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bcrank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcrank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcrank
   :alt:   (downloads)
.. |docker_bioconductor-bcrank| image:: https://quay.io/repository/biocontainers/bioconductor-bcrank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcrank
.. _`bioconductor-bcrank/tags`: https://quay.io/repository/biocontainers/bioconductor-bcrank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bcrank";
        var versions = ["1.56.0","1.54.0","1.52.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcrank/README.html