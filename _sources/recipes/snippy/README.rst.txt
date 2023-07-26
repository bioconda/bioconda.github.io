:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snippy'
.. highlight: bash

snippy
======

.. conda:recipe:: snippy
   :replaces_section_title:
   :noindex:

   Rapid bacterial SNP calling and core genome alignments

   :homepage: https://github.com/tseemann/snippy
   :license: GPL / GPL-2.0
   :recipe: /`snippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy/meta.yaml>`_
   :links: biotools: :biotools:`snippy`, usegalaxy-eu: :usegalaxy-eu:`snippy`

   


.. conda:package:: snippy

   |downloads_snippy| |docker_snippy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.6.0-3</code>,  <code>4.6.0-2</code>,  <code>4.6.0-1</code>,  <code>4.6.0-0</code>,  <code>4.5.1-0</code>,  <code>4.5.0-0</code>,  <code>4.4.5-1</code>,  <code>4.4.5-0</code>,  <code>4.4.3-1</code>,  </span></summary>
      

      ``4.6.0-3``,  ``4.6.0-2``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``,  ``4.4.5-1``,  ``4.4.5-0``,  ``4.4.3-1``,  ``4.4.3-0``,  ``4.4.1-0``,  ``4.4.0-2``,  ``4.4.0-1``,  ``4.4.0-0``,  ``4.3.6-0``,  ``4.3.5-0``,  ``4.3.3-0``,  ``4.2.3-0``,  ``4.1.0-0``,  ``4.0.7-0``,  ``4.0.5-0``,  ``4.0.2-0``,  ``3.2-1``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-1``,  ``3.0-0``,  ``2.9-1``,  ``2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: ``>=0.4``
   :depends bcftools: ``>=1.10``
   :depends bedtools: ``>=2.28.0``
   :depends bwa: ``>=0.7.17``
   :depends freebayes: ``>=1.3.1``
   :depends minimap2: ``>=2.17``
   :depends openjdk: ``>=11``
   :depends parallel: ``>=20170422``
   :depends perl: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends samclip: ``>=0.4``
   :depends samtools: ``>=1.10``
   :depends seqtk: ``>=1.3``
   :depends snp-sites: ``>=2.4``
   :depends snpeff: ``>=4.3,<=5.0``
   :depends vcflib: ``>=1.0.0_rc3,<=1.0.2``
   :depends vt: ``>=0.5772``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snippy

   and update with::

      conda update snippy

   or use the docker container::

      docker pull quay.io/biocontainers/snippy:<tag>

   (see `snippy/tags`_ for valid values for ``<tag>``)


.. |downloads_snippy| image:: https://img.shields.io/conda/dn/bioconda/snippy.svg?style=flat
   :target: https://anaconda.org/bioconda/snippy
   :alt:   (downloads)
.. |docker_snippy| image:: https://quay.io/repository/biocontainers/snippy/status
   :target: https://quay.io/repository/biocontainers/snippy
.. _`snippy/tags`: https://quay.io/repository/biocontainers/snippy?tab=tags


.. raw:: html

    <script>
        var package = "snippy";
        var versions = ["4.6.0","4.6.0","4.6.0","4.6.0","4.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snippy/README.html