:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-makecdfenv'
.. highlight: bash

bioconductor-makecdfenv
=======================

.. conda:recipe:: bioconductor-makecdfenv
   :replaces_section_title:
   :noindex:

   CDF Environment Maker

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/makecdfenv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-makecdfenv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv/meta.yaml>`_
   :links: biotools: :biotools:`makecdfenv`, doi: :doi:`10.1186/1471-2105-13-56`

   This package has two functions. One reads a Affymetrix chip description file \(CDF\) and creates a hash table environment containing the location\/probe set membership mapping. The other creates a package that automatically loads that environment.


.. conda:package:: bioconductor-makecdfenv

   |downloads_bioconductor-makecdfenv| |docker_bioconductor-makecdfenv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-affyio: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-makecdfenv

   and update with::

      conda update bioconductor-makecdfenv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-makecdfenv:<tag>

   (see `bioconductor-makecdfenv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-makecdfenv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-makecdfenv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-makecdfenv
   :alt:   (downloads)
.. |docker_bioconductor-makecdfenv| image:: https://quay.io/repository/biocontainers/bioconductor-makecdfenv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-makecdfenv
.. _`bioconductor-makecdfenv/tags`: https://quay.io/repository/biocontainers/bioconductor-makecdfenv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-makecdfenv";
        var versions = ["1.70.0","1.70.0","1.70.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html