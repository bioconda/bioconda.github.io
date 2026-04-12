:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umi_tools'
.. highlight: bash

umi_tools
=========

.. conda:recipe:: umi_tools
   :replaces_section_title:
   :noindex:

   Tools for dealing with Unique Molecular Identifiers \(UMIs\) \/ Random Molecular Tags \(RMTs\).

   :homepage: https://github.com/CGATOxford/UMI-tools
   :documentation: https://umi-tools.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`umi_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.209601.116`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_count`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_extract`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_group`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_whitelist`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_dedup`

   


.. conda:package:: umi_tools

   |downloads_umi_tools| |docker_umi_tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.6-0</code>,  <code>1.1.5-4</code>,  <code>1.1.5-3</code>,  <code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-2</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.1.6-0``,  ``1.1.5-4``,  ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on future: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.7``
   :depends on pandas: ``>=0.12.0``
   :depends on pybktree: 
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on regex: 
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

    pixi global install umi_tools

to add into an existing workspace instead, run::

    pixi add umi_tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install umi_tools

Alternatively, to install into a new environment, run::

    conda create -n envname umi_tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/umi_tools:<tag>

(see `umi_tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_umi_tools| image:: https://img.shields.io/conda/dn/bioconda/umi_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/umi_tools
   :alt:   (downloads)
.. |docker_umi_tools| image:: https://quay.io/repository/biocontainers/umi_tools/status
   :target: https://quay.io/repository/biocontainers/umi_tools
.. _`umi_tools/tags`: https://quay.io/repository/biocontainers/umi_tools?tab=tags


.. raw:: html

    <script>
        var package = "umi_tools";
        var versions = ["1.1.6","1.1.5","1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi_tools/README.html