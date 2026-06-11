:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svanna'
.. highlight: bash

svanna
======

.. conda:recipe:: svanna
   :replaces_section_title:
   :noindex:

   Efficient and accurate pathogenicity prediction for coding and regulatory structural variants in long\-read genome sequencing

   :homepage: https://github.com/monarch-initiative/SvAnna
   :documentation: https://svanna.readthedocs.io
   
   :license: OTHER / LicenseRef-Jackson-Laboratory-NonCommercial
   :recipe: /`svanna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanna/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-022-01046-6`, biotools: :biotools:`svanna`

   SvAnna is a tool for prioritizing structural variants \(SVs\) based on their
   predicted pathogenicity. It integrates information from coding and non\-coding
   genomic annotations\, phenotype data \(HPO terms\)\, and population frequency
   databases to rank SVs by clinical relevance.



.. conda:package:: svanna

   |downloads_svanna| |docker_svanna|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.4-0``

      

   
   :depends on openjdk: ``>=17``

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

    pixi global install svanna

to add into an existing workspace instead, run::

    pixi add svanna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svanna

Alternatively, to install into a new environment, run::

    conda create -n envname svanna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svanna:<tag>

(see `svanna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svanna| image:: https://img.shields.io/conda/dn/bioconda/svanna.svg?style=flat
   :target: https://anaconda.org/bioconda/svanna
   :alt:   (downloads)
.. |docker_svanna| image:: https://quay.io/repository/biocontainers/svanna/status
   :target: https://quay.io/repository/biocontainers/svanna
.. _`svanna/tags`: https://quay.io/repository/biocontainers/svanna?tab=tags


.. raw:: html

   <script>
      var package = "svanna";
      var versions = ["1.2.0","1.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_svanna"></div>
   <div style="width: 100%" id="platform_plot_svanna"></div>
   <div style="width: 100%" id="cdf_plot_svanna"></div>



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
         
            // Build cdf plot for svanna
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/svanna/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_svanna', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for svanna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/svanna/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_svanna', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for svanna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/svanna/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_svanna', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
SvAnna is licensed for non\-commercial use only \(The Jackson Laboratory\). Commercial use requires a separate license from contracts\@jax.org. A wrapper script at \$PREFIX\/bin\/svanna\-cli launches the JAR via java.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svanna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svanna/README.html