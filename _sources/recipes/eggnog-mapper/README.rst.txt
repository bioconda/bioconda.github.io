:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eggnog-mapper'
.. highlight: bash

eggnog-mapper
=============

.. conda:recipe:: eggnog-mapper
   :replaces_section_title:
   :noindex:

   Fast genome\-wide functional annotation through orthology assignment.

   :homepage: https://github.com/eggnogdb/eggnog-mapper
   :documentation: https://github.com/eggnogdb/eggnog-mapper/wiki
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`eggnog-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky1085`, usegalaxy-eu: :usegalaxy-eu:`eggnog_mapper`

   


.. conda:package:: eggnog-mapper

   |downloads_eggnog-mapper| |docker_eggnog-mapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.13-2</code>,  <code>2.1.13-1</code>,  <code>2.1.13-0</code>,  <code>2.1.12-2</code>,  <code>2.1.12-1</code>,  <code>2.1.12-0</code>,  <code>2.1.11-0</code>,  <code>2.1.10-0</code>,  <code>2.1.9-0</code>,  </span></summary>
      

      ``2.1.13-2``,  ``2.1.13-1``,  ``2.1.13-0``,  ``2.1.12-2``,  ``2.1.12-1``,  ``2.1.12-0``,  ``2.1.11-0``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.76``
   :depends on diamond: ``>=2.0.11,<2.1``
   :depends on easel: 
   :depends on hmmer: 
   :depends on mmseqs2: 
   :depends on prodigal: 
   :depends on psutil: ``>=5.7.0``
   :depends on python: ``>=3.7,<3.12``
   :depends on wget: 
   :depends on xlsxwriter: ``>=1.4.3``

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

    pixi global install eggnog-mapper

to add into an existing workspace instead, run::

    pixi add eggnog-mapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eggnog-mapper

Alternatively, to install into a new environment, run::

    conda create -n envname eggnog-mapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eggnog-mapper:<tag>

(see `eggnog-mapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eggnog-mapper| image:: https://img.shields.io/conda/dn/bioconda/eggnog-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/eggnog-mapper
   :alt:   (downloads)
.. |docker_eggnog-mapper| image:: https://quay.io/repository/biocontainers/eggnog-mapper/status
   :target: https://quay.io/repository/biocontainers/eggnog-mapper
.. _`eggnog-mapper/tags`: https://quay.io/repository/biocontainers/eggnog-mapper?tab=tags


.. raw:: html

   <script>
      var package = "eggnog-mapper";
      var versions = ["2.1.13","2.1.13","2.1.13","2.1.12","2.1.12"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_eggnog-mapper"></div>
   <div style="width: 100%" id="platform_plot_eggnog-mapper"></div>
   <div style="width: 100%" id="cdf_plot_eggnog-mapper"></div>



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
         
            // Build cdf plot for eggnog-mapper
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/eggnog-mapper/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_eggnog-mapper', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for eggnog-mapper
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/eggnog-mapper/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_eggnog-mapper', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for eggnog-mapper
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/eggnog-mapper/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_eggnog-mapper', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eggnog-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eggnog-mapper/README.html