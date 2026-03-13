:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snapatac2'
.. highlight: bash

snapatac2
=========

.. conda:recipe:: snapatac2
   :replaces_section_title:
   :noindex:

   SnapATAC2\: Single\-cell epigenomics analysis pipeline.

   :homepage: https://github.com/kaizhang/SnapATAC2
   :documentation: https://kzhang.org/SnapATAC2
   
   :license: MIT / MIT
   :recipe: /`snapatac2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapatac2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapatac2/meta.yaml>`_
   :links: biotools: :biotools:`snapatac`, doi: :doi:`10.1038/s41592-023-02139-9`, usegalaxy-eu: :usegalaxy-eu:`snapatac2_preprocessing`, usegalaxy-eu: :usegalaxy-eu:`snapatac2_clustering`, usegalaxy-eu: :usegalaxy-eu:`snapatac2_peaks_and_motif`, usegalaxy-eu: :usegalaxy-eu:`snapatac2_plotting`

   


.. conda:package:: snapatac2

   |downloads_snapatac2| |docker_snapatac2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-2</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.7.1-1</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.4-0</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  </span></summary>
      

      ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on macs3: 
   :depends on multiprocess: 
   :depends on natsort: 
   :depends on numpy: ``>=1.16.0``
   :depends on pandas: ``>=1.0,<2.1.2``
   :depends on plotly: ``>=5.19.0``
   :depends on polars: ``>=1.0``
   :depends on pooch: ``>=1.6.0``
   :depends on pyarrow: 
   :depends on pyfaidx: ``>=0.7.0,<0.8.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: ``>=0.10.3``
   :depends on python-kaleido: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rustworkx: 
   :depends on scikit-learn: ``>=1.0``
   :depends on scipy: ``>=1.4``
   :depends on tqdm: ``>=4.62``
   :depends on typeguard: ``>=4.0``
   :depends on typing_extensions: 

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

    pixi global install snapatac2

to add into an existing workspace instead, run::

    pixi add snapatac2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snapatac2

Alternatively, to install into a new environment, run::

    conda create -n envname snapatac2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snapatac2:<tag>

(see `snapatac2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snapatac2| image:: https://img.shields.io/conda/dn/bioconda/snapatac2.svg?style=flat
   :target: https://anaconda.org/bioconda/snapatac2
   :alt:   (downloads)
.. |docker_snapatac2| image:: https://quay.io/repository/biocontainers/snapatac2/status
   :target: https://quay.io/repository/biocontainers/snapatac2
.. _`snapatac2/tags`: https://quay.io/repository/biocontainers/snapatac2?tab=tags


.. raw:: html

    <script>
        var package = "snapatac2";
        var versions = ["2.8.0","2.8.0","2.8.0","2.7.1","2.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snapatac2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snapatac2/README.html