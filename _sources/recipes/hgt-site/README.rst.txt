:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'hgt-site'
.. highlight: bash

hgt-site
========

.. conda:recipe:: hgt-site
   :replaces_section_title:
   :noindex:

   Find where foreign DNA has inserted into a host genome\, testing each candidate site against chance chimeras.

   :homepage: https://github.com/iraajgangavaram/hgt-site
   :documentation: https://iraajgangavaram.github.io/hgt-site/
   
   :license: MIT / MIT
   :recipe: /`hgt-site <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgt-site>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgt-site/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.23842712`, biotools: :biotools:`hgt-site`

   hgt\-site calls candidate horizontal gene transfer and integration sites from paired\-end reads
   aligned to a host genome\, together with Kraken2 classifications of the reads that did not
   align. Most foreign reads in a host sample come from contamination or from chimeric fragments
   formed during library preparation\, so each candidate position is tested against the number of
   pairs chance alone would place there\, given how common that taxon is across the sample. Reads
   that cross the junction give the insertion point to the base pair.

   Output is a table of every candidate site with the reason each one failed\, plus optional BED\,
   VCF and MultiQC files. With a Kraken2 database to hand\, \"hgt\-site run\" goes from a host
   alignment to called sites in one command.



.. conda:package:: hgt-site

   |downloads_hgt-site| |docker_hgt-site|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends on pysam: ``>=0.21``
   :depends on python: ``>=3.10``

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

    pixi global install hgt-site

to add into an existing workspace instead, run::

    pixi add hgt-site

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hgt-site

Alternatively, to install into a new environment, run::

    conda create -n envname hgt-site

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hgt-site:<tag>

(see `hgt-site/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hgt-site| image:: https://img.shields.io/conda/dn/bioconda/hgt-site.svg?style=flat
   :target: https://anaconda.org/bioconda/hgt-site
   :alt:   (downloads)
.. |docker_hgt-site| image:: https://quay.io/repository/biocontainers/hgt-site/status
   :target: https://quay.io/repository/biocontainers/hgt-site
.. _`hgt-site/tags`: https://quay.io/repository/biocontainers/hgt-site?tab=tags


.. raw:: html

   <script>
      var package = "hgt-site";
      var versions = ["0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hgt-site"></div>
   <div style="width: 100%" id="platform_plot_hgt-site"></div>
   <div style="width: 100%" id="cdf_plot_hgt-site"></div>



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
         
            // Build cdf plot for hgt-site
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgt-site/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hgt-site', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hgt-site
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgt-site/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hgt-site', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hgt-site
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgt-site/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hgt-site', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgt-site/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgt-site/README.html