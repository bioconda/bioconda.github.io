:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicexplorer'
.. highlight: bash

hicexplorer
===========

.. conda:recipe:: hicexplorer
   :replaces_section_title:
   :noindex:

   Set of programs to process\, analyze and visualize Hi\-C and capture Hi\-C data

   :homepage: https://github.com/deeptools/HiCExplorer
   :license: GPL3
   :recipe: /`hicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky504`, doi: :doi:`10.1093/nar/gkaa220`

   


.. conda:package:: hicexplorer

   |downloads_hicexplorer| |docker_hicexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.1-0</code>,  <code>3.5-0</code>,  <code>3.4.3-1</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4-0</code>,  <code>3.3.1-0</code>,  </span></summary>
      

      ``3.5.1-0``,  ``3.5-0``,  ``3.4.3-1``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-1``,  ``2.2-0``,  ``2.2beta-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.1alpha1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.8.1-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1a-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cooler: ``>=0.8.5``
   :depends fit_nbinom: ``>=1.1``
   :depends future: 
   :depends hic2cool: ``>=0.8.3``
   :depends hicmatrix: ``>=13``
   :depends hyperopt: ``>=0.2.4``
   :depends intervaltree: 
   :depends ipykernel: ``>=5.3.0``
   :depends jinja2: 
   :depends krbalancing: ``>=0.0.5``
   :depends matplotlib-base: ``>=3.1.*``
   :depends numpy: ``>=1.18``
   :depends pandas: ``>=0.25.*``
   :depends psutil: 
   :depends pybedtools: ``>=0.8``
   :depends pybigwig: 
   :depends pygenometracks: ``>=3.2``
   :depends pysam: 
   :depends pytables: 
   :depends python: ``>=3.5``
   :depends python-graphviz: ``>=0.14``
   :depends scipy: ``>=1.3``
   :depends tqdm: ``>=4.20``
   :depends unidecode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicexplorer

   and update with::

      conda update hicexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/hicexplorer:<tag>

   (see `hicexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_hicexplorer| image:: https://img.shields.io/conda/dn/bioconda/hicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/hicexplorer
   :alt:   (downloads)
.. |docker_hicexplorer| image:: https://quay.io/repository/biocontainers/hicexplorer/status
   :target: https://quay.io/repository/biocontainers/hicexplorer
.. _`hicexplorer/tags`: https://quay.io/repository/biocontainers/hicexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicexplorer/README.html