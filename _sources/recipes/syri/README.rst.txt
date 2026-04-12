:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syri'
.. highlight: bash

syri
====

.. conda:recipe:: syri
   :replaces_section_title:
   :noindex:

   Synteny and rearrangement identifier between whole\-genome assemblies.

   :homepage: https://github.com/schneebergerlab/syri
   :documentation: https://schneebergerlab.github.io/syri
   
   :license: MIT / MIT
   :recipe: /`syri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1911-0`, biotools: :biotools:`SyRI`

   


.. conda:package:: syri

   |downloads_syri| |docker_syri|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.1-1</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.3-2</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6-1</code>,  <code>1.6-0</code>,  <code>1.5.4-0</code>,  </span></summary>
      

      ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5.4-0``,  ``1.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on longestrunsubsequence: 
   :depends on numpy: ``>=1.21,<3``
   :depends on pandas: 
   :depends on psutil: 
   :depends on pulp: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 

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

    pixi global install syri

to add into an existing workspace instead, run::

    pixi add syri

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install syri

Alternatively, to install into a new environment, run::

    conda create -n envname syri

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/syri:<tag>

(see `syri/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_syri| image:: https://img.shields.io/conda/dn/bioconda/syri.svg?style=flat
   :target: https://anaconda.org/bioconda/syri
   :alt:   (downloads)
.. |docker_syri| image:: https://quay.io/repository/biocontainers/syri/status
   :target: https://quay.io/repository/biocontainers/syri
.. _`syri/tags`: https://quay.io/repository/biocontainers/syri?tab=tags


.. raw:: html

    <script>
        var package = "syri";
        var versions = ["1.7.1","1.7.1","1.7.0","1.6.3","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syri/README.html