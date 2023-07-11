:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microrna'
.. highlight: bash

bioconductor-microrna
=====================

.. conda:recipe:: bioconductor-microrna
   :replaces_section_title:
   :noindex:

   Data and functions for dealing with microRNAs

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/microRNA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-microrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna/meta.yaml>`_
   :links: biotools: :biotools:`microrna`, doi: :doi:`10.1038/nmeth.3252`

   Different data resources for microRNAs and some functions for manipulating them.


.. conda:package:: bioconductor-microrna

   |downloads_bioconductor-microrna| |docker_bioconductor-microrna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microrna

   and update with::

      conda update bioconductor-microrna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microrna:<tag>

   (see `bioconductor-microrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microrna
   :alt:   (downloads)
.. |docker_bioconductor-microrna| image:: https://quay.io/repository/biocontainers/bioconductor-microrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microrna
.. _`bioconductor-microrna/tags`: https://quay.io/repository/biocontainers/bioconductor-microrna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microrna";
        var versions = ["1.58.0","1.56.0","1.56.0","1.52.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microrna/README.html