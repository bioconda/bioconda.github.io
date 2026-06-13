:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime'
.. highlight: bash

perl-datetime
=============

.. conda:recipe:: perl-datetime
   :replaces_section_title:
   :noindex:

   A date and time object for Perl.

   :homepage: https://metacpan.org/dist/DateTime
   :license: Artistic_2
   :recipe: /`perl-datetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/meta.yaml>`_

   


.. conda:package:: perl-datetime

   |downloads_perl-datetime| |docker_perl-datetime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66-0</code>,  <code>1.65-0</code>,  <code>1.59-2</code>,  <code>1.59-1</code>,  <code>1.59-0</code>,  <code>1.58-1</code>,  <code>1.58-0</code>,  <code>1.57-0</code>,  <code>1.55-1</code>,  </span></summary>
      

      ``1.66-0``,  ``1.65-0``,  ``1.59-2``,  ``1.59-1``,  ``1.59-0``,  ``1.58-1``,  ``1.58-0``,  ``1.57-0``,  ``1.55-1``,  ``1.55-0``,  ``1.42-5``,  ``1.42-4``,  ``1.42-2``,  ``1.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-cpan-meta-check: ``0.014.*``
   :depends on perl-datetime-locale: ``>=1.45,<2.0a0``
   :depends on perl-datetime-timezone: ``>=2.65,<3.0a0``
   :depends on perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends on perl-params-validationcompiler: ``0.31.*``
   :depends on perl-params-validationcompiler: ``>=0.26``
   :depends on perl-specio: ``0.52.*``
   :depends on perl-test-fatal: ``0.016.*``
   :depends on perl-test-warnings: ``0.031.*``
   :depends on perl-test-without-module: 
   :depends on perl-try-tiny: ``0.32.*``
   :depends on perl-variable-magic: ``0.64.*``
   :depends on perl-warnings-register: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install perl-datetime

to add into an existing workspace instead, run::

    pixi add perl-datetime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-datetime

Alternatively, to install into a new environment, run::

    conda create -n envname perl-datetime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-datetime:<tag>

(see `perl-datetime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-datetime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime
   :alt:   (downloads)
.. |docker_perl-datetime| image:: https://quay.io/repository/biocontainers/perl-datetime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime
.. _`perl-datetime/tags`: https://quay.io/repository/biocontainers/perl-datetime?tab=tags


.. raw:: html

   <script>
      var package = "perl-datetime";
      var versions = ["1.66","1.65","1.59","1.59","1.59"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-datetime"></div>
   <div style="width: 100%" id="platform_plot_perl-datetime"></div>
   <div style="width: 100%" id="cdf_plot_perl-datetime"></div>



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
         
            // Build cdf plot for perl-datetime
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-datetime/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-datetime', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-datetime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-datetime/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-datetime', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-datetime
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-datetime/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-datetime', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime/README.html