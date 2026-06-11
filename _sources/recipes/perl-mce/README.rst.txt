:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce'
.. highlight: bash

perl-mce
========

.. conda:recipe:: perl-mce
   :replaces_section_title:
   :noindex:

   Many\-Core Engine for Perl providing parallel processing capabilities

   :homepage: https://github.com/marioroy/mce-perl
   :license: perl_5
   :recipe: /`perl-mce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce/meta.yaml>`_

   


.. conda:package:: perl-mce

   |downloads_perl-mce| |docker_perl-mce|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.902-0</code>,  <code>1.901-0</code>,  <code>1.900-0</code>,  <code>1.899-0</code>,  <code>1.898-0</code>,  <code>1.897-0</code>,  <code>1.896-0</code>,  <code>1.895-0</code>,  <code>1.894-0</code>,  </span></summary>
      

      ``1.902-0``,  ``1.901-0``,  ``1.900-0``,  ``1.899-0``,  ``1.898-0``,  ``1.897-0``,  ``1.896-0``,  ``1.895-0``,  ``1.894-0``,  ``1.893-0``,  ``1.891-0``,  ``1.888-0``,  ``1.884-0``,  ``1.881-0``,  ``1.879-0``,  ``1.878-0``,  ``1.876-0``,  ``1.837-1``,  ``1.837-0``,  ``1.836-0``,  ``1.835-1``,  ``1.835-0``,  ``1.814-1``,  ``1.814-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-file-path: 
   :depends on perl-getopt-long: 
   :depends on perl-socket: 
   :depends on perl-storable: 
   :depends on perl-time-hires: 

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

    pixi global install perl-mce

to add into an existing workspace instead, run::

    pixi add perl-mce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mce

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mce:<tag>

(see `perl-mce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mce| image:: https://img.shields.io/conda/dn/bioconda/perl-mce.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce
   :alt:   (downloads)
.. |docker_perl-mce| image:: https://quay.io/repository/biocontainers/perl-mce/status
   :target: https://quay.io/repository/biocontainers/perl-mce
.. _`perl-mce/tags`: https://quay.io/repository/biocontainers/perl-mce?tab=tags


.. raw:: html

   <script>
      var package = "perl-mce";
      var versions = ["1.902","1.901","1.900","1.899","1.898"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-mce"></div>
   <div style="width: 100%" id="platform_plot_perl-mce"></div>
   <div style="width: 100%" id="cdf_plot_perl-mce"></div>



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
         
            // Build cdf plot for perl-mce
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-mce/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-mce', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-mce
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-mce/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-mce', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-mce
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-mce/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-mce', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce/README.html