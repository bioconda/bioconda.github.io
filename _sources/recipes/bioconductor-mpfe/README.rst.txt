:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpfe'
.. highlight: bash

bioconductor-mpfe
=================

.. conda:recipe:: bioconductor-mpfe
   :replaces_section_title:
   :noindex:

   Estimation of the amplicon methylation pattern distribution from bisulphite sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MPFE.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-mpfe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpfe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpfe/meta.yaml>`_
   :links: biotools: :biotools:`mpfe`, doi: :doi:`10.1186/s12859-015-0600-6`

   Estimate distribution of methylation patterns from a table of counts from a bisulphite sequencing experiment given a non\-conversion rate and read error rate.


.. conda:package:: bioconductor-mpfe

   |downloads_bioconductor-mpfe| |docker_bioconductor-mpfe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mpfe

   and update with::

      conda update bioconductor-mpfe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mpfe:<tag>

   (see `bioconductor-mpfe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mpfe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpfe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpfe
   :alt:   (downloads)
.. |docker_bioconductor-mpfe| image:: https://quay.io/repository/biocontainers/bioconductor-mpfe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpfe
.. _`bioconductor-mpfe/tags`: https://quay.io/repository/biocontainers/bioconductor-mpfe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpfe";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpfe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpfe/README.html