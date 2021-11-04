:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raggedexperiment'
.. highlight: bash

bioconductor-raggedexperiment
=============================

.. conda:recipe:: bioconductor-raggedexperiment
   :replaces_section_title:
   :noindex:

   Representation of Sparse Experiments and Assays Across Samples

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RaggedExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-raggedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raggedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raggedexperiment/meta.yaml>`_

   This package provides a flexible representation of copy number\, mutation\, and other data that fit into the ragged array schema for genomic location data. The basic representation of such data provides a rectangular flat table interface to the user with range information in the rows and samples\/specimen in the columns.


.. conda:package:: bioconductor-raggedexperiment

   |downloads_bioconductor-raggedexperiment| |docker_bioconductor-raggedexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-matrixgenerics: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-raggedexperiment

   and update with::

      conda update bioconductor-raggedexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-raggedexperiment:<tag>

   (see `bioconductor-raggedexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-raggedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raggedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raggedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-raggedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-raggedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raggedexperiment
.. _`bioconductor-raggedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-raggedexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raggedexperiment";
        var versions = ["1.18.0","1.16.0","1.14.1","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raggedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raggedexperiment/README.html