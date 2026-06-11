:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-corelist'
.. highlight: bash

perl-module-corelist
====================

.. conda:recipe:: perl-module-corelist
   :replaces_section_title:
   :noindex:

   What modules shipped with versions of perl.

   :homepage: https://metacpan.org/pod/Module::CoreList
   :license: Perl_5
   :recipe: /`perl-module-corelist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist/meta.yaml>`_

   


.. conda:package:: perl-module-corelist

   |downloads_perl-module-corelist| |docker_perl-module-corelist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.20260601-0</code>,  <code>5.20260420-0</code>,  <code>5.20260330-0</code>,  <code>5.20260320-0</code>,  <code>5.20260308-0</code>,  <code>5.20260220-0</code>,  <code>5.20260119-0</code>,  <code>5.20251220-0</code>,  <code>5.20251120-0</code>,  </span></summary>
      

      ``5.20260601-0``,  ``5.20260420-0``,  ``5.20260330-0``,  ``5.20260320-0``,  ``5.20260308-0``,  ``5.20260220-0``,  ``5.20260119-0``,  ``5.20251220-0``,  ``5.20251120-0``,  ``5.20251022-0``,  ``5.20250923-0``,  ``5.20250820-0``,  ``5.20250803-0``,  ``5.20250720-0``,  ``5.20250702-0``,  ``5.20250528-0``,  ``5.20230220-0``,  ``5.20220620-0``,  ``5.20220527-0``,  ``5.20220420-0``,  ``5.20220320-0``,  ``5.20220313-0``,  ``5.20220220-0``,  ``5.20220120-0``,  ``5.20190524-1``,  ``5.20190524-0``,  ``5.20190420-0``,  ``5.20181218-0``,  ``5.20181130-0``,  ``5.20180820-0``,  ``5.20180626-0``,  ``5.20180120-1``,  ``5.20180120-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
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

    pixi global install perl-module-corelist

to add into an existing workspace instead, run::

    pixi add perl-module-corelist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-module-corelist

Alternatively, to install into a new environment, run::

    conda create -n envname perl-module-corelist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-module-corelist:<tag>

(see `perl-module-corelist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-module-corelist| image:: https://img.shields.io/conda/dn/bioconda/perl-module-corelist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-corelist
   :alt:   (downloads)
.. |docker_perl-module-corelist| image:: https://quay.io/repository/biocontainers/perl-module-corelist/status
   :target: https://quay.io/repository/biocontainers/perl-module-corelist
.. _`perl-module-corelist/tags`: https://quay.io/repository/biocontainers/perl-module-corelist?tab=tags


.. raw:: html

   <script>
      var package = "perl-module-corelist";
      var versions = ["5.20260601","5.20260420","5.20260330","5.20260320","5.20260308"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-module-corelist"></div>
   <div style="width: 100%" id="platform_plot_perl-module-corelist"></div>
   <div style="width: 100%" id="cdf_plot_perl-module-corelist"></div>



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
         
            // Build cdf plot for perl-module-corelist
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-corelist/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-module-corelist', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-module-corelist
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-corelist/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-module-corelist', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-module-corelist
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-corelist/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-module-corelist', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-corelist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-corelist/README.html