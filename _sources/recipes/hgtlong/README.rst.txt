:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'hgtlong'
.. highlight: bash

hgtlong
=======

.. conda:recipe:: hgtlong
   :replaces_section_title:
   :noindex:

   Read\-resolved candidate horizontal gene transfer loci from ONT molecules

   :homepage: https://github.com/whchenlab/HGTlong
   :documentation: https://github.com/whchenlab/HGTlong#readme
   
   :license: OTHER / CC-BY-NC-4.0
   :recipe: /`hgtlong <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtlong>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtlong/meta.yaml>`_

   HGTlong extracts molecular evidence from query\-grouped ONT alignments\,
   calls candidate shared loci\, validates supplied fixed blocks\, and generates
   interactive reports. This core package and its synthetic demo require no
   external bioinformatics tools. Real\-data mapping and sequence QC require
   separately installed minimap2 and samtools\; full BLAST discovery and ANI
   orchestration are outside this release. Noncommercial use only under
   CC BY\-NC 4.0. Candidate calls do not establish transfer direction or age.



.. conda:package:: hgtlong

   |downloads_hgtlong| |docker_hgtlong|

   :versions:
      
      

      ``0.1.3rc3-0``

      

   
   :depends on python: ``>=3.9``

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

    pixi global install hgtlong

to add into an existing workspace instead, run::

    pixi add hgtlong

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hgtlong

Alternatively, to install into a new environment, run::

    conda create -n envname hgtlong

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hgtlong:<tag>

(see `hgtlong/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hgtlong| image:: https://img.shields.io/conda/dn/bioconda/hgtlong.svg?style=flat
   :target: https://anaconda.org/bioconda/hgtlong
   :alt:   (downloads)
.. |docker_hgtlong| image:: https://quay.io/repository/biocontainers/hgtlong/status
   :target: https://quay.io/repository/biocontainers/hgtlong
.. _`hgtlong/tags`: https://quay.io/repository/biocontainers/hgtlong?tab=tags


.. raw:: html

   <script>
      var package = "hgtlong";
      var versions = ["0.1.3rc3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_hgtlong"></div>
   <div style="width: 100%" id="platform_plot_hgtlong"></div>
   <div style="width: 100%" id="cdf_plot_hgtlong"></div>



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
         
            // Build cdf plot for hgtlong
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgtlong/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_hgtlong', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for hgtlong
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgtlong/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_hgtlong', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for hgtlong
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/hgtlong/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_hgtlong', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgtlong/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgtlong/README.html