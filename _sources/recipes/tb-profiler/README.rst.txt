:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb-profiler'
.. highlight: bash

tb-profiler
===========

.. conda:recipe:: tb-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for Mycobacterium tuberculosis to detect drug resistance and lineage from sequencing data

   :homepage: https://github.com/jodyphelan/TBProfiler
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tb-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-019-0650-x`

   


.. conda:package:: tb-profiler

   |downloads_tb-profiler| |docker_tb-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.6.6-0</code>,  <code>6.6.5-1</code>,  <code>6.6.5-0</code>,  <code>6.6.4-0</code>,  <code>6.6.3-0</code>,  <code>6.6.2-0</code>,  <code>6.6.1-0</code>,  <code>6.6.0-0</code>,  <code>6.5.0-0</code>,  </span></summary>
      

      ``6.6.6-0``,  ``6.6.5-1``,  ``6.6.5-0``,  ``6.6.4-0``,  ``6.6.3-0``,  ``6.6.2-0``,  ``6.6.1-0``,  ``6.6.0-0``,  ``6.5.0-0``,  ``6.4.1-1``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.0-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``4.0.2-1``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.8.14-0``,  ``2.8.13-0``,  ``2.8.12-2``,  ``2.8.12-1``,  ``2.8.12-0``,  ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.4-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6-0``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on docxtpl: 
   :depends on filelock: 
   :depends on git: 
   :depends on jinja2: 
   :depends on joblib: 
   :depends on pathogen-profiler: ``5.1.0.*``
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on rich-argparse: 
   :depends on tqdm: 

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

    pixi global install tb-profiler

to add into an existing workspace instead, run::

    pixi add tb-profiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tb-profiler

Alternatively, to install into a new environment, run::

    conda create -n envname tb-profiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tb-profiler:<tag>

(see `tb-profiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tb-profiler| image:: https://img.shields.io/conda/dn/bioconda/tb-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/tb-profiler
   :alt:   (downloads)
.. |docker_tb-profiler| image:: https://quay.io/repository/biocontainers/tb-profiler/status
   :target: https://quay.io/repository/biocontainers/tb-profiler
.. _`tb-profiler/tags`: https://quay.io/repository/biocontainers/tb-profiler?tab=tags


.. raw:: html

    <script>
        var package = "tb-profiler";
        var versions = ["6.6.6","6.6.5","6.6.5","6.6.4","6.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb-profiler/README.html