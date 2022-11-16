:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genelendatabase'
.. highlight: bash

bioconductor-genelendatabase
============================

.. conda:recipe:: bioconductor-genelendatabase
   :replaces_section_title:
   :noindex:

   Lengths of mRNA transcripts for a number of genomes

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/geneLenDataBase.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-genelendatabase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase/meta.yaml>`_

   Length of mRNA transcripts for a number of genomes and gene ID formats\, largely based on UCSC table browser


.. conda:package:: bioconductor-genelendatabase

   |downloads_bioconductor-genelendatabase| |docker_bioconductor-genelendatabase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genelendatabase

   and update with::

      conda update bioconductor-genelendatabase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genelendatabase:<tag>

   (see `bioconductor-genelendatabase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genelendatabase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genelendatabase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genelendatabase
   :alt:   (downloads)
.. |docker_bioconductor-genelendatabase| image:: https://quay.io/repository/biocontainers/bioconductor-genelendatabase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genelendatabase
.. _`bioconductor-genelendatabase/tags`: https://quay.io/repository/biocontainers/bioconductor-genelendatabase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genelendatabase";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html