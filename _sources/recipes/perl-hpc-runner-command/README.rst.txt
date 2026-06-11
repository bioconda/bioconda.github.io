:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hpc-runner-command'
.. highlight: bash

perl-hpc-runner-command
=======================

.. conda:recipe:: perl-hpc-runner-command/3.2.13
   :replaces_section_title:
   :noindex:

   Create composable bioinformatics hpc analyses.

   :homepage: https://github.com/biosails/HPC-Runner-Command
   :license: perl_5
   :recipe: /`perl-hpc-runner-command <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command>`_/`3.2.13 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command/3.2.13>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command/3.2.13/meta.yaml>`_

   


.. conda:package:: perl-hpc-runner-command

   |downloads_perl-hpc-runner-command| |docker_perl-hpc-runner-command|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.13-2</code>,  <code>3.2.13-1</code>,  <code>3.2.13-0</code>,  <code>3.2.11-0</code>,  <code>3.2.10-0</code>,  <code>3.2.9-0</code>,  <code>3.2.8-0</code>,  <code>3.2.7-0</code>,  <code>3.2.6-0</code>,  </span></summary>
      

      ``3.2.13-2``,  ``3.2.13-1``,  ``3.2.13-0``,  ``3.2.11-0``,  ``3.2.10-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``,  ``3.2.6-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.2-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.4-1``,  ``3.1.4-0``,  ``3.1.1-0``,  ``3.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-algorithm-dependency: 
   :depends on perl-app-cpanminus: 
   :depends on perl-archive-tar: 
   :depends on perl-archive-tar-wrapper: 
   :depends on perl-array-compare: 
   :depends on perl-biosails: 
   :depends on perl-data-uuid: 
   :depends on perl-datetime: 
   :depends on perl-dbm-deep: 
   :depends on perl-file-find-rule: 
   :depends on perl-file-homedir: 
   :depends on perl-file-path: 
   :depends on perl-file-slurp: 
   :depends on perl-git-wrapper: 
   :depends on perl-git-wrapper-plus: 
   :depends on perl-io-interactive: 
   :depends on perl-json: 
   :depends on perl-json-xs: 
   :depends on perl-list-moreutils: ``>=0.428``
   :depends on perl-list-uniq: 
   :depends on perl-log-log4perl: 
   :depends on perl-mce: 
   :depends on perl-moose: 
   :depends on perl-moosex-app: 
   :depends on perl-moosex-app-role-log4perl: 
   :depends on perl-moosex-getopt: 
   :depends on perl-moosex-nonmoose: 
   :depends on perl-moosex-types: 
   :depends on perl-moosex-types-path-tiny: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-number-compare: 
   :depends on perl-params-validate: 
   :depends on perl-path-tiny: 
   :depends on perl-slurp: 
   :depends on perl-sort-versions: 
   :depends on perl-string-approx: 
   :depends on perl-template-toolkit: 
   :depends on perl-text-ansitable: 
   :depends on perl-text-asciitable: 
   :depends on perl-try-tiny: 
   :depends on perl-type-tiny: 
   :depends on perl-version-next: 
   :depends on perl-yaml: 
   :depends on perl-yaml-libyaml: 

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

    pixi global install perl-hpc-runner-command

to add into an existing workspace instead, run::

    pixi add perl-hpc-runner-command

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-hpc-runner-command

Alternatively, to install into a new environment, run::

    conda create -n envname perl-hpc-runner-command

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-hpc-runner-command:<tag>

(see `perl-hpc-runner-command/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-hpc-runner-command| image:: https://img.shields.io/conda/dn/bioconda/perl-hpc-runner-command.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hpc-runner-command
   :alt:   (downloads)
.. |docker_perl-hpc-runner-command| image:: https://quay.io/repository/biocontainers/perl-hpc-runner-command/status
   :target: https://quay.io/repository/biocontainers/perl-hpc-runner-command
.. _`perl-hpc-runner-command/tags`: https://quay.io/repository/biocontainers/perl-hpc-runner-command?tab=tags


.. raw:: html

   <script>
      var package = "perl-hpc-runner-command";
      var versions = ["3.2.13","3.2.13","3.2.13","3.2.11","3.2.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-hpc-runner-command"></div>
   <div style="width: 100%" id="platform_plot_perl-hpc-runner-command"></div>
   <div style="width: 100%" id="cdf_plot_perl-hpc-runner-command"></div>



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
         
            // Build cdf plot for perl-hpc-runner-command
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-hpc-runner-command/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-hpc-runner-command', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-hpc-runner-command
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-hpc-runner-command/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-hpc-runner-command', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-hpc-runner-command
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-hpc-runner-command/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-hpc-runner-command', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hpc-runner-command/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hpc-runner-command/README.html