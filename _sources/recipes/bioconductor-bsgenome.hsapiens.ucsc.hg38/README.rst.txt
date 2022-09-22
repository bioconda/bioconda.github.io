:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(UCSC version hg38\, based on GRCh38.p13\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, based on GRCh38.p13\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-1</code>,  <code>1.4.4-0</code>,  <code>1.4.3-3</code>,  <code>1.4.3-2</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.1-8</code>,  <code>1.4.1-7</code>,  <code>1.4.1-5</code>,  </span></summary>
      

      ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38";
        var versions = ["1.4.4","1.4.4","1.4.3","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html