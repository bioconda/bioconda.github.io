:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quartpac'
.. highlight: bash

bioconductor-quartpac
=====================

.. conda:recipe:: bioconductor-quartpac
   :replaces_section_title:
   :noindex:

   Identification of mutational clusters in protein quaternary structures.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/QuartPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-quartpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac/meta.yaml>`_
   :links: biotools: :biotools:`quartpac`, doi: :doi:`10.1186/s12859-016-0963-3`

   Identifies clustering of somatic mutations in proteins over the entire quaternary structure.


.. conda:package:: bioconductor-quartpac

   |downloads_bioconductor-quartpac| |docker_bioconductor-quartpac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graphpac: ``>=1.42.0,<1.43.0``
   :depends bioconductor-ipac: ``>=1.44.0,<1.45.0``
   :depends bioconductor-spacepac: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quartpac

   and update with::

      conda update bioconductor-quartpac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quartpac:<tag>

   (see `bioconductor-quartpac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quartpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quartpac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quartpac
   :alt:   (downloads)
.. |docker_bioconductor-quartpac| image:: https://quay.io/repository/biocontainers/bioconductor-quartpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quartpac
.. _`bioconductor-quartpac/tags`: https://quay.io/repository/biocontainers/bioconductor-quartpac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quartpac";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quartpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quartpac/README.html