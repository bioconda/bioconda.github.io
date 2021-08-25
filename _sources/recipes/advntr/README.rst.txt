:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'advntr'
.. highlight: bash

advntr
======

.. conda:recipe:: advntr
   :replaces_section_title:
   :noindex:

   A tool for genotyping Variable Number Tandem Repeats \(VNTR\) from sequence data

   :homepage: https://github.com/mehrdadbakhtiari/adVNTR
   :license: BSD 3-Clause
   :recipe: /`advntr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr/meta.yaml>`_

   


.. conda:package:: advntr

   |downloads_advntr| |docker_advntr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  </span></summary>
      

      ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cython: 
   :depends htslib: ``1.9.*``
   :depends joblib: 
   :depends keras: ``2.2.4.*``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends matplotlib-base: 
   :depends muscle: 
   :depends networkx: ``1.11.*``
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pysam: ``0.15.1.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scikit-learn: 
   :depends scipy: ``>=1.2.1,<2.0a0``
   :depends tensorflow: ``1.13.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install advntr

   and update with::

      conda update advntr

   or use the docker container::

      docker pull quay.io/biocontainers/advntr:<tag>

   (see `advntr/tags`_ for valid values for ``<tag>``)


.. |downloads_advntr| image:: https://img.shields.io/conda/dn/bioconda/advntr.svg?style=flat
   :target: https://anaconda.org/bioconda/advntr
   :alt:   (downloads)
.. |docker_advntr| image:: https://quay.io/repository/biocontainers/advntr/status
   :target: https://quay.io/repository/biocontainers/advntr
.. _`advntr/tags`: https://quay.io/repository/biocontainers/advntr?tab=tags


.. raw:: html

    <script>
        var package = "advntr";
        var versions = ["1.4.1","1.4.1","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/advntr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/advntr/README.html