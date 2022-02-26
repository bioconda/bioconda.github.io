:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biostrings'
.. highlight: bash

bioconductor-biostrings
=======================

.. conda:recipe:: bioconductor-biostrings
   :replaces_section_title:
   :noindex:

   Efficient manipulation of biological strings

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Biostrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biostrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings/meta.yaml>`_
   :links: biotools: :biotools:`biostrings`, doi: :doi:`10.1038/nmeth.3252`

   Memory efficient string containers\, string matching algorithms\, and other utilities\, for fast manipulation of large biological sequences or sets of sequences.


.. conda:package:: bioconductor-biostrings

   |downloads_bioconductor-biostrings| |docker_bioconductor-biostrings|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-1</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.50.2-0</code>,  </span></summary>
      

      ``2.62.0-1``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.50.2-0``,  ``2.50.1-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.2-0``,  ``2.42.1-0``,  ``2.40.2-0``,  ``2.40.0-0``,  ``2.38.4-0``,  ``2.38.3-0``,  ``2.38.2-0``,  ``2.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-xvector: ``>=0.34.0,<0.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-crayon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biostrings

   and update with::

      conda update bioconductor-biostrings

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biostrings:<tag>

   (see `bioconductor-biostrings/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biostrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biostrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biostrings
   :alt:   (downloads)
.. |docker_bioconductor-biostrings| image:: https://quay.io/repository/biocontainers/bioconductor-biostrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biostrings
.. _`bioconductor-biostrings/tags`: https://quay.io/repository/biocontainers/bioconductor-biostrings?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biostrings";
        var versions = ["2.62.0","2.62.0","2.60.0","2.58.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biostrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biostrings/README.html