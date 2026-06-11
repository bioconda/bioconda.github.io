:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecco'
.. highlight: bash

gecco
=====

.. conda:recipe:: gecco
   :replaces_section_title:
   :noindex:

   Gene Cluster prediction with Conditional Random Fields.

   :homepage: https://gecco.embl.de/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`gecco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecco/meta.yaml>`_
   :links: doi: :doi:`10.1101/2021.05.03.442509`

   


.. conda:package:: gecco

   |downloads_gecco| |docker_gecco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.10-0</code>,  <code>0.9.8-0</code>,  <code>0.9.6-0</code>,  <code>0.9.5-0</code>,  </span></summary>
      

      ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.10-0``,  ``0.9.8-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.73,<2.0``
   :depends on importlib_metadata: ``>=4.0``
   :depends on importlib_resources: ``>=5.7``
   :depends on numpy: ``>=1.0,<3.0``
   :depends on polars: ``>=1.0,<2.0``
   :depends on pyhmmer: ``>=0.12.0``
   :depends on pyrodigal: ``>=3.0,<4.0``
   :depends on python: ``>=3.7``
   :depends on rich: ``>=12.4.0``
   :depends on rich-argparse: ``>=1.0,<2.0``
   :depends on scikit-learn: ``>=1.0,<2.0``
   :depends on scipy: ``>=1.4,<2.0``
   :depends on sklearn-crfsuite: ``>=0.5.0,<0.6.0``
   :depends on statsmodels: ``>=0.13,<0.15``

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

    pixi global install gecco

to add into an existing workspace instead, run::

    pixi add gecco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gecco

Alternatively, to install into a new environment, run::

    conda create -n envname gecco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gecco:<tag>

(see `gecco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gecco| image:: https://img.shields.io/conda/dn/bioconda/gecco.svg?style=flat
   :target: https://anaconda.org/bioconda/gecco
   :alt:   (downloads)
.. |docker_gecco| image:: https://quay.io/repository/biocontainers/gecco/status
   :target: https://quay.io/repository/biocontainers/gecco
.. _`gecco/tags`: https://quay.io/repository/biocontainers/gecco?tab=tags


.. raw:: html

   <script>
      var package = "gecco";
      var versions = ["0.10.3","0.10.3","0.10.2","0.10.1","0.10.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gecco"></div>
   <div style="width: 100%" id="platform_plot_gecco"></div>
   <div style="width: 100%" id="cdf_plot_gecco"></div>



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
         
            // Build cdf plot for gecco
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gecco/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gecco', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gecco
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gecco/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gecco', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gecco
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gecco/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gecco', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecco/README.html