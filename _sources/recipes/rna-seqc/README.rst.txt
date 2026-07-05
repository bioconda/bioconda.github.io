:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-seqc'
.. highlight: bash

rna-seqc
========

.. conda:recipe:: rna-seqc
   :replaces_section_title:
   :noindex:

   Fast\, efficient RNA\-Seq metrics for quality control and process optimization.

   :homepage: https://github.com/broadinstitute/rnaseqc
   :documentation: https://github.com/getzlab/rnaseqc/blob/v2.4.2/README.md
   
   :license: `BSD / BSD-3-Clause <https://raw.githubusercontent.com/broadinstitute/rnaseqc/master/LICENSE>`_
   :recipe: /`rna-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc/meta.yaml>`_
   :links: biotools: :biotools:`rna-seqc`, doi: :doi:`10.1093/bioinformatics/btab135`

   


.. conda:package:: rna-seqc

   |downloads_rna-seqc| |docker_rna-seqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.3.5-6</code>,  <code>2.3.5-5</code>,  <code>2.3.5-4</code>,  <code>2.3.5-3</code>,  <code>2.3.5-2</code>,  <code>2.3.5-1</code>,  <code>2.3.5-0</code>,  </span></summary>
      

      ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.5-6``,  ``2.3.5-5``,  ``2.3.5-4``,  ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``1.1.8-2``,  ``1.1.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on libcxx: ``>=18``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install rna-seqc

to add into an existing workspace instead, run::

    pixi add rna-seqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rna-seqc

Alternatively, to install into a new environment, run::

    conda create -n envname rna-seqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rna-seqc:<tag>

(see `rna-seqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rna-seqc| image:: https://img.shields.io/conda/dn/bioconda/rna-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-seqc
   :alt:   (downloads)
.. |docker_rna-seqc| image:: https://quay.io/repository/biocontainers/rna-seqc/status
   :target: https://quay.io/repository/biocontainers/rna-seqc
.. _`rna-seqc/tags`: https://quay.io/repository/biocontainers/rna-seqc?tab=tags


.. raw:: html

   <script>
      var package = "rna-seqc";
      var versions = ["2.4.2","2.4.2","2.3.5","2.3.5","2.3.5"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rna-seqc"></div>
   <div style="width: 100%" id="platform_plot_rna-seqc"></div>
   <div style="width: 100%" id="cdf_plot_rna-seqc"></div>



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
         
            // Build cdf plot for rna-seqc
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rna-seqc/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rna-seqc', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rna-seqc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rna-seqc/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rna-seqc', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rna-seqc
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rna-seqc/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rna-seqc', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-seqc/README.html