:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genefilter'
.. highlight: bash

bioconductor-genefilter
=======================

.. conda:recipe:: bioconductor-genefilter
   :replaces_section_title:
   :noindex:

   genefilter\: methods for filtering genes from high\-throughput experiments

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/genefilter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genefilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefilter/meta.yaml>`_
   :links: biotools: :biotools:`genefilter`, doi: :doi:`10.1038/nmeth.3252`

   Some basic functions for filtering genes.


.. conda:package:: bioconductor-genefilter

   |downloads_bioconductor-genefilter| |docker_bioconductor-genefilter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-2</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.1-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  </span></summary>
      

      ``1.76.0-2``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.1-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.1-0``,  ``1.56.0-0``,  ``1.54.2-0``,  ``1.52.1-0``,  ``1.52.0-0``,  ``1.51.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genefilter

   and update with::

      conda update bioconductor-genefilter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genefilter:<tag>

   (see `bioconductor-genefilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genefilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genefilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genefilter
   :alt:   (downloads)
.. |docker_bioconductor-genefilter| image:: https://quay.io/repository/biocontainers/bioconductor-genefilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genefilter
.. _`bioconductor-genefilter/tags`: https://quay.io/repository/biocontainers/bioconductor-genefilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genefilter";
        var versions = ["1.76.0","1.76.0","1.76.0","1.74.0","1.72.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genefilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genefilter/README.html