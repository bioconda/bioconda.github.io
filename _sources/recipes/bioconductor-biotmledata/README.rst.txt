:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotmledata'
.. highlight: bash

bioconductor-biotmledata
========================

.. conda:recipe:: bioconductor-biotmledata
   :replaces_section_title:
   :noindex:

   Example experimental microarray data set for the \"biotmle\" R package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/biotmleData.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata/meta.yaml>`_

   Microarray data \(from the Illumina Ref\-8 BeadChips platform\) and phenotype\-level data from an epidemiological investigation of benzene exposure\, packaged using \"SummarizedExperiemnt\"\, for use as an example with the \"biotmle\" R package.


.. conda:package:: bioconductor-biotmledata

   |downloads_bioconductor-biotmledata| |docker_bioconductor-biotmledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotmledata

   and update with::

      conda update bioconductor-biotmledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotmledata:<tag>

   (see `bioconductor-biotmledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotmledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotmledata
   :alt:   (downloads)
.. |docker_bioconductor-biotmledata| image:: https://quay.io/repository/biocontainers/bioconductor-biotmledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmledata
.. _`bioconductor-biotmledata/tags`: https://quay.io/repository/biocontainers/bioconductor-biotmledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biotmledata";
        var versions = ["1.18.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html