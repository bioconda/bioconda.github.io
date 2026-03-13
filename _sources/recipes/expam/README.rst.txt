:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expam'
.. highlight: bash

expam
=====

.. conda:recipe:: expam
   :replaces_section_title:
   :noindex:

   Metagenomic profiling using a reference phylogeny

   :homepage: https://github.com/seansolari/expam
   :documentation: https://expam.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`expam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam/meta.yaml>`_

   


.. conda:package:: expam

   |downloads_expam| |docker_expam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0.7-0</code>,  <code>1.4.0.6-0</code>,  <code>1.4.0.5-0</code>,  <code>1.2.2.5-1</code>,  <code>1.2.2.5-0</code>,  <code>1.2.2.4-0</code>,  <code>1.2.2.3-0</code>,  <code>1.2.2.1-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.4.0.7-0``,  ``1.4.0.6-0``,  ``1.4.0.5-0``,  ``1.2.2.5-1``,  ``1.2.2.5-0``,  ``1.2.2.4-0``,  ``1.2.2.3-0``,  ``1.2.2.1-0``,  ``1.2.2-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ete3: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on multiprocess: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.22.0``
   :depends on pandas: 
   :depends on psutil: 
   :depends on pytables: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install expam

to add into an existing workspace instead, run::

    pixi add expam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install expam

Alternatively, to install into a new environment, run::

    conda create -n envname expam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/expam:<tag>

(see `expam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_expam| image:: https://img.shields.io/conda/dn/bioconda/expam.svg?style=flat
   :target: https://anaconda.org/bioconda/expam
   :alt:   (downloads)
.. |docker_expam| image:: https://quay.io/repository/biocontainers/expam/status
   :target: https://quay.io/repository/biocontainers/expam
.. _`expam/tags`: https://quay.io/repository/biocontainers/expam?tab=tags


.. raw:: html

    <script>
        var package = "expam";
        var versions = ["1.4.0.7","1.4.0.6","1.4.0.5","1.2.2.5","1.2.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expam/README.html