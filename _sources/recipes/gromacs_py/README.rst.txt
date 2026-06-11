:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_py'
.. highlight: bash

gromacs_py
==========

.. conda:recipe:: gromacs_py
   :replaces_section_title:
   :noindex:

   Gromacs\_py is a python library allowing a simplified use of the gromacs MD simulation software.

   :homepage: https://github.com/samuelmurail/gromacs_py
   :documentation: https://gromacs-py.readthedocs.io/en/latest/
   
   :developer docs: https://gromacs-py.readthedocs.io/en/latest/contributing.html
   :license: GPL-2.0-only
   :recipe: /`gromacs_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py/meta.yaml>`_

   


.. conda:package:: gromacs_py

   |downloads_gromacs_py| |docker_gromacs_py|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``1.2.1-0``,  ``1.1.1-0``

      

   
   :depends on acpype: 
   :depends on gromacs: ``>=2019.1``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on os_command_py: 
   :depends on pandas: 
   :depends on pdb2pqr_htmd_propka30: 
   :depends on pdb_manip_py: 
   :depends on python: ``>=3.5``
   :depends on rdkit: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install gromacs_py

to add into an existing workspace instead, run::

    pixi add gromacs_py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gromacs_py

Alternatively, to install into a new environment, run::

    conda create -n envname gromacs_py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gromacs_py:<tag>

(see `gromacs_py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gromacs_py| image:: https://img.shields.io/conda/dn/bioconda/gromacs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_py
   :alt:   (downloads)
.. |docker_gromacs_py| image:: https://quay.io/repository/biocontainers/gromacs_py/status
   :target: https://quay.io/repository/biocontainers/gromacs_py
.. _`gromacs_py/tags`: https://quay.io/repository/biocontainers/gromacs_py?tab=tags


.. raw:: html

   <script>
      var package = "gromacs_py";
      var versions = ["2.0.3","2.0.2","1.2.1","1.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gromacs_py"></div>
   <div style="width: 100%" id="platform_plot_gromacs_py"></div>
   <div style="width: 100%" id="cdf_plot_gromacs_py"></div>



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
         
            // Build cdf plot for gromacs_py
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_py/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gromacs_py', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gromacs_py
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_py/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gromacs_py', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gromacs_py
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gromacs_py/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gromacs_py', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_py/README.html