:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifdb'
.. highlight: bash

bioconductor-motifdb
====================

.. conda:recipe:: bioconductor-motifdb
   :replaces_section_title:
   :noindex:

   An Annotated Collection of Protein\-DNA Binding Sequence Motifs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MotifDb.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-motifdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifdb/meta.yaml>`_
   :links: biotools: :biotools:`motifdb`, doi: :doi:`10.1038/nmeth.3252`

   More than 9900 annotated position frequency matrices from 14 public sources\, for multiple organisms.


.. conda:package:: bioconductor-motifdb

   |downloads_bioconductor-motifdb| |docker_bioconductor-motifdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-splitstackshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifdb

   and update with::

      conda update bioconductor-motifdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifdb:<tag>

   (see `bioconductor-motifdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifdb
   :alt:   (downloads)
.. |docker_bioconductor-motifdb| image:: https://quay.io/repository/biocontainers/bioconductor-motifdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifdb
.. _`bioconductor-motifdb/tags`: https://quay.io/repository/biocontainers/bioconductor-motifdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifdb";
        var versions = ["1.42.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifdb/README.html