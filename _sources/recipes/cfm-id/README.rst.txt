:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfm-id'
.. highlight: bash

cfm-id
======

.. conda:recipe:: cfm-id
   :replaces_section_title:
   :noindex:

   CFM\-ID 4 \- Competitive Fragmentation Modeling for MS\/MS prediction and metabolite identification

   :homepage: https://cfmid.wishartlab.com/
   :developer docs: https://bitbucket.org/wishartlab/cfm-id-code
   :license: LGPL / LGPL-2.1-only
   :recipe: /`cfm-id <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm-id>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm-id/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.analchem.1c01465`, doi: :doi:`10.1093/nar/gkac383`

   CFM\-ID applies Competitive Fragmentation Modeling to predict ESI\-MS\/MS
   spectra from molecular structures\, to annotate peaks\, and to rank candidate
   structures against an experimental spectrum.

   This package provides the CFM\-ID 4 generation. The older \`cfm\` package
   \(version 33\) is CFM\-ID 3\-era software\; the two install binaries with the
   same names and cannot be installed together.

   Pretrained CFM\-ID 4 parameters are installed under
   \$PREFIX\/share\/cfm\-id\-\<version\>\/. The upstream repository also ships
   \~172 MB of cross\-validation models\, which are not needed at runtime and are
   deliberately not packaged.



.. conda:package:: cfm-id

   |downloads_cfm-id| |docker_cfm-id|

   :versions:
      
      

      ``4.4.10-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on boost-cpp: 
   :depends on libcxx: ``>=19``
   :depends on liblbfgs: ``>=1.10,<1.11.0a0``
   :depends on lp_solve: ``5.5.*``
   :depends on rdkit: ``>=2021.03.1,<2024``

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

    pixi global install cfm-id

to add into an existing workspace instead, run::

    pixi add cfm-id

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cfm-id

Alternatively, to install into a new environment, run::

    conda create -n envname cfm-id

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cfm-id:<tag>

(see `cfm-id/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cfm-id| image:: https://img.shields.io/conda/dn/bioconda/cfm-id.svg?style=flat
   :target: https://anaconda.org/bioconda/cfm-id
   :alt:   (downloads)
.. |docker_cfm-id| image:: https://quay.io/repository/biocontainers/cfm-id/status
   :target: https://quay.io/repository/biocontainers/cfm-id
.. _`cfm-id/tags`: https://quay.io/repository/biocontainers/cfm-id?tab=tags


.. raw:: html

   <script>
      var package = "cfm-id";
      var versions = ["4.4.10"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_cfm-id"></div>
   <div style="width: 100%" id="platform_plot_cfm-id"></div>
   <div style="width: 100%" id="cdf_plot_cfm-id"></div>



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
         
            // Build cdf plot for cfm-id
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfm-id/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_cfm-id', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for cfm-id
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfm-id/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_cfm-id', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for cfm-id
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cfm-id/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_cfm-id', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfm-id/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfm-id/README.html