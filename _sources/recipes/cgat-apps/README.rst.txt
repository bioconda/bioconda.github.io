:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-apps'
.. highlight: bash

cgat-apps
=========

.. conda:recipe:: cgat-apps
   :replaces_section_title:
   :noindex:

   Computational Genomics Analysis Toolkit.

   :homepage: https://github.com/cgat-developers/cgat-apps
   :documentation: https://cgat-apps.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`cgat-apps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps/meta.yaml>`_

   


.. conda:package:: cgat-apps

   |downloads_cgat-apps| |docker_cgat-apps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.10-1</code>,  <code>0.7.10-0</code>,  <code>0.7.4-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.0-0</code>,  <code>0.6.5-3</code>,  <code>0.6.5-2</code>,  <code>0.6.5-1</code>,  </span></summary>
      

      ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.4-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alignlib-lite: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on cgatcore: 
   :depends on coreutils: 
   :depends on grep: 
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: ``>=0.22.1,<0.23.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: 
   :depends on quicksect: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on sortedcontainers: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-wigtobigwig: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install cgat-apps

to add into an existing workspace instead, run::

    pixi add cgat-apps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgat-apps

Alternatively, to install into a new environment, run::

    conda create -n envname cgat-apps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgat-apps:<tag>

(see `cgat-apps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgat-apps| image:: https://img.shields.io/conda/dn/bioconda/cgat-apps.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-apps
   :alt:   (downloads)
.. |docker_cgat-apps| image:: https://quay.io/repository/biocontainers/cgat-apps/status
   :target: https://quay.io/repository/biocontainers/cgat-apps
.. _`cgat-apps/tags`: https://quay.io/repository/biocontainers/cgat-apps?tab=tags


.. raw:: html

    <script>
        var package = "cgat-apps";
        var versions = ["0.7.10","0.7.10","0.7.4","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-apps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-apps/README.html