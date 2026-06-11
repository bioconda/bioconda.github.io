:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chemfp'
.. highlight: bash

chemfp
======

.. conda:recipe:: chemfp
   :replaces_section_title:
   :noindex:

   chemfp is a set of command\-lines tools for generating cheminformatics fingerprints and searching those
   fingerprints by Tanimoto similarity\, as well as a Python library which can be used to build new tools.

   These algorithms are designed for the dense\, 100\-10\,000 bit
   fingerprints which occur in small\-molecule\/pharmaceutical
   chemisty. The Tanimoto search algorithms are implemented in C for
   performance and support both threshold and k\-nearest searches.

   Fingerprint generation can be done either by extracting existing
   fingerprint data from an SD file or by using an existing chemistry
   toolkit. chemfp supports the Python libraries from Open Babel\,
   OpenEye\, and RDKit toolkits.


   :homepage: https://chemfp.com
   :license: MIT
   :recipe: /`chemfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chemfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chemfp/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321-019-0398-8`, usegalaxy-eu: :usegalaxy-eu:`ctb_chemfp_mol2fps`

   


.. conda:package:: chemfp

   |downloads_chemfp| |docker_chemfp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-2</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-1``,  ``1.3-0``,  ``1.3a1-0``,  ``1.1p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on openbabel: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on rdkit: 

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

    pixi global install chemfp

to add into an existing workspace instead, run::

    pixi add chemfp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chemfp

Alternatively, to install into a new environment, run::

    conda create -n envname chemfp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chemfp:<tag>

(see `chemfp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chemfp| image:: https://img.shields.io/conda/dn/bioconda/chemfp.svg?style=flat
   :target: https://anaconda.org/bioconda/chemfp
   :alt:   (downloads)
.. |docker_chemfp| image:: https://quay.io/repository/biocontainers/chemfp/status
   :target: https://quay.io/repository/biocontainers/chemfp
.. _`chemfp/tags`: https://quay.io/repository/biocontainers/chemfp?tab=tags


.. raw:: html

   <script>
      var package = "chemfp";
      var versions = ["1.6.1","1.6.1","1.6.1","1.6","1.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_chemfp"></div>
   <div style="width: 100%" id="platform_plot_chemfp"></div>
   <div style="width: 100%" id="cdf_plot_chemfp"></div>



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
         
            // Build cdf plot for chemfp
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chemfp/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_chemfp', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for chemfp
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chemfp/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_chemfp', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for chemfp
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/chemfp/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_chemfp', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chemfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chemfp/README.html