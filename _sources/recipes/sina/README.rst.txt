:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sina'
.. highlight: bash

sina
====

.. conda:recipe:: sina
   :replaces_section_title:
   :noindex:

   Reference based multiple sequence alignment

   :homepage: https://github.com/epruesse/SINA
   :documentation: https://sina.readthedocs.io
   
   :license: `GPL / GPLv3 <https://raw.githubusercontent.com/epruesse/SINA/master/LICENSE>`_
   :recipe: /`sina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina/meta.yaml>`_
   :links: biotools: :biotools:`SINA`, doi: :doi:`10.1093/bioinformatics/bts252`

   SINA allows incorporating additional sequences into an existing
   multiple sequence alignment \(MSA\) without modifying the original
   alignment. While adding sequences to an MSA with SINA is usually
   faster than re\-computing the entire MSA from an augmented set of
   unaligned sequences\, the primary benefit lies in protecting
   investments made into the original MSA such as manual curation of the
   alignment\, compute intensive phylogenetic tree reconstruction and
   taxonomic annotation of the resulting phylogeny.

   Additionally\, SINA includes a homology search which uses the
   previously computed alignment to determine the most similar
   sequences. Based on the search results\, a LCA based classification of
   the query sequence can be computed using taxonomic classifications
   assigned to the sequences comprising the reference MSA.

   SINA is used to compute the small and large subunit ribosomal RNA
   alignments provided by the SILVA\_ project and is able to use the ARB\_
   format reference databases released by the project.



.. conda:package:: sina

   |downloads_sina| |docker_sina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.5-2</code>,  <code>1.3.4-2</code>,  </span></summary>
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.5-2``,  ``1.3.4-2``,  ``1.3.1-2``,  ``1.3.1-0``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on arb-bio-tools: 
   :depends on boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends on glib: ``>=2.58.3,<3.0a0``
   :depends on libarbdb: ``6.0.6 h82bc0eb_8``
   :depends on libcxx: ``>=9.0.1``
   :depends on tbb: ``>=2019.9,<2021.0.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install sina

to add into an existing workspace instead, run::

    pixi add sina

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sina

Alternatively, to install into a new environment, run::

    conda create -n envname sina

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sina:<tag>

(see `sina/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sina| image:: https://img.shields.io/conda/dn/bioconda/sina.svg?style=flat
   :target: https://anaconda.org/bioconda/sina
   :alt:   (downloads)
.. |docker_sina| image:: https://quay.io/repository/biocontainers/sina/status
   :target: https://quay.io/repository/biocontainers/sina
.. _`sina/tags`: https://quay.io/repository/biocontainers/sina?tab=tags


.. raw:: html

   <script>
      var package = "sina";
      var versions = ["1.7.2","1.7.1","1.7.0","1.6.1","1.6.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sina"></div>
   <div style="width: 100%" id="platform_plot_sina"></div>
   <div style="width: 100%" id="cdf_plot_sina"></div>



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
         
            // Build cdf plot for sina
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sina/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sina', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sina
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sina/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sina', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sina
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sina/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sina', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sina/README.html