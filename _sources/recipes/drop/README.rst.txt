:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drop'
.. highlight: bash

drop
====

.. conda:recipe:: drop
   :replaces_section_title:
   :noindex:

   Detection of RNA Outlier Pipeline

   :homepage: https://github.com/gagneurlab/drop
   :documentation: https://gagneurlab-drop.readthedocs.io/en/latest/
   
   :license: OTHER / MIT
   :recipe: /`drop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drop/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41596-020-00462-5`

   


.. conda:package:: drop

   |downloads_drop| |docker_drop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: 
   :depends on bcftools: ``>=1.9``
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-fraser: ``>=2.4.6``
   :depends on bioconductor-genomicscores: 
   :depends on bioconductor-outrider: ``>=1.26.3``
   :depends on bioconductor-variantannotation: 
   :depends on click: ``>=7.0``
   :depends on click-log: 
   :depends on gatk4: ``>=4.0.4``
   :depends on graphviz: 
   :depends on htslib: 
   :depends on pandas: ``>=2.2``
   :depends on pandoc: 
   :depends on python: ``>=3.6``
   :depends on python-dateutil: 
   :depends on r-base: ``>=4.0.0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-rmarkdown: 
   :depends on r-tidyr: 
   :depends on r-tmae: ``>=1.0.5``
   :depends on samtools: ``>=1.9``
   :depends on snakemake-minimal: ``>=5.5.2``
   :depends on star: ``>=2.7``
   :depends on wbuild: ``>=1.8 pyhdfd78af_2``
   :depends on wget: 

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

    pixi global install drop

to add into an existing workspace instead, run::

    pixi add drop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drop

Alternatively, to install into a new environment, run::

    conda create -n envname drop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drop:<tag>

(see `drop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drop| image:: https://img.shields.io/conda/dn/bioconda/drop.svg?style=flat
   :target: https://anaconda.org/bioconda/drop
   :alt:   (downloads)
.. |docker_drop| image:: https://quay.io/repository/biocontainers/drop/status
   :target: https://quay.io/repository/biocontainers/drop
.. _`drop/tags`: https://quay.io/repository/biocontainers/drop?tab=tags


.. raw:: html

    <script>
        var package = "drop";
        var versions = ["1.5.0","1.5.0","1.4.0","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drop/README.html