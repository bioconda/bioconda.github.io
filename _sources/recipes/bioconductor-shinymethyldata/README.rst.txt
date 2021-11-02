:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-shinymethyldata'
.. highlight: bash

bioconductor-shinymethyldata
============================

.. conda:recipe:: bioconductor-shinymethyldata
   :replaces_section_title:
   :noindex:

   Example dataset of input data for shinyMethyl

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/shinyMethylData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-shinymethyldata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-shinymethyldata/meta.yaml>`_

   Extracted data from 369 TCGA Head and Neck Cancer DNA methylation samples. The extracted data serve as an example dataset for the package shinyMethyl. Original samples are from 450k methylation arrays\, and were obtained from The Cancer Genome Atlas \(TCGA\). 310 samples are from tumor\, 50 are matched normals and 9 are technical replicates of a control cell line.


.. conda:package:: bioconductor-shinymethyldata

   |downloads_bioconductor-shinymethyldata| |docker_bioconductor-shinymethyldata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-shinymethyldata

   and update with::

      conda update bioconductor-shinymethyldata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-shinymethyldata:<tag>

   (see `bioconductor-shinymethyldata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-shinymethyldata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-shinymethyldata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-shinymethyldata
   :alt:   (downloads)
.. |docker_bioconductor-shinymethyldata| image:: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata
.. _`bioconductor-shinymethyldata/tags`: https://quay.io/repository/biocontainers/bioconductor-shinymethyldata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-shinymethyldata";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-shinymethyldata/README.html