:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vardict'
.. highlight: bash

vardict
=======

.. conda:recipe:: vardict
   :replaces_section_title:
   :noindex:

   A sensitive variant caller for both single and paired sample variant calling

   :homepage: https://github.com/AstraZeneca-NGS/VarDict
   :license: MIT / MIT
   :recipe: /`vardict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict/meta.yaml>`_

   


.. conda:package:: vardict

   |downloads_vardict| |docker_vardict|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019.06.04-0</code>,  <code>2018.10.18-1</code>,  <code>2018.10.18-0</code>,  <code>2018.09.21-0</code>,  <code>2018.07.25-0</code>,  <code>2018.07.24-0</code>,  <code>2018.06.21-0</code>,  <code>2018.04.27-1</code>,  <code>2018.04.27-0</code>,  </span></summary>
      

      ``2019.06.04-0``,  ``2018.10.18-1``,  ``2018.10.18-0``,  ``2018.09.21-0``,  ``2018.07.25-0``,  ``2018.07.24-0``,  ``2018.06.21-0``,  ``2018.04.27-1``,  ``2018.04.27-0``,  ``2017.11.23-0``,  ``2017.09.24-0``,  ``2017.04.18-0``,  ``2017.02.16-0``,  ``2017.02.10-0``,  ``2017.02.01-0``,  ``2017.01.27-0``,  ``2016.12.02-0``,  ``2016.02.19-0``,  ``2016.01.27-0``,  ``2015.10.30-0``,  ``1.8.2-2``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on vardict-java: 

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

    pixi global install vardict

to add into an existing workspace instead, run::

    pixi add vardict

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vardict

Alternatively, to install into a new environment, run::

    conda create -n envname vardict

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vardict:<tag>

(see `vardict/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vardict| image:: https://img.shields.io/conda/dn/bioconda/vardict.svg?style=flat
   :target: https://anaconda.org/bioconda/vardict
   :alt:   (downloads)
.. |docker_vardict| image:: https://quay.io/repository/biocontainers/vardict/status
   :target: https://quay.io/repository/biocontainers/vardict
.. _`vardict/tags`: https://quay.io/repository/biocontainers/vardict?tab=tags


.. raw:: html

   <script>
      var package = "vardict";
      var versions = ["2019.06.04","2018.10.18","2018.10.18","2018.09.21","2018.07.25"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vardict"></div>
   <div style="width: 100%" id="platform_plot_vardict"></div>
   <div style="width: 100%" id="cdf_plot_vardict"></div>



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
         
            // Build cdf plot for vardict
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardict/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vardict', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vardict
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardict/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vardict', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vardict
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardict/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vardict', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict/README.html