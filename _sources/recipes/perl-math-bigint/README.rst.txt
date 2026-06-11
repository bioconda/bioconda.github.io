:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-bigint'
.. highlight: bash

perl-math-bigint
================

.. conda:recipe:: perl-math-bigint
   :replaces_section_title:
   :noindex:

   Arbitrary size floating point math package

   :homepage: http://metacpan.org/pod/Math::BigInt
   :license: perl_5
   :recipe: /`perl-math-bigint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-bigint/meta.yaml>`_

   


.. conda:package:: perl-math-bigint

   |downloads_perl-math-bigint| |docker_perl-math-bigint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.005003-0</code>,  <code>2.005002-0</code>,  <code>2.005001-0</code>,  <code>2.004001-0</code>,  <code>2.003004-0</code>,  <code>2.003003-0</code>,  <code>2.003002-0</code>,  <code>2.003001-0</code>,  <code>2.002001-0</code>,  </span></summary>
      

      ``2.005003-0``,  ``2.005002-0``,  ``2.005001-0``,  ``2.004001-0``,  ``2.003004-0``,  ``2.003003-0``,  ``2.003002-0``,  ``2.003001-0``,  ``2.002001-0``,  ``2.002000-0``,  ``2.001001-0``,  ``2.001000-0``,  ``2.000000-0``,  ``1.999842-0``,  ``1.999841-0``,  ``1.999839-0``,  ``1.999838-0``,  ``1.999837-0``,  ``1.999836-0``,  ``1.999835-0``,  ``1.999833-0``,  ``1.999832-0``,  ``1.999831-0``,  ``1.999830-0``,  ``1.999829-0``,  ``1.999816-1``,  ``1.999816-0``,  ``1.999813-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: ``>=1.22``
   :depends on perl-math-complex: ``>=1.36``
   :depends on perl-scalar-list-utils: 

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

    pixi global install perl-math-bigint

to add into an existing workspace instead, run::

    pixi add perl-math-bigint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-math-bigint

Alternatively, to install into a new environment, run::

    conda create -n envname perl-math-bigint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-math-bigint:<tag>

(see `perl-math-bigint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-math-bigint| image:: https://img.shields.io/conda/dn/bioconda/perl-math-bigint.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-bigint
   :alt:   (downloads)
.. |docker_perl-math-bigint| image:: https://quay.io/repository/biocontainers/perl-math-bigint/status
   :target: https://quay.io/repository/biocontainers/perl-math-bigint
.. _`perl-math-bigint/tags`: https://quay.io/repository/biocontainers/perl-math-bigint?tab=tags


.. raw:: html

   <script>
      var package = "perl-math-bigint";
      var versions = ["2.005003","2.005002","2.005001","2.004001","2.003004"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-math-bigint"></div>
   <div style="width: 100%" id="platform_plot_perl-math-bigint"></div>
   <div style="width: 100%" id="cdf_plot_perl-math-bigint"></div>



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
         
            // Build cdf plot for perl-math-bigint
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-math-bigint/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-math-bigint', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-math-bigint
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-math-bigint/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-math-bigint', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-math-bigint
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-math-bigint/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-math-bigint', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-bigint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-bigint/README.html