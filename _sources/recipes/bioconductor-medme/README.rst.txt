:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medme'
.. highlight: bash

bioconductor-medme
==================

.. conda:recipe:: bioconductor-medme
   :replaces_section_title:
   :noindex:

   Modelling Experimental Data from MeDIP Enrichment

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MEDME.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-medme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medme/meta.yaml>`_
   :links: biotools: :biotools:`medme`, doi: :doi:`10.1101/gr.080721.108`

   MEDME allows the prediction of absolute and relative methylation levels based on measures obtained by MeDIP\-microarray experiments


.. conda:package:: bioconductor-medme

   |downloads_bioconductor-medme| |docker_bioconductor-medme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-drc: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-medme

   and update with::

      conda update bioconductor-medme

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-medme:<tag>

   (see `bioconductor-medme/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-medme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medme.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medme
   :alt:   (downloads)
.. |docker_bioconductor-medme| image:: https://quay.io/repository/biocontainers/bioconductor-medme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medme
.. _`bioconductor-medme/tags`: https://quay.io/repository/biocontainers/bioconductor-medme?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-medme";
        var versions = ["1.54.0","1.54.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medme/README.html