:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'control-freec'
.. highlight: bash

control-freec
=============

.. conda:recipe:: control-freec
   :replaces_section_title:
   :noindex:

   Copy number and genotype annotation from whole genome and whole exome
   sequencing data.


   :homepage: https://github.com/BoevaLab/FREEC
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`control-freec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/control-freec/meta.yaml>`_
   :links: biotools: :biotools:`freec`

   


.. conda:package:: control-freec

   |downloads_control-freec| |docker_control-freec|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>11.6-3</code>,  <code>11.6-2</code>,  <code>11.6-1</code>,  <code>11.6-0</code>,  <code>11.6b-3</code>,  <code>11.6b-2</code>,  <code>11.6b-1</code>,  <code>11.6b-0</code>,  <code>11.5-1</code>,  </span></summary>
      

      ``11.6-3``,  ``11.6-2``,  ``11.6-1``,  ``11.6-0``,  ``11.6b-3``,  ``11.6b-2``,  ``11.6b-1``,  ``11.6b-0``,  ``11.5-1``,  ``11.5-0``,  ``11.4-0``,  ``10.6-0``,  ``10.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rtracklayer: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on perl: 
   :depends on r-base: 
   :depends on samtools: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install control-freec

to add into an existing workspace instead, run::

    pixi add control-freec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install control-freec

Alternatively, to install into a new environment, run::

    conda create -n envname control-freec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/control-freec:<tag>

(see `control-freec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_control-freec| image:: https://img.shields.io/conda/dn/bioconda/control-freec.svg?style=flat
   :target: https://anaconda.org/bioconda/control-freec
   :alt:   (downloads)
.. |docker_control-freec| image:: https://quay.io/repository/biocontainers/control-freec/status
   :target: https://quay.io/repository/biocontainers/control-freec
.. _`control-freec/tags`: https://quay.io/repository/biocontainers/control-freec?tab=tags


.. raw:: html

   <script>
      var package = "control-freec";
      var versions = ["11.6","11.6","11.6","11.6","11.6b"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_control-freec"></div>
   <div style="width: 100%" id="platform_plot_control-freec"></div>
   <div style="width: 100%" id="cdf_plot_control-freec"></div>



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
         
            // Build cdf plot for control-freec
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/control-freec/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_control-freec', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for control-freec
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/control-freec/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_control-freec', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for control-freec
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/control-freec/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_control-freec', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
The tool will be available as \`freec\` in the command line.
See the homepage for example config files. Auxiliary scripts
like e.g. freec2bed.pl and freec2circos.pl \(see homepage\) are available in the
command line as well.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/control-freec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/control-freec/README.html