:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs-assembler'
.. highlight: bash

wgs-assembler
=============

.. conda:recipe:: wgs-assembler
   :replaces_section_title:
   :noindex:

   Celera Assembler \(wgs\-assembler\) is a de novo whole\-genome shotgun \(WGS\) DNA sequence assembler

   :homepage: http://wgs-assembler.sourceforge.net/wiki/index.php?title=Main_Page
   :license: MIT
   :recipe: /`wgs-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler/meta.yaml>`_

   


.. conda:package:: wgs-assembler

   |downloads_wgs-assembler| |docker_wgs-assembler|

   :versions:
      
      

      ``8.3-0``

      

   
   :depends on atac: 
   :depends on blasr: 
   :depends on estmapper: 
   :depends on falcon: 
   :depends on jellyfish: 
   :depends on libgcc: 
   :depends on meryl: 
   :depends on pbdagcon: 
   :depends on perl: ``5.22.0*``
   :depends on samtools: 
   :depends on sim4db: 

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

    pixi global install wgs-assembler

to add into an existing workspace instead, run::

    pixi add wgs-assembler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wgs-assembler

Alternatively, to install into a new environment, run::

    conda create -n envname wgs-assembler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wgs-assembler:<tag>

(see `wgs-assembler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wgs-assembler| image:: https://img.shields.io/conda/dn/bioconda/wgs-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/wgs-assembler
   :alt:   (downloads)
.. |docker_wgs-assembler| image:: https://quay.io/repository/biocontainers/wgs-assembler/status
   :target: https://quay.io/repository/biocontainers/wgs-assembler
.. _`wgs-assembler/tags`: https://quay.io/repository/biocontainers/wgs-assembler?tab=tags


.. raw:: html

   <script>
      var package = "wgs-assembler";
      var versions = ["8.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_wgs-assembler"></div>
   <div style="width: 100%" id="platform_plot_wgs-assembler"></div>
   <div style="width: 100%" id="cdf_plot_wgs-assembler"></div>



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
         
            // Build cdf plot for wgs-assembler
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/wgs-assembler/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_wgs-assembler', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for wgs-assembler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/wgs-assembler/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_wgs-assembler', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for wgs-assembler
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/wgs-assembler/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_wgs-assembler', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs-assembler/README.html