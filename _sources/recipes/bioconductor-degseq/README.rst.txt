:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degseq'
.. highlight: bash

bioconductor-degseq
===================

.. conda:recipe:: bioconductor-degseq
   :replaces_section_title:
   :noindex:

   Identify Differentially Expressed Genes from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DEGseq.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-degseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degseq/meta.yaml>`_
   :links: biotools: :biotools:`degseq`, doi: :doi:`10.1093/bioinformatics/btp612`

   DEGseq is an R package to identify differentially expressed genes from RNA\-Seq data.


.. conda:package:: bioconductor-degseq

   |downloads_bioconductor-degseq| |docker_bioconductor-degseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.1-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-degseq

   and update with::

      conda update bioconductor-degseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degseq:<tag>

   (see `bioconductor-degseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degseq
   :alt:   (downloads)
.. |docker_bioconductor-degseq| image:: https://quay.io/repository/biocontainers/bioconductor-degseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degseq
.. _`bioconductor-degseq/tags`: https://quay.io/repository/biocontainers/bioconductor-degseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degseq";
        var versions = ["1.52.0","1.52.0","1.48.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degseq/README.html