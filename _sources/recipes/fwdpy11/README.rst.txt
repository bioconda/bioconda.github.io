:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpy11'
.. highlight: bash

fwdpy11
=======

.. conda:recipe:: fwdpy11
   :replaces_section_title:
   :noindex:

   Forward\-time population genetic simulation in Python.

   :homepage: https://github.com/molpopgen/fwdpy11
   :documentation: https://molpopgen.github.io/fwdpy11
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fwdpy11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpy11/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.114.165019`, doi: :doi:`10.1371/journal.pcbi.1006581`

   


.. conda:package:: fwdpy11

   |downloads_fwdpy11| |docker_fwdpy11|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.5-0</code>,  <code>0.24.3-1</code>,  <code>0.24.3-0</code>,  <code>0.24.2-0</code>,  <code>0.24.1-0</code>,  <code>0.24.0-0</code>,  <code>0.23.0-0</code>,  <code>0.22.2-1</code>,  <code>0.22.2-0</code>,  </span></summary>
      

      ``0.24.5-0``,  ``0.24.3-1``,  ``0.24.3-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.2-1``,  ``0.22.2-0``,  ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-2``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.19.10-0``,  ``0.19.9-0``,  ``0.19.7-0``,  ``0.19.6-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.17.1-2``,  ``0.17.1-1``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.2-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3.post3-0``,  ``0.1.3.post1-0``,  ``0.1.3a1-0``,  ``0.1.3a0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.post4-0``,  ``0.1.post2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: 
   :depends on black: 
   :depends on demes: ``>=0.2.2``
   :depends on deprecated: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on intervaltree: 
   :depends on libcxx: ``>=18``
   :depends on numpy: ``<2.0``
   :depends on numpy: ``>=1.21,<3``
   :depends on openblas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on tskit: ``>=0.5.6``

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

    pixi global install fwdpy11

to add into an existing workspace instead, run::

    pixi add fwdpy11

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fwdpy11

Alternatively, to install into a new environment, run::

    conda create -n envname fwdpy11

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fwdpy11:<tag>

(see `fwdpy11/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fwdpy11| image:: https://img.shields.io/conda/dn/bioconda/fwdpy11.svg?style=flat
   :target: https://anaconda.org/bioconda/fwdpy11
   :alt:   (downloads)
.. |docker_fwdpy11| image:: https://quay.io/repository/biocontainers/fwdpy11/status
   :target: https://quay.io/repository/biocontainers/fwdpy11
.. _`fwdpy11/tags`: https://quay.io/repository/biocontainers/fwdpy11?tab=tags


.. raw:: html

   <script>
      var package = "fwdpy11";
      var versions = ["0.24.5","0.24.3","0.24.3","0.24.2","0.24.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fwdpy11"></div>
   <div style="width: 100%" id="platform_plot_fwdpy11"></div>
   <div style="width: 100%" id="cdf_plot_fwdpy11"></div>



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
         
            // Build cdf plot for fwdpy11
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fwdpy11/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fwdpy11', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fwdpy11
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fwdpy11/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fwdpy11', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fwdpy11
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fwdpy11/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fwdpy11', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpy11/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpy11/README.html