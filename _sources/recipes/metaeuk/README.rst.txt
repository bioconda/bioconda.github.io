:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaeuk'
.. highlight: bash

metaeuk
=======

.. conda:recipe:: metaeuk
   :replaces_section_title:
   :noindex:

   MetaEuk \- sensitive\, high\-throughput gene discovery and annotation for large\-scale eukaryotic metagenomics

   :homepage: https://github.com/soedinglab/metaeuk
   :license: GPL / GPL-3
   :recipe: /`metaeuk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaeuk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaeuk/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-020-00808-x`, biotools: :biotools:`metaeuk`

   


.. conda:package:: metaeuk

   |downloads_metaeuk| |docker_metaeuk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.bba0d80-2</code>,  <code>7.bba0d80-1</code>,  <code>7.bba0d80-0</code>,  <code>6.a5d39d9-4</code>,  <code>6.a5d39d9-3</code>,  <code>6.a5d39d9-2</code>,  <code>6.a5d39d9-1</code>,  <code>6.a5d39d9-0</code>,  <code>5.34c21f2-1</code>,  </span></summary>
      

      ``7.bba0d80-2``,  ``7.bba0d80-1``,  ``7.bba0d80-0``,  ``6.a5d39d9-4``,  ``6.a5d39d9-3``,  ``6.a5d39d9-2``,  ``6.a5d39d9-1``,  ``6.a5d39d9-0``,  ``5.34c21f2-1``,  ``5.34c21f2-0``,  ``4.a0f584d-2``,  ``4.a0f584d-1``,  ``4.a0f584d-0``,  ``3.8dc7e0b-0``,  ``2.ddf2742-0``,  ``1.ea903e5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on wget: 
   :depends on zlib: 

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

    pixi global install metaeuk

to add into an existing workspace instead, run::

    pixi add metaeuk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaeuk

Alternatively, to install into a new environment, run::

    conda create -n envname metaeuk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaeuk:<tag>

(see `metaeuk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaeuk| image:: https://img.shields.io/conda/dn/bioconda/metaeuk.svg?style=flat
   :target: https://anaconda.org/bioconda/metaeuk
   :alt:   (downloads)
.. |docker_metaeuk| image:: https://quay.io/repository/biocontainers/metaeuk/status
   :target: https://quay.io/repository/biocontainers/metaeuk
.. _`metaeuk/tags`: https://quay.io/repository/biocontainers/metaeuk?tab=tags


.. raw:: html

   <script>
      var package = "metaeuk";
      var versions = ["7.bba0d80","7.bba0d80","7.bba0d80","6.a5d39d9","6.a5d39d9"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_metaeuk"></div>
   <div style="width: 100%" id="platform_plot_metaeuk"></div>
   <div style="width: 100%" id="cdf_plot_metaeuk"></div>



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
         
            // Build cdf plot for metaeuk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metaeuk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_metaeuk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for metaeuk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metaeuk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_metaeuk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for metaeuk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metaeuk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_metaeuk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaeuk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaeuk/README.html