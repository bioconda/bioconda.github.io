:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseq'
.. highlight: bash

bioconductor-chipseq
====================

.. conda:recipe:: bioconductor-chipseq
   :replaces_section_title:
   :noindex:

   chipseq\: A package for analyzing chipseq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/chipseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseq/meta.yaml>`_
   :links: biotools: :biotools:`chipseq`, doi: :doi:`10.1038/nmeth.3252`

   Tools for helping process short read data for chipseq experiments


.. conda:package:: bioconductor-chipseq

   |downloads_bioconductor-chipseq| |docker_bioconductor-chipseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseq

   and update with::

      conda update bioconductor-chipseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseq:<tag>

   (see `bioconductor-chipseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseq
   :alt:   (downloads)
.. |docker_bioconductor-chipseq| image:: https://quay.io/repository/biocontainers/bioconductor-chipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseq
.. _`bioconductor-chipseq/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipseq";
        var versions = ["1.48.0","1.44.0","1.44.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseq/README.html