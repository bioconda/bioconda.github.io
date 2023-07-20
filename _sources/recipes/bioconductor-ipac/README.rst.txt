:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipac'
.. highlight: bash

bioconductor-ipac
=================

.. conda:recipe:: bioconductor-ipac
   :replaces_section_title:
   :noindex:

   Identification of Protein Amino acid Clustering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/iPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-ipac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipac/meta.yaml>`_
   :links: biotools: :biotools:`ipac`, doi: :doi:`10.1186/1471-2105-14-190`

   iPAC is a novel tool to identify somatic amino acid mutation clustering within proteins while taking into account protein structure.


.. conda:package:: bioconductor-ipac

   |downloads_bioconductor-ipac| |docker_bioconductor-ipac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gdata: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ipac

   and update with::

      conda update bioconductor-ipac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipac:<tag>

   (see `bioconductor-ipac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipac
   :alt:   (downloads)
.. |docker_bioconductor-ipac| image:: https://quay.io/repository/biocontainers/bioconductor-ipac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipac
.. _`bioconductor-ipac/tags`: https://quay.io/repository/biocontainers/bioconductor-ipac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipac";
        var versions = ["1.44.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipac/README.html