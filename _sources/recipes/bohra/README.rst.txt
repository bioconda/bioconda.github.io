:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bohra'
.. highlight: bash

bohra
=====

.. conda:recipe:: bohra
   :replaces_section_title:
   :noindex:

   Pipeline for analysing Illumina data for microbiological public health.

   :homepage: https://github.com/kristyhoran/bohra
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`bohra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra/meta.yaml>`_

   


.. conda:package:: bohra

   |downloads_bohra| |docker_bohra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.12-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-1</code>,  <code>1.2.10-0</code>,  <code>1.2.9-0</code>,  <code>1.2.6-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.20-1``,  ``1.0.20-0``,  ``1.0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends abricate: ``>=0.9.9``
   :depends abritamr: 
   :depends biopython: ``>=1.70``
   :depends iqtree: 
   :depends jinja2: 
   :depends kraken2: 
   :depends mash: 
   :depends mlst: ``>=2.19``
   :depends numpy: ``>=1.18.1``
   :depends packaging: 
   :depends pandas: ``>=1.0``
   :depends prokka: ``>=1.14.6``
   :depends psutil: 
   :depends pytest: 
   :depends pytest-runner: 
   :depends python: ``>=3.7``
   :depends roary: 
   :depends seqtk: 
   :depends sh: 
   :depends shovill: ``>=1.0.9``
   :depends snakemake: ``>=5.10``
   :depends snippy: ``4.4.5``
   :depends snp-dists: ``0.6.3``
   :depends svgwrite: 
   :depends toml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bohra

   and update with::

      conda update bohra

   or use the docker container::

      docker pull quay.io/biocontainers/bohra:<tag>

   (see `bohra/tags`_ for valid values for ``<tag>``)


.. |downloads_bohra| image:: https://img.shields.io/conda/dn/bioconda/bohra.svg?style=flat
   :target: https://anaconda.org/bioconda/bohra
   :alt:   (downloads)
.. |docker_bohra| image:: https://quay.io/repository/biocontainers/bohra/status
   :target: https://quay.io/repository/biocontainers/bohra
.. _`bohra/tags`: https://quay.io/repository/biocontainers/bohra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bohra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bohra/README.html