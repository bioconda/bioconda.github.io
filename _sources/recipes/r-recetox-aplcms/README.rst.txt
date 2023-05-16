:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-aplcms'
.. highlight: bash

r-recetox-aplcms
================

.. conda:recipe:: r-recetox-aplcms
   :replaces_section_title:
   :noindex:

   apLCMS is a software which generates a feature table from a batch of LC\/MS spectra. A modified fork of the original apLCMS by Tianwei Yu.

   :homepage: https://github.com/RECETOX
   :license: GPL-2.0
   :recipe: /`r-recetox-aplcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btp291`, doi: :doi:`10.1186/1471-2105-11-559`, doi: :doi:`10.1021/pr301053d`, doi: :doi:`10.1093/bioinformatics/btu430`, doi: :doi:`10.1038/s41598-020-70850-0`

   


.. conda:package:: r-recetox-aplcms

   |downloads_r-recetox-aplcms| |docker_r-recetox-aplcms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-0</code>,  <code>0.10.3-2</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-1</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.4-1</code>,  <code>0.9.4-0</code>,  </span></summary>
      

      ``0.11.0-0``,  ``0.10.3-2``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.4-1``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-mzr: 
   :depends r-arrow: ``>=7.0.0,<10.0.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-snow: 
   :depends r-splines2: 
   :depends r-stringi: ``>=1.7.12``
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-recetox-aplcms

   and update with::

      conda update r-recetox-aplcms

   or use the docker container::

      docker pull quay.io/biocontainers/r-recetox-aplcms:<tag>

   (see `r-recetox-aplcms/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-aplcms| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-aplcms.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-aplcms
   :alt:   (downloads)
.. |docker_r-recetox-aplcms| image:: https://quay.io/repository/biocontainers/r-recetox-aplcms/status
   :target: https://quay.io/repository/biocontainers/r-recetox-aplcms
.. _`r-recetox-aplcms/tags`: https://quay.io/repository/biocontainers/r-recetox-aplcms?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-aplcms";
        var versions = ["0.11.0","0.10.3","0.10.3","0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-aplcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-aplcms/README.html