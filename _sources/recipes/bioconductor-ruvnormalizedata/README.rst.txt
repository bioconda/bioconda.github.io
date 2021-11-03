:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvnormalizedata'
.. highlight: bash

bioconductor-ruvnormalizedata
=============================

.. conda:recipe:: bioconductor-ruvnormalizedata
   :replaces_section_title:
   :noindex:

   Gender data for the RUVnormalize package

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/RUVnormalizeData.html
   :license: GPL-3
   :recipe: /`bioconductor-ruvnormalizedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalizedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalizedata/meta.yaml>`_

   Microarray gene expression data from the study of Vawter et al.\, 2004.


.. conda:package:: bioconductor-ruvnormalizedata

   |downloads_bioconductor-ruvnormalizedata| |docker_bioconductor-ruvnormalizedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``,  ``0.114.0-0``,  ``0.112.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvnormalizedata

   and update with::

      conda update bioconductor-ruvnormalizedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvnormalizedata:<tag>

   (see `bioconductor-ruvnormalizedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvnormalizedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvnormalizedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvnormalizedata
   :alt:   (downloads)
.. |docker_bioconductor-ruvnormalizedata| image:: https://quay.io/repository/biocontainers/bioconductor-ruvnormalizedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvnormalizedata
.. _`bioconductor-ruvnormalizedata/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvnormalizedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvnormalizedata";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvnormalizedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvnormalizedata/README.html