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
   :documentation: https://hicexplorer.readthedocs.org/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicexplorer/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky504`, doi: :doi:`10.1093/nar/gkaa220`, doi: :doi:`10.1093/gigascience/giac061`, usegalaxy-eu: :usegalaxy-eu:`hicexplorer_hicplotviewpoint`, biotools: :biotools:`hicexplorer`

   


.. conda:package:: hicexplorer

   |downloads_hicexplorer| |docker_hicexplorer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.6-0</code>,  <code>3.7.5-0</code>,  <code>3.7.4-0</code>,  <code>3.7.3-1</code>,  <code>3.7.3-0</code>,  <code>3.7.2-1</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7-0</code>,  </span></summary>
      

      ``3.7.6-0``,  ``3.7.5-0``,  ``3.7.4-0``,  ``3.7.3-1``,  ``3.7.3-0``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5-0``,  ``3.4.3-1``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-1``,  ``2.2-0``,  ``2.2beta-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.1alpha1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.8.1-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1a-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on cleanlab: ``>=2.5``
   :depends on cooler: ``>=0.9.3``
   :depends on fit_nbinom: ``>=1.2``
   :depends on future: 
   :depends on hic2cool: ``>=0.8.3``
   :depends on hicmatrix: ``>=17``
   :depends on hyperopt: ``>=0.2.7``
   :depends on imbalanced-learn: ``>=0.11``
   :depends on intervaltree: 
   :depends on ipykernel: ``>=6.25.2``
   :depends on jinja2: 
   :depends on krbalancing: ``>=0.0.5``
   :depends on matplotlib-base: ``>=3.6``
   :depends on numpy: ``>=1.19``
   :depends on pandas: ``>=2.0``
   :depends on psutil: 
   :depends on pybedtools: ``>=0.9``
   :depends on pybigwig: 
   :depends on pygenometracks: ``>=3.8``
   :depends on pysam: 
   :depends on pytables: 
   :depends on python: ``>=3.8``
   :depends on python-graphviz: ``>=0.20``
   :depends on scikit-learn: ``>=1.3,<1.4``
   :depends on scipy: ``>=1.10``
   :depends on tqdm: ``>=4.66``
   :depends on unidecode: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install hicexplorer

to add into an existing workspace instead, run::

    pixi add hicexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hicexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname hicexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hicexplorer:<tag>

(see `hicexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hicexplorer| image:: https://img.shields.io/conda/dn/bioconda/hicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/hicexplorer
   :alt:   (downloads)
.. |docker_hicexplorer| image:: https://quay.io/repository/biocontainers/hicexplorer/status
   :target: https://quay.io/repository/biocontainers/hicexplorer
.. _`hicexplorer/tags`: https://quay.io/repository/biocontainers/hicexplorer?tab=tags


.. raw:: html

    <script>
        var package = "hicexplorer";
        var versions = ["3.7.6","3.7.5","3.7.4","3.7.3","3.7.3"];
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