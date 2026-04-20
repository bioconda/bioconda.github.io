:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megalodon'
.. highlight: bash

megalodon
=========

.. conda:recipe:: megalodon
   :replaces_section_title:
   :noindex:

   Nanopore modified base and sequence variant detection.

   :homepage: https://github.com/nanoporetech/megalodon
   :documentation: https://nanoporetech.github.io/megalodon/index.html
   
   :license: OTHER / Oxford Nanopore Technologies PLC. Public License Version 1.0
   :recipe: /`megalodon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon/meta.yaml>`_

   


.. conda:package:: megalodon

   |downloads_megalodon| |docker_megalodon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-4</code>,  <code>2.5.0-2</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.5-0</code>,  </span></summary>
      

      ``2.5.0-4``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.10-0``,  ``2.2.9-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: ``>=2.2.1``
   :depends on libgcc: ``>=13``
   :depends on mappy: ``>=2.16``
   :depends on numpy: ``>=1.19,<3``
   :depends on numpy: ``>=1.9.0,2``
   :depends on ont-fast5-api: ``>=3.2``
   :depends on pysam: ``>=0.15``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.1.0``
   :depends on seaborn-base: 
   :depends on tqdm: ``>=2.17``

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

    pixi global install megalodon

to add into an existing workspace instead, run::

    pixi add megalodon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install megalodon

Alternatively, to install into a new environment, run::

    conda create -n envname megalodon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/megalodon:<tag>

(see `megalodon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_megalodon| image:: https://img.shields.io/conda/dn/bioconda/megalodon.svg?style=flat
   :target: https://anaconda.org/bioconda/megalodon
   :alt:   (downloads)
.. |docker_megalodon| image:: https://quay.io/repository/biocontainers/megalodon/status
   :target: https://quay.io/repository/biocontainers/megalodon
.. _`megalodon/tags`: https://quay.io/repository/biocontainers/megalodon?tab=tags


.. raw:: html

    <script>
        var package = "megalodon";
        var versions = ["2.5.0","2.5.0","2.5.0","2.5.0","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megalodon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megalodon/README.html