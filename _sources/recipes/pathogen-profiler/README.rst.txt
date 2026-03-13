:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogen-profiler'
.. highlight: bash

pathogen-profiler
=================

.. conda:recipe:: pathogen-profiler
   :replaces_section_title:
   :noindex:

   Library giving access to classes and functions to create a profiling tool to look for mutations from NGS data.

   :homepage: https://github.com/jodyphelan/pathogen-profiler
   :license: GPL3
   :recipe: /`pathogen-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-profiler/meta.yaml>`_

   


.. conda:package:: pathogen-profiler

   |downloads_pathogen-profiler| |docker_pathogen-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.0-0</code>,  <code>5.0.3-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.8.0-0</code>,  <code>4.7.0-0</code>,  <code>4.6.0-0</code>,  <code>4.5.1-0</code>,  </span></summary>
      

      ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.8.0-0``,  ``4.7.0-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-1``,  ``4.5.0-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.12``
   :depends on bedtools: 
   :depends on bwa: 
   :depends on delly: ``1.3.3.*``
   :depends on dsk: ``>=2.2``
   :depends on filelock: 
   :depends on freebayes: ``1.3.6.*``
   :depends on gatk4: 
   :depends on git: 
   :depends on itol-config: 
   :depends on joblib: ``>=1.3.0``
   :depends on kmc: ``>=3.2.1``
   :depends on lofreq: ``>=2.1.5``
   :depends on minimap2: ``>=2.28``
   :depends on openjdk: ``>=11.0.8``
   :depends on pandas: 
   :depends on parallel: 
   :depends on pilon: ``>=1.24``
   :depends on pydantic: ``>=2.6``
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on rich-argparse: 
   :depends on samclip: 
   :depends on samtools: ``>=1.12``
   :depends on seqkit: 
   :depends on snpeff: ``5.2.*``
   :depends on sourmash: 
   :depends on sylph: 
   :depends on tomli: 
   :depends on tqdm: 
   :depends on trimmomatic: 

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

    pixi global install pathogen-profiler

to add into an existing workspace instead, run::

    pixi add pathogen-profiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathogen-profiler

Alternatively, to install into a new environment, run::

    conda create -n envname pathogen-profiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathogen-profiler:<tag>

(see `pathogen-profiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathogen-profiler| image:: https://img.shields.io/conda/dn/bioconda/pathogen-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogen-profiler
   :alt:   (downloads)
.. |docker_pathogen-profiler| image:: https://quay.io/repository/biocontainers/pathogen-profiler/status
   :target: https://quay.io/repository/biocontainers/pathogen-profiler
.. _`pathogen-profiler/tags`: https://quay.io/repository/biocontainers/pathogen-profiler?tab=tags


.. raw:: html

    <script>
        var package = "pathogen-profiler";
        var versions = ["5.1.0","5.0.3","5.0.2","5.0.1","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogen-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogen-profiler/README.html