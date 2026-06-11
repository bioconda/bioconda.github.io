:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'logan_blaster'
.. highlight: bash

logan_blaster
=============

.. conda:recipe:: logan_blaster
   :replaces_section_title:
   :noindex:

   Align genomic sequences against Logan contigs or unitigs

   :homepage: https://github.com/pierrepeterlongo/logan_blaster
   :documentation: https://github.com/pierrepeterlongo/logan_blaster/blob/main/README.md
   
   :license: GPL-3.0-only
   :recipe: /`logan_blaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logan_blaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logan_blaster/meta.yaml>`_

   logan\_blaster downloads Logan contigs or unitigs for a list of SRA accessions\,
   recruits sequences sharing k\-mers with a query using back\_to\_sequences\, and
   aligns them against the query with BLAST. It can also process a session ID
   from the Logan search portal \(logan\-search.org\).



.. conda:package:: logan_blaster

   |downloads_logan_blaster| |docker_logan_blaster|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends on back_to_sequences: 
   :depends on blast: 
   :depends on jq: 
   :depends on python: ``>=3.8``
   :depends on wget: 

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

    pixi global install logan_blaster

to add into an existing workspace instead, run::

    pixi add logan_blaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install logan_blaster

Alternatively, to install into a new environment, run::

    conda create -n envname logan_blaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/logan_blaster:<tag>

(see `logan_blaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_logan_blaster| image:: https://img.shields.io/conda/dn/bioconda/logan_blaster.svg?style=flat
   :target: https://anaconda.org/bioconda/logan_blaster
   :alt:   (downloads)
.. |docker_logan_blaster| image:: https://quay.io/repository/biocontainers/logan_blaster/status
   :target: https://quay.io/repository/biocontainers/logan_blaster
.. _`logan_blaster/tags`: https://quay.io/repository/biocontainers/logan_blaster?tab=tags


.. raw:: html

   <script>
      var package = "logan_blaster";
      var versions = ["0.1.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_logan_blaster"></div>
   <div style="width: 100%" id="platform_plot_logan_blaster"></div>
   <div style="width: 100%" id="cdf_plot_logan_blaster"></div>



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
         
            // Build cdf plot for logan_blaster
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/logan_blaster/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_logan_blaster', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for logan_blaster
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/logan_blaster/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_logan_blaster', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for logan_blaster
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/logan_blaster/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_logan_blaster', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logan_blaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logan_blaster/README.html