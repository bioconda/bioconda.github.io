:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freyja'
.. highlight: bash

freyja
======

.. conda:recipe:: freyja
   :replaces_section_title:
   :noindex:

   Freyja recovers relative lineage abundances from mixed SARS\-CoV\-2 samples and provides functionality to analyze lineage dynamics.

   :homepage: https://github.com/andersen-lab/Freyja
   :documentation: https://andersen-lab.github.io/Freyja
   
   :license: BSD / BSD-2-Clause
   :recipe: /`freyja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freyja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freyja/meta.yaml>`_
   :links: biotools: :biotools:`freyja`, usegalaxy-eu: :usegalaxy-eu:`freyja_demix`, usegalaxy-eu: :usegalaxy-eu:`freyja_variants`, usegalaxy-eu: :usegalaxy-eu:`freyja_boot`, usegalaxy-eu: :usegalaxy-eu:`freyja_aggregate_plot`

   


.. conda:package:: freyja

   |downloads_freyja| |docker_freyja|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.5.3-3</code>,  <code>1.5.3-2</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.3-3``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on click: 
   :depends on cvxpy: 
   :depends on epiweeks: 
   :depends on ivar: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyarrow: ``>=10.0.1``
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on samtools: 
   :depends on seaborn-base: 
   :depends on sphinx: 
   :depends on sphinx-click: 
   :depends on sphinx_rtd_theme: 
   :depends on tqdm: 
   :depends on usher: 

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

    pixi global install freyja

to add into an existing workspace instead, run::

    pixi add freyja

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install freyja

Alternatively, to install into a new environment, run::

    conda create -n envname freyja

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/freyja:<tag>

(see `freyja/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_freyja| image:: https://img.shields.io/conda/dn/bioconda/freyja.svg?style=flat
   :target: https://anaconda.org/bioconda/freyja
   :alt:   (downloads)
.. |docker_freyja| image:: https://quay.io/repository/biocontainers/freyja/status
   :target: https://quay.io/repository/biocontainers/freyja
.. _`freyja/tags`: https://quay.io/repository/biocontainers/freyja?tab=tags


.. raw:: html

    <script>
        var package = "freyja";
        var versions = ["2.0.3","2.0.2","2.0.1","2.0.0","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freyja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freyja/README.html