:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poppunk'
.. highlight: bash

poppunk
=======

.. conda:recipe:: poppunk
   :replaces_section_title:
   :noindex:

   PopPUNK \(POPulation Partitioning Using Nucleotide Kmers\)

   :homepage: https://poppunk.bacpop.org
   :documentation: https://poppunk.bacpop.org/index.html
   
   :developer docs: https://github.com/bacpop/PopPUNK
   :license: APACHE / Apache-2.0
   :recipe: /`poppunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.241455.118`, biotools: :biotools:`poppunk`

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.8-0</code>,  <code>2.7.7-0</code>,  <code>2.7.6-0</code>,  <code>2.7.5-0</code>,  <code>2.7.2-2</code>,  <code>2.7.2-1</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  </span></summary>
      

      ``2.7.8-0``,  ``2.7.7-0``,  ``2.7.6-0``,  ``2.7.5-0``,  ``2.7.2-2``,  ``2.7.2-1``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.7-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on biopython: 
   :depends on dendropy: ``>=4.4.0``
   :depends on graph-tool: ``>=2.35``
   :depends on h5py: 
   :depends on hdbscan: 
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mandrake: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pp-sketchlib: ``>=2.0.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rapidnj: 
   :depends on requests: 
   :depends on scikit-learn: ``>=0.24``
   :depends on scipy: 
   :depends on tqdm: 
   :depends on treeswift: 
   :depends on xorg-libxaw: 
   :depends on xorg-libxcomposite: 
   :depends on xorg-libxcursor: 
   :depends on xorg-libxdamage: 
   :depends on xorg-libxfixes: 
   :depends on xorg-libxi: 
   :depends on xorg-libxinerama: 
   :depends on xorg-libxpm: 
   :depends on xorg-libxrandr: 

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

    pixi global install poppunk

to add into an existing workspace instead, run::

    pixi add poppunk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poppunk

Alternatively, to install into a new environment, run::

    conda create -n envname poppunk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poppunk:<tag>

(see `poppunk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :target: https://anaconda.org/bioconda/poppunk
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk
.. _`poppunk/tags`: https://quay.io/repository/biocontainers/poppunk?tab=tags


.. raw:: html

    <script>
        var package = "poppunk";
        var versions = ["2.7.8","2.7.7","2.7.6","2.7.5","2.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html