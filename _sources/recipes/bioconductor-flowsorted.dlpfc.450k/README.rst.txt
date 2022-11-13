:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.dlpfc.450k'
.. highlight: bash

bioconductor-flowsorted.dlpfc.450k
==================================

.. conda:recipe:: bioconductor-flowsorted.dlpfc.450k
   :replaces_section_title:
   :noindex:

   Illumina HumanMethylation data on sorted frontal cortex cell populations

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/FlowSorted.DLPFC.450k.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowsorted.dlpfc.450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.dlpfc.450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.dlpfc.450k/meta.yaml>`_

   Raw data objects for the Illumina 450k DNA methylation microarrays.


.. conda:package:: bioconductor-flowsorted.dlpfc.450k

   |downloads_bioconductor-flowsorted.dlpfc.450k| |docker_bioconductor-flowsorted.dlpfc.450k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221110``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsorted.dlpfc.450k

   and update with::

      conda update bioconductor-flowsorted.dlpfc.450k

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.dlpfc.450k:<tag>

   (see `bioconductor-flowsorted.dlpfc.450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.dlpfc.450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.dlpfc.450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.dlpfc.450k
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.dlpfc.450k| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.dlpfc.450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.dlpfc.450k
.. _`bioconductor-flowsorted.dlpfc.450k/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.dlpfc.450k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowsorted.dlpfc.450k";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.dlpfc.450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.dlpfc.450k/README.html