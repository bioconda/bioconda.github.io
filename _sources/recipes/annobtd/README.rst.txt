:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'annobtd'
.. highlight: bash

annobtd
=======

.. conda:recipe:: annobtd
   :replaces_section_title:
   :noindex:

   Plastid genome annotation from GenBank guide genomes\, with boundaries settled by lineage conventions

   :homepage: https://github.com/mrmckain/annoBTD
   :documentation: https://github.com/mrmckain/annoBTD#readme
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`annobtd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annobtd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annobtd/meta.yaml>`_

   annoBTD annotates plastid \(chloroplast\) genomes from GenBank guide genomes chosen
   for each target by k\-mer similarity and filtered for annotation consistency\, then
   settles gene boundaries by the lineage\'s conventions mined from every complete
   plastome in GenBank. The reference database \(1.5 GB\) is downloaded separately with
   annobtd\-fetch\-refdb.



.. conda:package:: annobtd

   |downloads_annobtd| |docker_annobtd|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on aragorn: ``1.2.41.*``
   :depends on blast: ``>=2.12``
   :depends on curl: 
   :depends on gzip: 
   :depends on perl: ``>=5.26``
   :depends on tar: 

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

    pixi global install annobtd

to add into an existing workspace instead, run::

    pixi add annobtd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annobtd

Alternatively, to install into a new environment, run::

    conda create -n envname annobtd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annobtd:<tag>

(see `annobtd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annobtd| image:: https://img.shields.io/conda/dn/bioconda/annobtd.svg?style=flat
   :target: https://anaconda.org/bioconda/annobtd
   :alt:   (downloads)
.. |docker_annobtd| image:: https://quay.io/repository/biocontainers/annobtd/status
   :target: https://quay.io/repository/biocontainers/annobtd
.. _`annobtd/tags`: https://quay.io/repository/biocontainers/annobtd?tab=tags


.. raw:: html

   <script>
      var package = "annobtd";
      var versions = ["2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_annobtd"></div>
   <div style="width: 100%" id="platform_plot_annobtd"></div>
   <div style="width: 100%" id="cdf_plot_annobtd"></div>



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
         
            // Build cdf plot for annobtd
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annobtd/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_annobtd', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for annobtd
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annobtd/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_annobtd', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for annobtd
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/annobtd/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_annobtd', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annobtd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annobtd/README.html