:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinamine_y_shaker'
.. highlight: bash

kinamine_y_shaker
=================

.. conda:recipe:: kinamine_y_shaker
   :replaces_section_title:
   :noindex:

   Kinamine is a tool to export all phospho\-peptides that were discovered by a mass spec search program

   :homepage: https://github.com/LaurieParkerLab/KinamineY-shaker
   :license: APACHE / Apache License 2.0
   :recipe: /`kinamine_y_shaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker/meta.yaml>`_
   :links: doi: :doi:`10.1021/ja507164a`

   Kinamine searches for phosphopeptides that were discovered by a mass spec search program \(in this case Peptide Shaker\) and outputs those peptides into a single file.  The peptides are centered on their phosphorylated amino acid.



.. conda:package:: kinamine_y_shaker

   |downloads_kinamine_y_shaker| |docker_kinamine_y_shaker|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install kinamine_y_shaker

to add into an existing workspace instead, run::

    pixi add kinamine_y_shaker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kinamine_y_shaker

Alternatively, to install into a new environment, run::

    conda create -n envname kinamine_y_shaker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kinamine_y_shaker:<tag>

(see `kinamine_y_shaker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kinamine_y_shaker| image:: https://img.shields.io/conda/dn/bioconda/kinamine_y_shaker.svg?style=flat
   :target: https://anaconda.org/bioconda/kinamine_y_shaker
   :alt:   (downloads)
.. |docker_kinamine_y_shaker| image:: https://quay.io/repository/biocontainers/kinamine_y_shaker/status
   :target: https://quay.io/repository/biocontainers/kinamine_y_shaker
.. _`kinamine_y_shaker/tags`: https://quay.io/repository/biocontainers/kinamine_y_shaker?tab=tags


.. raw:: html

   <script>
      var package = "kinamine_y_shaker";
      var versions = ["1.0.0","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_kinamine_y_shaker"></div>
   <div style="width: 100%" id="platform_plot_kinamine_y_shaker"></div>
   <div style="width: 100%" id="cdf_plot_kinamine_y_shaker"></div>



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
         
            // Build cdf plot for kinamine_y_shaker
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kinamine_y_shaker/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_kinamine_y_shaker', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for kinamine_y_shaker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kinamine_y_shaker/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_kinamine_y_shaker', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for kinamine_y_shaker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/kinamine_y_shaker/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_kinamine_y_shaker', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
Kinamine is a Java program originally written by Kevin Murray of UMN and updated by John Blankenhorn also of UMN



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinamine_y_shaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinamine_y_shaker/README.html