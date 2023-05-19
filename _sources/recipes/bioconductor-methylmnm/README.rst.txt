:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylmnm'
.. highlight: bash

bioconductor-methylmnm
======================

.. conda:recipe:: bioconductor-methylmnm
   :replaces_section_title:
   :noindex:

   detect different methylation level \(DMR\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/methylMnM.html
   :license: GPL-3
   :recipe: /`bioconductor-methylmnm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmnm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmnm/meta.yaml>`_
   :links: biotools: :biotools:`methylmnm`, doi: :doi:`10.1101/gr.156539.113`

   To give the exactly p\-value and q\-value of MeDIP\-seq and MRE\-seq data for different samples comparation.


.. conda:package:: bioconductor-methylmnm

   |downloads_bioconductor-methylmnm| |docker_bioconductor-methylmnm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-statmod: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylmnm

   and update with::

      conda update bioconductor-methylmnm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylmnm:<tag>

   (see `bioconductor-methylmnm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylmnm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylmnm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylmnm
   :alt:   (downloads)
.. |docker_bioconductor-methylmnm| image:: https://quay.io/repository/biocontainers/bioconductor-methylmnm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylmnm
.. _`bioconductor-methylmnm/tags`: https://quay.io/repository/biocontainers/bioconductor-methylmnm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylmnm";
        var versions = ["1.36.0","1.36.0","1.32.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylmnm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylmnm/README.html