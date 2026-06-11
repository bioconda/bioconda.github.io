:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capcruncher'
.. highlight: bash

capcruncher
===========

.. conda:recipe:: capcruncher
   :replaces_section_title:
   :noindex:

   An end\-to\-end solution for processing Capture\-C\, Tri\-C and Tiled\-C data.

   :homepage: https://github.com/sims-lab/CapCruncher
   :documentation: https://sims-lab.github.io/CapCruncher
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`capcruncher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10629485`

   


.. conda:package:: capcruncher

   |downloads_capcruncher| |docker_capcruncher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.14-1</code>,  <code>0.3.14-0</code>,  <code>0.3.12-0</code>,  <code>0.3.11-0</code>,  <code>0.3.10-0</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  </span></summary>
      

      ``0.3.14-1``,  ``0.3.14-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.1.1a1-0``,  ``0.1.0a2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``<=8.2.0``
   :depends on cookiecutter: ``<=2.1.1``
   :depends on cooler: 
   :depends on duckdb: 
   :depends on h5py: 
   :depends on loguru: ``<=0.7.2``
   :depends on more-itertools: 
   :depends on natsort: 
   :depends on numpy: ``<=1.26.4``
   :depends on pandas: ``<=2.1.2``
   :depends on plotly: ``>5.0.0,<=5.10.0``
   :depends on polars: ``<=1.27.1``
   :depends on protobuf: ``<=6.30.2``
   :depends on pulp: ``<2.8.0``
   :depends on pyarrow: ``>11.0.0,<19.0.1``
   :depends on pybedtools: 
   :depends on pyranges: ``<=0.1.2``
   :depends on pysam: ``>0.15.0,<=0.21.0``
   :depends on python: ``>=3.10``
   :depends on python-xxhash: 
   :depends on pyyaml: ``>=6.0``
   :depends on quarto: 
   :depends on ray: 
   :depends on seaborn-base: 
   :depends on sh: 
   :depends on snakemake-minimal: ``<=7.32.4``
   :depends on snakemake-wrapper-utils: 
   :depends on tqdm: 
   :depends on trackhub: 
   :depends on tracknado: 
   :depends on ujson: 
   :depends on xopen: 

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

    pixi global install capcruncher

to add into an existing workspace instead, run::

    pixi add capcruncher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install capcruncher

Alternatively, to install into a new environment, run::

    conda create -n envname capcruncher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/capcruncher:<tag>

(see `capcruncher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_capcruncher| image:: https://img.shields.io/conda/dn/bioconda/capcruncher.svg?style=flat
   :target: https://anaconda.org/bioconda/capcruncher
   :alt:   (downloads)
.. |docker_capcruncher| image:: https://quay.io/repository/biocontainers/capcruncher/status
   :target: https://quay.io/repository/biocontainers/capcruncher
.. _`capcruncher/tags`: https://quay.io/repository/biocontainers/capcruncher?tab=tags


.. raw:: html

   <script>
      var package = "capcruncher";
      var versions = ["0.3.14","0.3.14","0.3.12","0.3.11","0.3.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_capcruncher"></div>
   <div style="width: 100%" id="platform_plot_capcruncher"></div>
   <div style="width: 100%" id="cdf_plot_capcruncher"></div>



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
         
            // Build cdf plot for capcruncher
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/capcruncher/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_capcruncher', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for capcruncher
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/capcruncher/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_capcruncher', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for capcruncher
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/capcruncher/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_capcruncher', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capcruncher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capcruncher/README.html