:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-compara'
.. highlight: bash

perl-ensembl-compara
====================

.. conda:recipe:: perl-ensembl-compara
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-compara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara/meta.yaml>`_

   


.. conda:package:: perl-ensembl-compara

   |downloads_perl-ensembl-compara| |docker_perl-ensembl-compara|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on perl-capture-tiny: 
   :depends on perl-data-predicate: 
   :depends on perl-ensembl-core: 
   :depends on perl-html-template: 
   :depends on perl-json: 
   :depends on perl-list-compare: 
   :depends on perl-lwp-simple: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-number-format: 
   :depends on perl-parse-recdescent: 
   :depends on perl-set-intervaltree: 
   :depends on perl-statistics-descriptive: 
   :depends on perl-text-csv: 
   :depends on perl-xml-writer: 

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

    pixi global install perl-ensembl-compara

to add into an existing workspace instead, run::

    pixi add perl-ensembl-compara

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ensembl-compara

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ensembl-compara

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ensembl-compara:<tag>

(see `perl-ensembl-compara/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ensembl-compara| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-compara.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-compara
   :alt:   (downloads)
.. |docker_perl-ensembl-compara| image:: https://quay.io/repository/biocontainers/perl-ensembl-compara/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-compara
.. _`perl-ensembl-compara/tags`: https://quay.io/repository/biocontainers/perl-ensembl-compara?tab=tags


.. raw:: html

   <script>
      var package = "perl-ensembl-compara";
      var versions = ["98","98"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-ensembl-compara"></div>
   <div style="width: 100%" id="platform_plot_perl-ensembl-compara"></div>
   <div style="width: 100%" id="cdf_plot_perl-ensembl-compara"></div>



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
         
            // Build cdf plot for perl-ensembl-compara
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-ensembl-compara/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-ensembl-compara', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-ensembl-compara
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-ensembl-compara/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-ensembl-compara', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-ensembl-compara
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-ensembl-compara/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-ensembl-compara', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-compara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-compara/README.html