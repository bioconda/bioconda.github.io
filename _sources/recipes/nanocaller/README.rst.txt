:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocaller'
.. highlight: bash

nanocaller
==========

.. conda:recipe:: nanocaller
   :replaces_section_title:
   :noindex:

   NanoCaller for accurate detection of SNPs and indels in difficult\-to\-map regions from long\-read sequencing.

   :homepage: https://github.com/WGLab/NanoCaller
   :license: MIT / MIT
   :recipe: /`nanocaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocaller/meta.yaml>`_

   


.. conda:package:: nanocaller

   |downloads_nanocaller| |docker_nanocaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.1.2-1</code>,  </span></summary>
      

      ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends intervaltree: 
   :depends muscle: ``>=3.8,<4``
   :depends numpy: ``>=1.18``
   :depends parasail-python: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends rtg-tools: 
   :depends samtools: ``>=1.10``
   :depends tensorflow: ``>=2.4``
   :depends tqdm: 
   :depends vcflib: 
   :depends whatshap: ``>=1.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocaller

   and update with::

      conda update nanocaller

   or use the docker container::

      docker pull quay.io/biocontainers/nanocaller:<tag>

   (see `nanocaller/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocaller| image:: https://img.shields.io/conda/dn/bioconda/nanocaller.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocaller
   :alt:   (downloads)
.. |docker_nanocaller| image:: https://quay.io/repository/biocontainers/nanocaller/status
   :target: https://quay.io/repository/biocontainers/nanocaller
.. _`nanocaller/tags`: https://quay.io/repository/biocontainers/nanocaller?tab=tags


.. raw:: html

    <script>
        var package = "nanocaller";
        var versions = ["3.4.1","3.4.0","3.3.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocaller/README.html