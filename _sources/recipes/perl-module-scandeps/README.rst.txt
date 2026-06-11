:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-scandeps'
.. highlight: bash

perl-module-scandeps
====================

.. conda:recipe:: perl-module-scandeps
   :replaces_section_title:
   :noindex:

   Recursively scan Perl code for dependencies.

   :homepage: https://metacpan.org/pod/Module::ScanDeps
   :license: Perl_5
   :recipe: /`perl-module-scandeps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps/meta.yaml>`_

   


.. conda:package:: perl-module-scandeps

   |downloads_perl-module-scandeps| |docker_perl-module-scandeps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.37-0</code>,  <code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.27-1</code>,  <code>1.27-0</code>,  <code>1.26-1</code>,  <code>1.26-0</code>,  <code>1.25-0</code>,  </span></summary>
      

      ``1.37-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.27-1``,  ``1.27-0``,  ``1.26-1``,  ``1.26-0``,  ``1.25-0``,  ``1.23-1``,  ``1.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-temp: 
   :depends on perl-getopt-long: 
   :depends on perl-module-metadata: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-text-parsewords: 
   :depends on perl-version: 

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

    pixi global install perl-module-scandeps

to add into an existing workspace instead, run::

    pixi add perl-module-scandeps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-module-scandeps

Alternatively, to install into a new environment, run::

    conda create -n envname perl-module-scandeps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-module-scandeps:<tag>

(see `perl-module-scandeps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-module-scandeps| image:: https://img.shields.io/conda/dn/bioconda/perl-module-scandeps.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-scandeps
   :alt:   (downloads)
.. |docker_perl-module-scandeps| image:: https://quay.io/repository/biocontainers/perl-module-scandeps/status
   :target: https://quay.io/repository/biocontainers/perl-module-scandeps
.. _`perl-module-scandeps/tags`: https://quay.io/repository/biocontainers/perl-module-scandeps?tab=tags


.. raw:: html

   <script>
      var package = "perl-module-scandeps";
      var versions = ["1.37","1.33","1.32","1.31","1.27"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-module-scandeps"></div>
   <div style="width: 100%" id="platform_plot_perl-module-scandeps"></div>
   <div style="width: 100%" id="cdf_plot_perl-module-scandeps"></div>



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
         
            // Build cdf plot for perl-module-scandeps
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-scandeps/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-module-scandeps', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-module-scandeps
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-scandeps/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-module-scandeps', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-module-scandeps
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-scandeps/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-module-scandeps', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-scandeps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-scandeps/README.html