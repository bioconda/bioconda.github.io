:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqcomp'
.. highlight: bash

bioconductor-rnaseqcomp
=======================

.. conda:recipe:: bioconductor-rnaseqcomp
   :replaces_section_title:
   :noindex:

   Benchmarks for RNA\-seq Quantification Pipelines

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/rnaseqcomp.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaseqcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqcomp/meta.yaml>`_
   :links: biotools: :biotools:`rnaseqcomp`

   Several quantitative and visualized benchmarks for RNA\-seq quantification pipelines. Two\-condition quantifications for genes\, transcripts\, junctions or exons by each pipeline with necessary meta information should be organized into numeric matrices in order to proceed the evaluation.


.. conda:package:: bioconductor-rnaseqcomp

   |downloads_bioconductor-rnaseqcomp| |docker_bioconductor-rnaseqcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqcomp

   and update with::

      conda update bioconductor-rnaseqcomp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqcomp:<tag>

   (see `bioconductor-rnaseqcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqcomp
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqcomp| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp
.. _`bioconductor-rnaseqcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqcomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqcomp";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqcomp/README.html