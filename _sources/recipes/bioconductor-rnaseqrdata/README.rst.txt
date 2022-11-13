:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqrdata'
.. highlight: bash

bioconductor-rnaseqrdata
========================

.. conda:recipe:: bioconductor-rnaseqrdata
   :replaces_section_title:
   :noindex:

   RNASeqRData\: sample data for RNASeqR software package demonstration

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/RNASeqRData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnaseqrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqrdata/meta.yaml>`_

   RNASeqRData is a helper experiment package for vignette demonstration purpose in RNASeqR software package.


.. conda:package:: bioconductor-rnaseqrdata

   |downloads_bioconductor-rnaseqrdata| |docker_bioconductor-rnaseqrdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqrdata

   and update with::

      conda update bioconductor-rnaseqrdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqrdata:<tag>

   (see `bioconductor-rnaseqrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqrdata
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqrdata| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata
.. _`bioconductor-rnaseqrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqrdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaseqrdata";
        var versions = ["1.16.0","1.12.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqrdata/README.html