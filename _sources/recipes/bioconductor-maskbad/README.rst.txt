:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maskbad'
.. highlight: bash

bioconductor-maskbad
====================

.. conda:recipe:: bioconductor-maskbad
   :replaces_section_title:
   :noindex:

   Masking probes with binding affinity differences

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/maskBAD.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-maskbad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maskbad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maskbad/meta.yaml>`_
   :links: biotools: :biotools:`maskbad`, doi: :doi:`10.1093/bioinformatics/btp492`

   Package includes functions to analyze and mask microarray expression data.


.. conda:package:: bioconductor-maskbad

   |downloads_bioconductor-maskbad| |docker_bioconductor-maskbad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-gcrma: ``>=2.72.0,<2.73.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maskbad

   and update with::

      conda update bioconductor-maskbad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maskbad:<tag>

   (see `bioconductor-maskbad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maskbad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maskbad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maskbad
   :alt:   (downloads)
.. |docker_bioconductor-maskbad| image:: https://quay.io/repository/biocontainers/bioconductor-maskbad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maskbad
.. _`bioconductor-maskbad/tags`: https://quay.io/repository/biocontainers/bioconductor-maskbad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maskbad";
        var versions = ["1.44.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maskbad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maskbad/README.html