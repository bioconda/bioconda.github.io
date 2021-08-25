:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acme'
.. highlight: bash

bioconductor-acme
=================

.. conda:recipe:: bioconductor-acme
   :replaces_section_title:
   :noindex:

   Algorithms for Calculating Microarray Enrichment \(ACME\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ACME.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-acme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acme/meta.yaml>`_
   :links: biotools: :biotools:`acme`

   ACME \(Algorithms for Calculating Microarray Enrichment\) is a set of tools for analysing tiling array ChIP\/chip\, DNAse hypersensitivity\, or other experiments that result in regions of the genome showing \"enrichment\".  It does not rely on a specific array technology \(although the array should be a \"tiling\" array\)\, is very general \(can be applied in experiments resulting in regions of enrichment\)\, and is very insensitive to array noise or normalization methods.  It is also very fast and can be applied on whole\-genome tiling array experiments quite easily with enough memory.


.. conda:package:: bioconductor-acme

   |downloads_bioconductor-acme| |docker_bioconductor-acme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-acme

   and update with::

      conda update bioconductor-acme

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-acme:<tag>

   (see `bioconductor-acme/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-acme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acme.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acme
   :alt:   (downloads)
.. |docker_bioconductor-acme| image:: https://quay.io/repository/biocontainers/bioconductor-acme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acme
.. _`bioconductor-acme/tags`: https://quay.io/repository/biocontainers/bioconductor-acme?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-acme";
        var versions = ["2.48.0","2.46.0","2.46.0","2.44.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acme/README.html