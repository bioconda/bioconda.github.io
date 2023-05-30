:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseqr'
.. highlight: bash

bioconductor-chipseqr
=====================

.. conda:recipe:: bioconductor-chipseqr
   :replaces_section_title:
   :noindex:

   Identifying Protein Binding Sites in High\-Throughput Sequencing Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ChIPseqR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chipseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqr/meta.yaml>`_

   ChIPseqR identifies protein binding sites from ChIP\-seq and nucleosome positioning experiments. The model used to describe binding events was developed to locate nucleosomes but should flexible enough to handle other types of experiments as well.


.. conda:package:: bioconductor-chipseqr

   |downloads_bioconductor-chipseqr| |docker_bioconductor-chipseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.52.0-1``,  ``1.52.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-1``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hilbertvis: ``>=1.56.0,<1.57.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-fbasics: 
   :depends r-timsac: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseqr

   and update with::

      conda update bioconductor-chipseqr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseqr:<tag>

   (see `bioconductor-chipseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseqr
   :alt:   (downloads)
.. |docker_bioconductor-chipseqr| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseqr
.. _`bioconductor-chipseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipseqr";
        var versions = ["1.52.0","1.52.0","1.48.0","1.48.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseqr/README.html