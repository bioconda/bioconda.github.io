:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-apps'
.. highlight: bash

cgat-apps
=========

.. conda:recipe:: cgat-apps
   :replaces_section_title:
   :noindex:

   Computational Genomics Analysis Toolkit

   :homepage: https://cgat-apps.readthedocs.io/en/latest/
   :license: MIT
   :recipe: /`cgat-apps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps/meta.yaml>`_

   


.. conda:package:: cgat-apps

   |downloads_cgat-apps| |docker_cgat-apps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.5-0</code>,  <code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  </span></summary>
      

      ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends alignlib-lite: 
   :depends bedtools: 
   :depends biopython: 
   :depends cgatcore: ``>=0.6.5``
   :depends coreutils: 
   :depends future: 
   :depends grep: 
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends jinja2: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: ``>=0.17.0``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends pyyaml: 
   :depends quicksect: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends six: 
   :depends sortedcontainers: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-wigtobigwig: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-apps

   and update with::

      conda update cgat-apps

   or use the docker container::

      docker pull quay.io/biocontainers/cgat-apps:<tag>

   (see `cgat-apps/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-apps| image:: https://img.shields.io/conda/dn/bioconda/cgat-apps.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-apps
   :alt:   (downloads)
.. |docker_cgat-apps| image:: https://quay.io/repository/biocontainers/cgat-apps/status
   :target: https://quay.io/repository/biocontainers/cgat-apps
.. _`cgat-apps/tags`: https://quay.io/repository/biocontainers/cgat-apps?tab=tags


.. raw:: html

    <script>
        var package = "cgat-apps";
        var versions = ["0.6.5","0.6.4","0.6.4","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-apps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-apps/README.html