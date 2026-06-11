:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-descriptive'
.. highlight: bash

perl-statistics-descriptive
===========================

.. conda:recipe:: perl-statistics-descriptive
   :replaces_section_title:
   :noindex:

   Module of basic descriptive statistical functions.

   :homepage: http://web-cpan.shlomifish.org/modules/Statistics-Descriptive/
   :license: perl_5
   :recipe: /`perl-statistics-descriptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-descriptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-descriptive/meta.yaml>`_

   


.. conda:package:: perl-statistics-descriptive

   |downloads_perl-statistics-descriptive| |docker_perl-statistics-descriptive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0801-0</code>,  <code>3.0800-0</code>,  <code>3.0702-1</code>,  <code>3.0702-0</code>,  <code>3.0612-2</code>,  <code>3.0612-1</code>,  <code>3.0612-0</code>,  <code>3.0609-5</code>,  <code>3.0609-4</code>,  </span></summary>
      

      ``3.0801-0``,  ``3.0800-0``,  ``3.0702-1``,  ``3.0702-0``,  ``3.0612-2``,  ``3.0612-1``,  ``3.0612-0``,  ``3.0609-5``,  ``3.0609-4``,  ``3.0609-3``,  ``3.0609-2``,  ``3.0609-1``,  ``3.0609-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-list-moreutils: 

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

    pixi global install perl-statistics-descriptive

to add into an existing workspace instead, run::

    pixi add perl-statistics-descriptive

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-statistics-descriptive

Alternatively, to install into a new environment, run::

    conda create -n envname perl-statistics-descriptive

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-statistics-descriptive:<tag>

(see `perl-statistics-descriptive/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-statistics-descriptive| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-descriptive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-descriptive
   :alt:   (downloads)
.. |docker_perl-statistics-descriptive| image:: https://quay.io/repository/biocontainers/perl-statistics-descriptive/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-descriptive
.. _`perl-statistics-descriptive/tags`: https://quay.io/repository/biocontainers/perl-statistics-descriptive?tab=tags


.. raw:: html

   <script>
      var package = "perl-statistics-descriptive";
      var versions = ["3.0801","3.0800","3.0702","3.0702","3.0612"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-statistics-descriptive"></div>
   <div style="width: 100%" id="platform_plot_perl-statistics-descriptive"></div>
   <div style="width: 100%" id="cdf_plot_perl-statistics-descriptive"></div>



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
         
            // Build cdf plot for perl-statistics-descriptive
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-statistics-descriptive/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-statistics-descriptive', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-statistics-descriptive
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-statistics-descriptive/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-statistics-descriptive', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-statistics-descriptive
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-statistics-descriptive/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-statistics-descriptive', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-descriptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-descriptive/README.html