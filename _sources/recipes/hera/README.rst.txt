:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hera'
.. highlight: bash

hera
====

.. conda:recipe:: hera
   :replaces_section_title:
   :noindex:

   hera is a bioinformatics tool that helps analyze RNA\-seq data\, providing base\-to\-base alignment BAM files\, transcript abundance estimation\, and fusion gene detection.

   :homepage: https://github.com/bioturing/hera
   :license: MIT
   :recipe: /`hera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hera/meta.yaml>`_

   


.. conda:package:: hera

   |downloads_hera| |docker_hera|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-9</code>,  <code>1.1-8</code>,  <code>1.1-7</code>,  <code>1.1-6</code>,  <code>1.1-5</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  </span></summary>
      

      ``1.1-9``,  ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hdf5: ``>=1.12.1,<1.12.2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: 
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hera

   and update with::

      conda update hera

   or use the docker container::

      docker pull quay.io/biocontainers/hera:<tag>

   (see `hera/tags`_ for valid values for ``<tag>``)


.. |downloads_hera| image:: https://img.shields.io/conda/dn/bioconda/hera.svg?style=flat
   :target: https://anaconda.org/bioconda/hera
   :alt:   (downloads)
.. |docker_hera| image:: https://quay.io/repository/biocontainers/hera/status
   :target: https://quay.io/repository/biocontainers/hera
.. _`hera/tags`: https://quay.io/repository/biocontainers/hera?tab=tags


.. raw:: html

    <script>
        var package = "hera";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hera/README.html