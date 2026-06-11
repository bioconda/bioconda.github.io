:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2circos'
.. highlight: bash

vcf2circos
==========

.. conda:recipe:: vcf2circos
   :replaces_section_title:
   :noindex:

   A python package based on Plotly to help generate Circos plots from a VCF file or a JSON configuration file.

   :homepage: https://github.com/bioinfo-chru-strasbourg/vcf2circos
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`vcf2circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2circos/meta.yaml>`_

   


.. conda:package:: vcf2circos

   |downloads_vcf2circos| |docker_vcf2circos|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends on colorlover: 
   :depends on colour: 
   :depends on dash: ``0.39.0``
   :depends on dash-daq: ``0.1.0``
   :depends on dash_colorscales: 
   :depends on ipython: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyfiglet: 
   :depends on python: ``>=3.8``
   :depends on python-kaleido: 
   :depends on pyvcf3: 
   :depends on scipy: 
   :depends on tqdm: 
   :depends on webcolors: ``<=1.13``

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

    pixi global install vcf2circos

to add into an existing workspace instead, run::

    pixi add vcf2circos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2circos

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2circos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2circos:<tag>

(see `vcf2circos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2circos| image:: https://img.shields.io/conda/dn/bioconda/vcf2circos.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2circos
   :alt:   (downloads)
.. |docker_vcf2circos| image:: https://quay.io/repository/biocontainers/vcf2circos/status
   :target: https://quay.io/repository/biocontainers/vcf2circos
.. _`vcf2circos/tags`: https://quay.io/repository/biocontainers/vcf2circos?tab=tags


.. raw:: html

   <script>
      var package = "vcf2circos";
      var versions = ["1.2.0","1.1.1","1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vcf2circos"></div>
   <div style="width: 100%" id="platform_plot_vcf2circos"></div>
   <div style="width: 100%" id="cdf_plot_vcf2circos"></div>



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
         
            // Build cdf plot for vcf2circos
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2circos/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vcf2circos', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vcf2circos
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2circos/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vcf2circos', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vcf2circos
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcf2circos/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vcf2circos', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2circos/README.html