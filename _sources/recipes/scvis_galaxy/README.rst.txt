:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvis_galaxy'
.. highlight: bash

scvis_galaxy
============

.. conda:recipe:: scvis_galaxy
   :replaces_section_title:
   :noindex:

   scvis is a python package for dimension reduction of high\-dimensional biological data\, especially single\-cell RNA\-sequencing \(scRNA\-seq\) data.

   :homepage: https://github.com/shahcompbio/scvis
   :license: Creative Commons Attribution 4.0 International License
   :recipe: /`scvis_galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis_galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis_galaxy/meta.yaml>`_

   


.. conda:package:: scvis_galaxy

   |downloads_scvis_galaxy| |docker_scvis_galaxy|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on matplotlib: ``>=1.5.1``
   :depends on nomkl: 
   :depends on numpy: ``>=1.11.1``
   :depends on pandas: ``>=0.19.1``
   :depends on pip: 
   :depends on python: 
   :depends on pyyaml: ``>=3.11``
   :depends on setuptools: 
   :depends on tensorflow: ``>=1.13``
   :depends on wheel: 

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

    pixi global install scvis_galaxy

to add into an existing workspace instead, run::

    pixi add scvis_galaxy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scvis_galaxy

Alternatively, to install into a new environment, run::

    conda create -n envname scvis_galaxy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scvis_galaxy:<tag>

(see `scvis_galaxy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scvis_galaxy| image:: https://img.shields.io/conda/dn/bioconda/scvis_galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/scvis_galaxy
   :alt:   (downloads)
.. |docker_scvis_galaxy| image:: https://quay.io/repository/biocontainers/scvis_galaxy/status
   :target: https://quay.io/repository/biocontainers/scvis_galaxy
.. _`scvis_galaxy/tags`: https://quay.io/repository/biocontainers/scvis_galaxy?tab=tags


.. raw:: html

   <script>
      var package = "scvis_galaxy";
      var versions = ["0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_scvis_galaxy"></div>
   <div style="width: 100%" id="platform_plot_scvis_galaxy"></div>
   <div style="width: 100%" id="cdf_plot_scvis_galaxy"></div>



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
         
            // Build cdf plot for scvis_galaxy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvis_galaxy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_scvis_galaxy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for scvis_galaxy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvis_galaxy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_scvis_galaxy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for scvis_galaxy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scvis_galaxy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_scvis_galaxy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvis_galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvis_galaxy/README.html