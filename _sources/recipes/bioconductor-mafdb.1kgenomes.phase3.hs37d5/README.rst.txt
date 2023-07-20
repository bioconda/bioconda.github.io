:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mafdb.1kgenomes.phase3.hs37d5'
.. highlight: bash

bioconductor-mafdb.1kgenomes.phase3.hs37d5
==========================================

.. conda:recipe:: bioconductor-mafdb.1kgenomes.phase3.hs37d5
   :replaces_section_title:
   :noindex:

   Minor allele frequency data from 1000 Genomes Phase 3 for hs37d5

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/MafDb.1Kgenomes.phase3.hs37d5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mafdb.1kgenomes.phase3.hs37d5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/meta.yaml>`_

   Store minor allele frequency data from the Phase 3 of the 1000 Genomes Project for the human genome version hs37d5.


.. conda:package:: bioconductor-mafdb.1kgenomes.phase3.hs37d5

   |downloads_bioconductor-mafdb.1kgenomes.phase3.hs37d5| |docker_bioconductor-mafdb.1kgenomes.phase3.hs37d5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-8</code>,  <code>3.10.0-7</code>,  <code>3.10.0-6</code>,  <code>3.10.0-5</code>,  <code>3.10.0-4</code>,  <code>3.10.0-3</code>,  <code>3.10.0-2</code>,  <code>3.10.0-1</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.10.0-8``,  ``3.10.0-7``,  ``3.10.0-6``,  ``3.10.0-5``,  ``3.10.0-4``,  ``3.10.0-3``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.7.0-2``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicscores: ``>=2.12.0,<2.13.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mafdb.1kgenomes.phase3.hs37d5

   and update with::

      conda update bioconductor-mafdb.1kgenomes.phase3.hs37d5

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5:<tag>

   (see `bioconductor-mafdb.1kgenomes.phase3.hs37d5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mafdb.1kgenomes.phase3.hs37d5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mafdb.1kgenomes.phase3.hs37d5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mafdb.1kgenomes.phase3.hs37d5
   :alt:   (downloads)
.. |docker_bioconductor-mafdb.1kgenomes.phase3.hs37d5| image:: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5
.. _`bioconductor-mafdb.1kgenomes.phase3.hs37d5/tags`: https://quay.io/repository/biocontainers/bioconductor-mafdb.1kgenomes.phase3.hs37d5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mafdb.1kgenomes.phase3.hs37d5";
        var versions = ["3.10.0","3.10.0","3.10.0","3.10.0","3.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mafdb.1kgenomes.phase3.hs37d5/README.html