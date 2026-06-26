:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'acedrg'
.. highlight: bash

acedrg
======

.. conda:recipe:: acedrg
   :replaces_section_title:
   :noindex:

   ACEDRG\: ligand\/monosaccharide building and restraint generation tools from CCP4

   :homepage: https://www2.mrc-lmb.cam.ac.uk/groups/murshudov/content/acedrg/acedrg.html
   :developer docs: https://ccp4forge.rc-harwell.ac.uk/ccp4/acedrg
   :license: MOZILLA / MPL-2.0
   :recipe: /`acedrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acedrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/acedrg/meta.yaml>`_
   :links: doi: :doi:`10.1107/S2059798317000067`

   ACEDRG is a tool for generating ligand and monosaccharide coordinates and
   restraint dictionaries for macromolecular crystallography. It is part of the
   Collaborative Computational Project Number 4 \(CCP4\) software suite.



.. conda:package:: acedrg

   |downloads_acedrg| |docker_acedrg|

   :versions:
      
      

      ``330-2``,  ``330-1``,  ``330-0``

      

   
   :depends on __osx: ``>=11.0``
   :depends on gemmi: 
   :depends on libcxx: ``>=19``
   :depends on networkx: 
   :depends on numpy: 
   :depends on pdbecif: 
   :depends on python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rdkit: 
   :depends on servalcat: 

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

    pixi global install acedrg

to add into an existing workspace instead, run::

    pixi add acedrg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install acedrg

Alternatively, to install into a new environment, run::

    conda create -n envname acedrg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/acedrg:<tag>

(see `acedrg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_acedrg| image:: https://img.shields.io/conda/dn/bioconda/acedrg.svg?style=flat
   :target: https://anaconda.org/bioconda/acedrg
   :alt:   (downloads)
.. |docker_acedrg| image:: https://quay.io/repository/biocontainers/acedrg/status
   :target: https://quay.io/repository/biocontainers/acedrg
.. _`acedrg/tags`: https://quay.io/repository/biocontainers/acedrg?tab=tags


.. raw:: html

   <script>
      var package = "acedrg";
      var versions = ["330","330","330"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_acedrg"></div>
   <div style="width: 100%" id="platform_plot_acedrg"></div>
   <div style="width: 100%" id="cdf_plot_acedrg"></div>



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
         
            // Build cdf plot for acedrg
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/acedrg/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_acedrg', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for acedrg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/acedrg/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_acedrg', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for acedrg
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/acedrg/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_acedrg', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/acedrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/acedrg/README.html