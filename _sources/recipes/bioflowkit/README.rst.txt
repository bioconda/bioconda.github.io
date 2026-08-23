:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioflowkit'
.. highlight: bash

bioflowkit
==========

.. conda:recipe:: bioflowkit
   :replaces_section_title:
   :noindex:

   One\-line comparative\-genomics recipes \+ Tier\-A SDK over per\-tool Docker BioContainers

   :homepage: https://github.com/hope9901/bioflow
   :documentation: https://hope9901.github.io/bioflow/
   
   :license: MIT / MIT
   :recipe: /`bioflowkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioflowkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioflowkit/meta.yaml>`_

   bioflow is a bioinformatics SDK \+ cookbook for one\-line
   comparative\-genomics analyses on a single workstation.  Each tool
   runs in its own Docker BioContainer \(no native installs\)\, each
   recipe is one CLI call\, and an optional privacy\-first LLM companion
   is available.

   Requires a reachable Docker daemon at run time — bioflow launches
   each pipeline stage as a sibling container via the host Docker
   socket.  Run \`bioflow doctor\` after install to verify the host.

   The PyPI\/conda distribution name is \`bioflowkit\`\; the Python import
   name and CLI command are both \`bioflow\`.



.. conda:package:: bioflowkit

   |downloads_bioflowkit| |docker_bioflowkit|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends on docker-py: ``>=7.1``
   :depends on jsonschema: ``>=4.22``
   :depends on matplotlib-base: ``>=3.6``
   :depends on pandas: ``>=1.5``
   :depends on psutil: ``>=5.9``
   :depends on pydantic: ``>=2.7``
   :depends on pynvml: ``>=11.5``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=6.0``
   :depends on questionary: ``>=2.0``
   :depends on rich: ``>=13.7``
   :depends on typer: ``>=0.12``

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

    pixi global install bioflowkit

to add into an existing workspace instead, run::

    pixi add bioflowkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioflowkit

Alternatively, to install into a new environment, run::

    conda create -n envname bioflowkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioflowkit:<tag>

(see `bioflowkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioflowkit| image:: https://img.shields.io/conda/dn/bioconda/bioflowkit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioflowkit
   :alt:   (downloads)
.. |docker_bioflowkit| image:: https://quay.io/repository/biocontainers/bioflowkit/status
   :target: https://quay.io/repository/biocontainers/bioflowkit
.. _`bioflowkit/tags`: https://quay.io/repository/biocontainers/bioflowkit?tab=tags


.. raw:: html

   <script>
      var package = "bioflowkit";
      var versions = ["0.3.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioflowkit"></div>
   <div style="width: 100%" id="platform_plot_bioflowkit"></div>
   <div style="width: 100%" id="cdf_plot_bioflowkit"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for bioflowkit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioflowkit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioflowkit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioflowkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioflowkit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioflowkit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioflowkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioflowkit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioflowkit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioflowkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioflowkit/README.html