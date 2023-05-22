:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regenie'
.. highlight: bash

regenie
=======

.. conda:recipe:: regenie
   :replaces_section_title:
   :noindex:

   Regenie is a C\+\+ program for whole genome regression modelling of large genome\-wide association studies \(GWAS\).

   :homepage: https://rgcgithub.github.io/regenie/
   :documentation: https://rgcgithub.github.io/regenie/options/
   
   :developer docs: https://github.com/rgcgithub/regenie
   :license: MIT
   :recipe: /`regenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie/meta.yaml>`_

   


.. conda:package:: regenie

   |downloads_regenie| |docker_regenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.7-0</code>,  <code>3.2.6-1</code>,  <code>3.2.6-0</code>,  <code>3.2.5.2-0</code>,  <code>3.2.5-0</code>,  <code>3.2.4-0</code>,  <code>3.2.3-0</code>,  <code>3.2.2.4-0</code>,  <code>3.2.2.3-0</code>,  </span></summary>
      

      ``3.2.7-0``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.5.2-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2.4-0``,  ``3.2.2.3-0``,  ``3.2.2.1-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``1.0.6.9-0``,  ``1.0.6.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<3.10.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mkl: ``>=2020.4``
   :depends sqlite: ``>=3.42.0,<4.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :depends zstd: ``>=1.5.2,<1.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install regenie

   and update with::

      conda update regenie

   or use the docker container::

      docker pull quay.io/biocontainers/regenie:<tag>

   (see `regenie/tags`_ for valid values for ``<tag>``)


.. |downloads_regenie| image:: https://img.shields.io/conda/dn/bioconda/regenie.svg?style=flat
   :target: https://anaconda.org/bioconda/regenie
   :alt:   (downloads)
.. |docker_regenie| image:: https://quay.io/repository/biocontainers/regenie/status
   :target: https://quay.io/repository/biocontainers/regenie
.. _`regenie/tags`: https://quay.io/repository/biocontainers/regenie?tab=tags


.. raw:: html

    <script>
        var package = "regenie";
        var versions = ["3.2.7","3.2.6","3.2.6","3.2.5.2","3.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regenie/README.html