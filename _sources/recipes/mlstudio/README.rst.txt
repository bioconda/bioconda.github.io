:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlstudio'
.. highlight: bash

mlstudio
========

.. conda:recipe:: mlstudio
   :replaces_section_title:
   :noindex:

   Free\, open\-source MLST\/cgMLST typing with an interactive minimum\-spanning\-tree GUI for Linux.

   :homepage: https://github.com/iowa69/mlstudio
   :license: MIT / MIT
   :recipe: /`mlstudio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlstudio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlstudio/meta.yaml>`_

   MLSTudio is an integrated MLST and cgMLST typing tool for bacterial isolates\,
   bundling scheme management \(PubMLST\, BIGSdb\-Pasteur\, cgMLST.org\, ad\-hoc\)\,
   BLAST\-based allele calling\, AMRFinderPlus integration\, and a local web UI
   with a Cytoscape.js minimum\-spanning\-tree viewer. Aimed at filling the gap
   between calling\-only tools \(chewBBACA\) and visualization\-only tools
   \(GrapeTree\) without a SeqSphere\-style licence cost.



.. conda:package:: mlstudio

   |downloads_mlstudio| |docker_mlstudio|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends on biopython: ``>=1.83``
   :depends on blast: ``>=2.14``
   :depends on fastapi: ``>=0.111``
   :depends on fastp: ``>=0.23``
   :depends on httpx: ``>=0.27``
   :depends on ncbi-amrfinderplus: ``>=3.12``
   :depends on networkx: ``>=3.3``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2.2``
   :depends on platformdirs: ``>=4.2``
   :depends on prodigal: ``>=2.6.3``
   :depends on pyarrow: ``>=16``
   :depends on pydantic: ``>=2.7``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.11``
   :depends on python-multipart: ``>=0.0.9``
   :depends on rich: ``>=13.7``
   :depends on typer: ``>=0.12``
   :depends on uvicorn-standard: ``>=0.30``
   :depends on websockets: ``>=12``

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

    pixi global install mlstudio

to add into an existing workspace instead, run::

    pixi add mlstudio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mlstudio

Alternatively, to install into a new environment, run::

    conda create -n envname mlstudio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mlstudio:<tag>

(see `mlstudio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mlstudio| image:: https://img.shields.io/conda/dn/bioconda/mlstudio.svg?style=flat
   :target: https://anaconda.org/bioconda/mlstudio
   :alt:   (downloads)
.. |docker_mlstudio| image:: https://quay.io/repository/biocontainers/mlstudio/status
   :target: https://quay.io/repository/biocontainers/mlstudio
.. _`mlstudio/tags`: https://quay.io/repository/biocontainers/mlstudio?tab=tags


.. raw:: html

   <script>
      var package = "mlstudio";
      var versions = ["1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mlstudio"></div>
   <div style="width: 100%" id="platform_plot_mlstudio"></div>
   <div style="width: 100%" id="cdf_plot_mlstudio"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for mlstudio
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mlstudio/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mlstudio', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mlstudio
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mlstudio/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mlstudio', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mlstudio
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mlstudio/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mlstudio', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlstudio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlstudio/README.html