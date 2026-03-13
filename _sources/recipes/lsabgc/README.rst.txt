:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsabgc'
.. highlight: bash

lsabgc
======

.. conda:recipe:: lsabgc
   :replaces_section_title:
   :noindex:

   lsaBGC\-Pan \- refined workflow for pan\-BGC\-omic evolutionary investigations.

   :homepage: https://github.com/Kalan-Lab/lsaBGC-Pan
   :documentation: https://github.com/Kalan-Lab/lsaBGC-Pan/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`lsabgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsabgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsabgc/meta.yaml>`_

   


.. conda:package:: lsabgc

   |downloads_lsabgc| |docker_lsabgc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.10-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ggtree: 
   :depends on biopython: 
   :depends on cd-hit: 
   :depends on edlib: 
   :depends on gecco: ``0.9.6.*``
   :depends on gffutils: 
   :depends on intbitset: 
   :depends on joblib: 
   :depends on muscle: ``5.1.*``
   :depends on networkx: 
   :depends on numpy: ``>=2.0.0,<=2.2.6``
   :depends on orthofinder: ``2.5.5.*``
   :depends on pandas: 
   :depends on prodigal: 
   :depends on pyhmmer: ``0.10.15.*``
   :depends on pyrodigal: 
   :depends on pyseer: ``>=1.3``
   :depends on python: ``>=3.10``
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-gggenes: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-phytools: 
   :depends on r-plyr: 
   :depends on scikit-learn: 
   :depends on tar: 
   :depends on xlsxwriter: ``>=3.0.3``
   :depends on zol: ``>=1.6.10``

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

    pixi global install lsabgc

to add into an existing workspace instead, run::

    pixi add lsabgc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lsabgc

Alternatively, to install into a new environment, run::

    conda create -n envname lsabgc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lsabgc:<tag>

(see `lsabgc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lsabgc| image:: https://img.shields.io/conda/dn/bioconda/lsabgc.svg?style=flat
   :target: https://anaconda.org/bioconda/lsabgc
   :alt:   (downloads)
.. |docker_lsabgc| image:: https://quay.io/repository/biocontainers/lsabgc/status
   :target: https://quay.io/repository/biocontainers/lsabgc
.. _`lsabgc/tags`: https://quay.io/repository/biocontainers/lsabgc?tab=tags


.. raw:: html

    <script>
        var package = "lsabgc";
        var versions = ["1.1.10","1.1.9","1.1.8","1.1.7","1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsabgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsabgc/README.html