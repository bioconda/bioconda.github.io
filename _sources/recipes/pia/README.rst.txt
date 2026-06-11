:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pia'
.. highlight: bash

pia
===

.. conda:recipe:: pia
   :replaces_section_title:
   :noindex:

   PIA is a toolbox for MS based protein inference and identification analysis.

   :homepage: https://github.com/medbioinf/pia
   :license: BSD-3-Clause
   :recipe: /`pia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pia/meta.yaml>`_
   :links: biotools: :biotools:`pia`, doi: :doi:`10.1021/acs.jproteome.5b00121`

   PIA allows you to inspect the results of common proteomics spectrum identification
   search engines\, combine them seamlessly and conduct statistical analyses. The main
   focus of PIA lays on the integrated inference algorithms\, i.e. concluding the proteins
   from a set of identified spectra. But it also allows you to inspect your peptide
   spectrum matches\, calculate FDR values across different search engine results and
   visualize the correspondence between PSMs\, peptides and proteins.



.. conda:package:: pia

   |downloads_pia| |docker_pia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.9-0</code>,  <code>1.5.8-0</code>,  <code>1.5.7-0</code>,  <code>1.5.6-0</code>,  <code>1.5.5-2</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-2``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-1``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``21.*``

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

    pixi global install pia

to add into an existing workspace instead, run::

    pixi add pia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pia

Alternatively, to install into a new environment, run::

    conda create -n envname pia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pia:<tag>

(see `pia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pia| image:: https://img.shields.io/conda/dn/bioconda/pia.svg?style=flat
   :target: https://anaconda.org/bioconda/pia
   :alt:   (downloads)
.. |docker_pia| image:: https://quay.io/repository/biocontainers/pia/status
   :target: https://quay.io/repository/biocontainers/pia
.. _`pia/tags`: https://quay.io/repository/biocontainers/pia?tab=tags


.. raw:: html

   <script>
      var package = "pia";
      var versions = ["1.5.9","1.5.8","1.5.7","1.5.6","1.5.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pia"></div>
   <div style="width: 100%" id="platform_plot_pia"></div>
   <div style="width: 100%" id="cdf_plot_pia"></div>



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
         
            // Build cdf plot for pia
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pia/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pia', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pia/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pia', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pia
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pia/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pia', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
PIA is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"pia\" and is on \$PATH by default. By default
\"\-Xms2g \-Xmx4g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"pia \-Xms512m \-Xmx2g\" for a lower memory footprint.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pia/README.html