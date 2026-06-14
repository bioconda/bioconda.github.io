:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biox-workflow-command'
.. highlight: bash

perl-biox-workflow-command
==========================

.. conda:recipe:: perl-biox-workflow-command
   :replaces_section_title:
   :noindex:

   Opinionated Bioinformatics Genomics Workflow Creator

   :homepage: https://github.com/biosails/BioX-Workflow-Command
   :license: perl_5
   :recipe: /`perl-biox-workflow-command <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-workflow-command>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-workflow-command/meta.yaml>`_

   


.. conda:package:: perl-biox-workflow-command

   |downloads_perl-biox-workflow-command| |docker_perl-biox-workflow-command|

   :versions:
      
      

      ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.2-0``,  ``2.3.0-0``,  ``2.2.3-0``,  ``2.2.1-0``

      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-algorithm-dependency: 
   :depends on perl-app-cpanminus: 
   :depends on perl-biosails: 
   :depends on perl-class-load: 
   :depends on perl-clone: 
   :depends on perl-config-any: 
   :depends on perl-data-walk: 
   :depends on perl-datetime: 
   :depends on perl-datetime-format-strptime: 
   :depends on perl-dbm-deep: 
   :depends on perl-escape-houdini: 
   :depends on perl-file-details: 
   :depends on perl-file-find-rule: 
   :depends on perl-file-path: 
   :depends on perl-file-slurp: 
   :depends on perl-git-wrapper: 
   :depends on perl-git-wrapper-plus: 
   :depends on perl-hash-merge: 
   :depends on perl-io-interactive: 
   :depends on perl-json: 
   :depends on perl-list-compare: 
   :depends on perl-list-moreutils: ``>=0.428``
   :depends on perl-list-someutils: 
   :depends on perl-list-uniq: 
   :depends on perl-log-log4perl: 
   :depends on perl-mce-shared: 
   :depends on perl-moose: 
   :depends on perl-moosex-app: ``1.39``
   :depends on perl-moosex-app-role-log4perl: 
   :depends on perl-moosex-getopt: 
   :depends on perl-moosex-types: 
   :depends on perl-moosex-types-path-tiny: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-params-validate: 
   :depends on perl-path-tiny: 
   :depends on perl-safe: 
   :depends on perl-string-approx: 
   :depends on perl-test2: 
   :depends on perl-text-asciitable: 
   :depends on perl-text-template: 
   :depends on perl-try-tiny: 
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

    pixi global install perl-biox-workflow-command

to add into an existing workspace instead, run::

    pixi add perl-biox-workflow-command

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-biox-workflow-command

Alternatively, to install into a new environment, run::

    conda create -n envname perl-biox-workflow-command

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-biox-workflow-command:<tag>

(see `perl-biox-workflow-command/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-biox-workflow-command| image:: https://img.shields.io/conda/dn/bioconda/perl-biox-workflow-command.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biox-workflow-command
   :alt:   (downloads)
.. |docker_perl-biox-workflow-command| image:: https://quay.io/repository/biocontainers/perl-biox-workflow-command/status
   :target: https://quay.io/repository/biocontainers/perl-biox-workflow-command
.. _`perl-biox-workflow-command/tags`: https://quay.io/repository/biocontainers/perl-biox-workflow-command?tab=tags


.. raw:: html

   <script>
      var package = "perl-biox-workflow-command";
      var versions = ["2.4.1","2.4.1","2.3.2","2.3.0","2.2.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-biox-workflow-command"></div>
   <div style="width: 100%" id="platform_plot_perl-biox-workflow-command"></div>
   <div style="width: 100%" id="cdf_plot_perl-biox-workflow-command"></div>



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
         
            // Build cdf plot for perl-biox-workflow-command
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-biox-workflow-command/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-biox-workflow-command', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-biox-workflow-command
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-biox-workflow-command/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-biox-workflow-command', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-biox-workflow-command
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-biox-workflow-command/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-biox-workflow-command', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biox-workflow-command/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biox-workflow-command/README.html