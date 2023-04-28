:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracy'
.. highlight: bash

tracy
=====

.. conda:recipe:: tracy
   :replaces_section_title:
   :noindex:

   Basecalling\, alignment\, assembly and deconvolution of Sanger chromatogram trace files

   :homepage: https://github.com/gear-genomics/tracy
   :license: BSD / BSD-3-Clause
   :recipe: /`tracy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracy/meta.yaml>`_

   


.. conda:package:: tracy

   |downloads_tracy| |docker_tracy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.5-1</code>,  <code>0.7.5-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.1-2</code>,  <code>0.6.1-1</code>,  </span></summary>
      

      ``0.7.5-1``,  ``0.7.5-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.9-0``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-1``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.3.10-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``* *_llvm``
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libdeflate: ``>=1.13,<1.14.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=16.0.2``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tracy

   and update with::

      conda update tracy

   or use the docker container::

      docker pull quay.io/biocontainers/tracy:<tag>

   (see `tracy/tags`_ for valid values for ``<tag>``)


.. |downloads_tracy| image:: https://img.shields.io/conda/dn/bioconda/tracy.svg?style=flat
   :target: https://anaconda.org/bioconda/tracy
   :alt:   (downloads)
.. |docker_tracy| image:: https://quay.io/repository/biocontainers/tracy/status
   :target: https://quay.io/repository/biocontainers/tracy
.. _`tracy/tags`: https://quay.io/repository/biocontainers/tracy?tab=tags


.. raw:: html

    <script>
        var package = "tracy";
        var versions = ["0.7.5","0.7.5","0.7.3","0.7.3","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracy/README.html