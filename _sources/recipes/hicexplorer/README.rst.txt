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
   :links: doi: :doi:`10.1093/nar/gky504`, doi: :doi:`10.1093/nar/gkaa220`, usegalaxy-eu: :usegalaxy-eu:`hicexplorer_hicplotviewpoint`

   


.. conda:package:: hicexplorer

   |downloads_hicexplorer| |docker_hicexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.2-1</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7-0</code>,  <code>3.6-0</code>,  <code>3.5.3-0</code>,  <code>3.5.2-0</code>,  <code>3.5.1-0</code>,  <code>3.5-0</code>,  </span></summary>
      

      ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5-0``,  ``3.4.3-1``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-1``,  ``2.2-0``,  ``2.2beta-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.1alpha1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.8.1-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1a-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cleanlab: ``>=0.1``
   :depends cooler: ``>=0.8.10``
   :depends fit_nbinom: ``>=1.1``
   :depends future: 
   :depends hic2cool: ``>=0.8.3``
   :depends hicmatrix: ``>=15``
   :depends hyperopt: ``>=0.2.4``
   :depends imbalanced-learn: ``>=0.7.*``
   :depends intervaltree: 
   :depends ipykernel: ``>=5.3.0``
   :depends jinja2: 
   :depends krbalancing: ``>=0.0.5``
   :depends matplotlib-base: ``>=3.1.*``
   :depends numpy: ``>=1.19``
   :depends pandas: ``>=1.1.*``
   :depends psutil: 
   :depends pybedtools: ``>=0.8``
   :depends pybigwig: 
   :depends pygenometracks: ``>=3.5``
   :depends pysam: 
   :depends pytables: 
   :depends python: ``>=3.6``
   :depends python-graphviz: ``>=0.14``
   :depends scikit-learn: ``>=0.23.2``
   :depends scipy: ``>=1.5``
   :depends tqdm: ``>=4.50``
   :depends unidecode: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hicexplorer

   and update with::

      mamba update hicexplorer

  To create a new environment, run::

      mamba create --name myenvname hicexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicexplorer:<tag>

   (see `hicexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_hicexplorer| image:: https://img.shields.io/conda/dn/bioconda/hicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/hicexplorer
   :alt:   (downloads)
.. |docker_hicexplorer| image:: https://quay.io/repository/biocontainers/hicexplorer/status
   :target: https://quay.io/repository/biocontainers/hicexplorer
.. _`hicexplorer/tags`: https://quay.io/repository/biocontainers/hicexplorer?tab=tags


.. raw:: html

    <script>
        var package = "hicexplorer";
        var versions = ["3.7.2","3.7.2","3.7.1","3.7","3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicexplorer/README.html