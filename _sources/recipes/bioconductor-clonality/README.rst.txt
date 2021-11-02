:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clonality'
.. highlight: bash

bioconductor-clonality
======================

.. conda:recipe:: bioconductor-clonality
   :replaces_section_title:
   :noindex:

   Clonality testing

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Clonality.html
   :license: GPL-3
   :recipe: /`bioconductor-clonality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality/meta.yaml>`_
   :links: biotools: :biotools:`clonality`, doi: :doi:`10.1093/bioinformatics/btr268`

   Statistical tests for clonality versus independence of tumors from the same patient based on their LOH or genomewide copy number profiles


.. conda:package:: bioconductor-clonality

   |downloads_bioconductor-clonality| |docker_bioconductor-clonality|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clonality

   and update with::

      conda update bioconductor-clonality

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clonality:<tag>

   (see `bioconductor-clonality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clonality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clonality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clonality
   :alt:   (downloads)
.. |docker_bioconductor-clonality| image:: https://quay.io/repository/biocontainers/bioconductor-clonality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clonality
.. _`bioconductor-clonality/tags`: https://quay.io/repository/biocontainers/bioconductor-clonality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clonality";
        var versions = ["1.42.0","1.40.0","1.38.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clonality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clonality/README.html