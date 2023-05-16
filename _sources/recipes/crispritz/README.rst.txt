:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispritz'
.. highlight: bash

crispritz
=========

.. conda:recipe:: crispritz
   :replaces_section_title:
   :noindex:

   CRISPRitz\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/pinellolab/CRISPRitz
   :license: GPL3
   :recipe: /`crispritz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispritz/meta.yaml>`_

   


.. conda:package:: crispritz

   |downloads_crispritz| |docker_crispritz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.6-1</code>,  <code>2.6.6-0</code>,  <code>2.6.5-1</code>,  <code>2.6.5-0</code>,  <code>2.6.4-0</code>,  <code>2.6.3-1</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  </span></summary>
      

      ``2.6.6-1``,  ``2.6.6-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.9-0``,  ``2.5.8-0``,  ``2.5.7-1``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.9-0``,  ``2.4.8-0``,  ``2.4.7-0``,  ``2.4.6-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.8-0``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.3.6-2``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bcftools: 
   :depends bedops: 
   :depends bedtools: 
   :depends biopython: 
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: 
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends more-itertools: 
   :depends numpy: 
   :depends openmp: 
   :depends pandas: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends rename: 
   :depends scikit-learn: ``0.23.2.*``
   :depends scipy: 
   :depends statsmodels: 
   :depends tk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispritz

   and update with::

      conda update crispritz

   or use the docker container::

      docker pull quay.io/biocontainers/crispritz:<tag>

   (see `crispritz/tags`_ for valid values for ``<tag>``)


.. |downloads_crispritz| image:: https://img.shields.io/conda/dn/bioconda/crispritz.svg?style=flat
   :target: https://anaconda.org/bioconda/crispritz
   :alt:   (downloads)
.. |docker_crispritz| image:: https://quay.io/repository/biocontainers/crispritz/status
   :target: https://quay.io/repository/biocontainers/crispritz
.. _`crispritz/tags`: https://quay.io/repository/biocontainers/crispritz?tab=tags


.. raw:: html

    <script>
        var package = "crispritz";
        var versions = ["2.6.6","2.6.6","2.6.5","2.6.5","2.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispritz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispritz/README.html