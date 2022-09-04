:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet-genome'
.. highlight: bash

lorikeet-genome
===============

.. conda:recipe:: lorikeet-genome
   :replaces_section_title:
   :noindex:

   Metagenomic Variant Calling \& Diversity Analysis

   :homepage: https://github.com/rhysnewell/Lorikeet
   :documentation: https://rhysnewell.github.io/Lorikeet/
   
   :license: GPL3
   :recipe: /`lorikeet-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome/meta.yaml>`_

   Lorikeet aims to call variants in metagenomes using local reassembly of haplotypes.


.. conda:package:: lorikeet-genome

   |downloads_lorikeet-genome| |docker_lorikeet-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.7-1</code>,  <code>0.3.7-0</code>,  <code>0.3.6-1</code>,  </span></summary>
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.6-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bwa: ``>=0.7.17``
   :depends dashing: 
   :depends fastani: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.15.1,<1.16.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends ngmlr: 
   :depends numpy: 
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :depends parallel: 
   :depends polars: 
   :depends prodigal: 
   :depends python: ``>=3.9``
   :depends samtools: ``>=1.9``
   :depends scikit-allel: 
   :depends scipy: 
   :depends starcode: 
   :depends svim: 
   :depends vt: 
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lorikeet-genome

   and update with::

      conda update lorikeet-genome

   or use the docker container::

      docker pull quay.io/biocontainers/lorikeet-genome:<tag>

   (see `lorikeet-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_lorikeet-genome| image:: https://img.shields.io/conda/dn/bioconda/lorikeet-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet-genome
   :alt:   (downloads)
.. |docker_lorikeet-genome| image:: https://quay.io/repository/biocontainers/lorikeet-genome/status
   :target: https://quay.io/repository/biocontainers/lorikeet-genome
.. _`lorikeet-genome/tags`: https://quay.io/repository/biocontainers/lorikeet-genome?tab=tags


.. raw:: html

    <script>
        var package = "lorikeet-genome";
        var versions = ["0.7.2","0.7.1","0.7.0","0.6.6","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet-genome/README.html