:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grndata'
.. highlight: bash

bioconductor-grndata
====================

.. conda:recipe:: bioconductor-grndata
   :replaces_section_title:
   :noindex:

   Synthetic Expression Data for Gene Regulatory Network Inference

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/grndata.html
   :license: GPL-3
   :recipe: /`bioconductor-grndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grndata/meta.yaml>`_

   Simulated expression data for five large Gene Regulatory Networks from different simulators


.. conda:package:: bioconductor-grndata

   |downloads_bioconductor-grndata| |docker_bioconductor-grndata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-2</code>,  </span></summary>
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grndata

   and update with::

      conda update bioconductor-grndata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grndata:<tag>

   (see `bioconductor-grndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grndata
   :alt:   (downloads)
.. |docker_bioconductor-grndata| image:: https://quay.io/repository/biocontainers/bioconductor-grndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grndata
.. _`bioconductor-grndata/tags`: https://quay.io/repository/biocontainers/bioconductor-grndata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-grndata";
        var versions = ["1.26.0","1.26.0","1.24.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grndata/README.html