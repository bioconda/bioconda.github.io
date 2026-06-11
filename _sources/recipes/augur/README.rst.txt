:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augur'
.. highlight: bash

augur
=====

.. conda:recipe:: augur
   :replaces_section_title:
   :noindex:

   Process pathogen genome data for the Nextstrain platform.

   :homepage: https://github.com/nextstrain/augur
   :documentation: https://docs.nextstrain.org/projects/augur
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`augur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02906`, biotools: :biotools:`Augur`

   


.. conda:package:: augur

   |downloads_augur| |docker_augur|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>33.4.1-0</code>,  <code>33.4.0-0</code>,  <code>33.3.0-0</code>,  <code>33.2.0-0</code>,  <code>33.1.0-1</code>,  <code>33.1.0-0</code>,  <code>33.0.1-0</code>,  <code>33.0.0-0</code>,  <code>32.1.0-0</code>,  </span></summary>
      

      ``33.4.1-0``,  ``33.4.0-0``,  ``33.3.0-0``,  ``33.2.0-0``,  ``33.1.0-1``,  ``33.1.0-0``,  ``33.0.1-0``,  ``33.0.0-0``,  ``32.1.0-0``,  ``32.0.0-0``,  ``31.5.0-0``,  ``31.4.0-0``,  ``31.3.0-0``,  ``31.2.1-0``,  ``31.2.0-1``,  ``31.2.0-0``,  ``31.1.0-0``,  ``31.0.0-0``,  ``30.0.1-0``,  ``30.0.0-0``,  ``29.1.0-0``,  ``29.0.0-0``,  ``28.0.1-0``,  ``28.0.0-0``,  ``27.2.0-0``,  ``27.1.0-0``,  ``27.0.0-0``,  ``26.2.0-1``,  ``26.2.0-0``,  ``26.1.0-0``,  ``26.0.0-0``,  ``25.4.0-0``,  ``25.3.0-0``,  ``25.2.0-0``,  ``25.1.1-0``,  ``25.1.0-0``,  ``25.0.0-0``,  ``24.4.0-1``,  ``24.4.0-0``,  ``24.3.0-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.0-0``,  ``24.0.0-0``,  ``23.1.1-1``,  ``23.1.1-0``,  ``23.1.0-0``,  ``23.0.0-0``,  ``22.4.0-0``,  ``22.3.0-0``,  ``22.2.0-0``,  ``22.1.0-0``,  ``22.0.3-0``,  ``22.0.2-0``,  ``22.0.1-0``,  ``22.0.0-0``,  ``21.1.0-0``,  ``21.0.1-1``,  ``21.0.1-0``,  ``21.0.0-1``,  ``21.0.0-0``,  ``20.0.0-0``,  ``19.3.0-0``,  ``19.2.0-0``,  ``19.1.0-0``,  ``19.0.0-0``,  ``18.2.0-0``,  ``18.1.2-0``,  ``18.1.1-0``,  ``18.1.0-0``,  ``18.0.0-0``,  ``17.1.0-1``,  ``17.1.0-0``,  ``17.0.0-1``,  ``17.0.0-0``,  ``16.0.3-0``,  ``16.0.2-0``,  ``16.0.1-0``,  ``15.0.2-0``,  ``15.0.1-0``,  ``15.0.0-0``,  ``14.1.0-0``,  ``14.0.0-0``,  ``13.1.2-0``,  ``13.1.1-0``,  ``13.1.0-0``,  ``13.0.4-0``,  ``13.0.3-0``,  ``13.0.2-0``,  ``13.0.1-1``,  ``13.0.1-0``,  ``13.0.0-0``,  ``12.1.1-0``,  ``12.0.0-0``,  ``11.3.0-0``,  ``11.2.0-1``,  ``11.2.0-0``,  ``11.1.2-1``,  ``11.1.2-0``,  ``11.1.0-0``,  ``11.0.0-0``,  ``10.3.0-0``,  ``10.2.0-0``,  ``10.1.1-0``,  ``10.1.0-0``,  ``10.0.4-0``,  ``10.0.3-0``,  ``10.0.2-0``,  ``10.0.0-1``,  ``10.0.0-0``,  ``9.0.0-1``,  ``9.0.0-0``,  ``8.0.0-0``,  ``7.0.2-0``,  ``6.4.3-0``,  ``6.4.2-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.0-0``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.0-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``4.0.0-0``,  ``3.1.5-1``,  ``3.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: ``>=0.7.1,<0.8``
   :depends on biopython: ``>=1.80,<2``
   :depends on cvxopt: ``>=1.1.9,<2``
   :depends on docutils: 
   :depends on fasttree: 
   :depends on importlib_resources: ``>=5.3.0``
   :depends on iqtree: 
   :depends on isodate: ``>=0.6.0,<0.8``
   :depends on jsonschema: ``>=4.18.0,<5``
   :depends on mafft: 
   :depends on networkx: ``>=2.5,<4``
   :depends on numpy: ``>=1.0.0,<3``
   :depends on packaging: ``>=19.2``
   :depends on pandas: ``>=1.4.0,<3``
   :depends on pyfastx: ``>=1.0.0,<3``
   :depends on python: ``>=3.10``
   :depends on python-calamine: ``>=0.2.0``
   :depends on pyyaml: 
   :depends on raxml: 
   :depends on referencing: ``>=0.29.1,<1``
   :depends on scipy: ``>=1.0.0,<2``
   :depends on seqkit: 
   :depends on sqlite: ``>=3.39,<4``
   :depends on treetime: ``>=0.11.2,<0.13``
   :depends on vcftools: 
   :depends on xopen: ``>=2.0.0,<3``

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

    pixi global install augur

to add into an existing workspace instead, run::

    pixi add augur

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install augur

Alternatively, to install into a new environment, run::

    conda create -n envname augur

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/augur:<tag>

(see `augur/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_augur| image:: https://img.shields.io/conda/dn/bioconda/augur.svg?style=flat
   :target: https://anaconda.org/bioconda/augur
   :alt:   (downloads)
.. |docker_augur| image:: https://quay.io/repository/biocontainers/augur/status
   :target: https://quay.io/repository/biocontainers/augur
.. _`augur/tags`: https://quay.io/repository/biocontainers/augur?tab=tags


.. raw:: html

   <script>
      var package = "augur";
      var versions = ["33.4.1","33.4.0","33.3.0","33.2.0","33.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_augur"></div>
   <div style="width: 100%" id="platform_plot_augur"></div>
   <div style="width: 100%" id="cdf_plot_augur"></div>



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
         
            // Build cdf plot for augur
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/augur/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_augur', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for augur
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/augur/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_augur', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for augur
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/augur/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_augur', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augur/README.html