:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spice'
.. highlight: bash

spice
=====

.. conda:recipe:: spice
   :replaces_section_title:
   :noindex:

   Subclone Probability Inference of Copy\-number Evolution \(SPICE\)

   :homepage: https://github.com/zaccaria-lab/SPICE
   :documentation: https://github.com/zaccaria-lab/SPICE/blob/v0.1.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`spice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spice/meta.yaml>`_

   SPICE is an algorithm that reconstructs hundreds to thousands of equally plausible copy\-number alteration \(CNA\) phylogenies for each tumour\, taking as input clone\-specific CNA profiles inferred from either bulk DNA sequencing data using copy\-number deconvolution methods or from single\-cell DNA sequencing data by clustering cells with similar CNAs. Rather than relying on a single\, error\-prone estimate\, SPICE enumerates multiple equally\-plausible CNA phylogenies to quantify uncertainty for each inferred CNA event.


.. conda:package:: spice

   |downloads_spice| |docker_spice|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on numpy: ``>=1.22.0,<2.0.0``
   :depends on pandas: ``>=2.0.0``
   :depends on pyomo: ``>=6.7.0``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.10.0,<2.0.0``
   :depends on seaborn: ``>=0.13.0``

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

    pixi global install spice

to add into an existing workspace instead, run::

    pixi add spice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spice

Alternatively, to install into a new environment, run::

    conda create -n envname spice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spice:<tag>

(see `spice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spice| image:: https://img.shields.io/conda/dn/bioconda/spice.svg?style=flat
   :target: https://anaconda.org/bioconda/spice
   :alt:   (downloads)
.. |docker_spice| image:: https://quay.io/repository/biocontainers/spice/status
   :target: https://quay.io/repository/biocontainers/spice
.. _`spice/tags`: https://quay.io/repository/biocontainers/spice?tab=tags


.. raw:: html

   <script>
      var package = "spice";
      var versions = ["0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_spice"></div>
   <div style="width: 100%" id="platform_plot_spice"></div>
   <div style="width: 100%" id="cdf_plot_spice"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for spice
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spice/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_spice', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for spice
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spice/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_spice', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for spice
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/spice/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_spice', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spice/README.html