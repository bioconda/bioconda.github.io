:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igdiscover'
.. highlight: bash

igdiscover
==========

.. conda:recipe:: igdiscover
   :replaces_section_title:
   :noindex:

   Analyze antibody repertoires and discover new V genes

   :homepage: https://igdiscover.se/
   :license: MIT
   :recipe: /`igdiscover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover/meta.yaml>`_
   :links: biotools: :biotools:`igdiscover`, doi: :doi:`10.1038/ncomms13642`

   


.. conda:package:: igdiscover

   |downloads_igdiscover| |docker_igdiscover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.1-2</code>,  <code>0.15.1-1</code>,  <code>0.15.1-0</code>,  <code>0.14-0</code>,  <code>0.13-0</code>,  <code>0.12.3-1</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  </span></summary>
      

      ``0.15.1-2``,  ``0.15.1-1``,  ``0.15.1-0``,  ``0.14-0``,  ``0.13-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12-0``,  ``0.11-0``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.9-1``,  ``0.9-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.5-1``,  ``0.4-1``,  ``0.3-1``

      
      .. raw:: html

         </details>
      

   
   :depends on cutadapt: ``>=3.5``
   :depends on dnaio: ``>=0.7.1``
   :depends on flash: ``1.2.*``
   :depends on igblast: ``1.17.*``
   :depends on matplotlib-base: ``>=3.1.0``
   :depends on muscle: ``3.8.*``
   :depends on numpy: ``>=1.17.5``
   :depends on pandas: ``>=1.0``
   :depends on pear: ``0.9.6.*``
   :depends on python: ``>=3.6``
   :depends on ruamel.yaml: ``0.16.*``
   :depends on scipy: ``>=1.4.1``
   :depends on seaborn-base: ``>=0.11.*``
   :depends on snakemake-minimal: ``>=5.9``
   :depends on tinyalign: ``>=0.2``
   :depends on xopen: ``>=1.2.0``

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

    pixi global install igdiscover

to add into an existing workspace instead, run::

    pixi add igdiscover

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igdiscover

Alternatively, to install into a new environment, run::

    conda create -n envname igdiscover

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igdiscover:<tag>

(see `igdiscover/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igdiscover| image:: https://img.shields.io/conda/dn/bioconda/igdiscover.svg?style=flat
   :target: https://anaconda.org/bioconda/igdiscover
   :alt:   (downloads)
.. |docker_igdiscover| image:: https://quay.io/repository/biocontainers/igdiscover/status
   :target: https://quay.io/repository/biocontainers/igdiscover
.. _`igdiscover/tags`: https://quay.io/repository/biocontainers/igdiscover?tab=tags


.. raw:: html

   <script>
      var package = "igdiscover";
      var versions = ["0.15.1","0.15.1","0.15.1","0.14","0.13"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_igdiscover"></div>
   <div style="width: 100%" id="platform_plot_igdiscover"></div>
   <div style="width: 100%" id="cdf_plot_igdiscover"></div>



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
         
            // Build cdf plot for igdiscover
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/igdiscover/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_igdiscover', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for igdiscover
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/igdiscover/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_igdiscover', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for igdiscover
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/igdiscover/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_igdiscover', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdiscover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdiscover/README.html