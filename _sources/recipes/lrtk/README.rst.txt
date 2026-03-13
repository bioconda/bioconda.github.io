:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrtk'
.. highlight: bash

lrtk
====

.. conda:recipe:: lrtk
   :replaces_section_title:
   :noindex:

   This is a unified and versatile ToolKit for analyzing Linked\-Read sequencing data.

   :homepage: https://github.com/ericcombiolab/LRTK
   :license: MIT
   :recipe: /`lrtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk/meta.yaml>`_

   


.. conda:package:: lrtk

   |downloads_lrtk| |docker_lrtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-0</code>,  <code>1.9-0</code>,  <code>1.8-0</code>,  <code>1.7-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``2.0-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aquila: 
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on fastp: 
   :depends on freebayes: 
   :depends on gatk: 
   :depends on hapcut2: 
   :depends on megahit: 
   :depends on metabat2: 
   :depends on parallel: 
   :depends on picard: 
   :depends on python: 
   :depends on r-ade4: 
   :depends on r-base: 
   :depends on r-clustersim: 
   :depends on r-factoextra: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-proxy: 
   :depends on r-vegan: 
   :depends on tabix: 
   :depends on vcflib: 
   :depends on vcftools: 

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

    pixi global install lrtk

to add into an existing workspace instead, run::

    pixi add lrtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lrtk

Alternatively, to install into a new environment, run::

    conda create -n envname lrtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lrtk:<tag>

(see `lrtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lrtk| image:: https://img.shields.io/conda/dn/bioconda/lrtk.svg?style=flat
   :target: https://anaconda.org/bioconda/lrtk
   :alt:   (downloads)
.. |docker_lrtk| image:: https://quay.io/repository/biocontainers/lrtk/status
   :target: https://quay.io/repository/biocontainers/lrtk
.. _`lrtk/tags`: https://quay.io/repository/biocontainers/lrtk?tab=tags


.. raw:: html

    <script>
        var package = "lrtk";
        var versions = ["2.0","1.9","1.8","1.7","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrtk/README.html