:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vardictcpp'
.. highlight: bash

vardictcpp
==========

.. conda:recipe:: vardictcpp
   :replaces_section_title:
   :noindex:

   Memory\-lean C\+\+ reimplementation of the VarDict variant caller\, byte\-identical to VarDictJava

   :homepage: https://github.com/MHH-Bioinformatics-Hematology/vardictcpp
   :license: MIT / MIT
   :recipe: /`vardictcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardictcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardictcpp/meta.yaml>`_

   vardictcpp is a from\-scratch C\+\+17 reimplementation of VarDict
   \(AstraZeneca\-NGS VarDictJava 1.8.3\) built on htslib. It reproduces VarDict\'s
   SNV\, indel and structural\-variant calls byte\-for\-byte across the simple\,
   amplicon\, \-\-fisher\, structural\-variant\, paired\-somatic and splice\-aware
   modes\, while running several times faster and using roughly an order of
   magnitude less memory. It accepts VarDict\'s command\-line option syntax and
   emits VarDict\'s TSV column order\, and can also write VCF natively \(\-\-vcf\)\,
   so it is a drop\-in replacement in existing pipelines.



.. conda:package:: vardictcpp

   |downloads_vardictcpp| |docker_vardictcpp|

   :versions:
      
      

      ``2-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on htslib: ``>=1.24,<1.25.0a0``
   :depends on libcxx: ``>=19``

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

    pixi global install vardictcpp

to add into an existing workspace instead, run::

    pixi add vardictcpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vardictcpp

Alternatively, to install into a new environment, run::

    conda create -n envname vardictcpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vardictcpp:<tag>

(see `vardictcpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vardictcpp| image:: https://img.shields.io/conda/dn/bioconda/vardictcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/vardictcpp
   :alt:   (downloads)
.. |docker_vardictcpp| image:: https://quay.io/repository/biocontainers/vardictcpp/status
   :target: https://quay.io/repository/biocontainers/vardictcpp
.. _`vardictcpp/tags`: https://quay.io/repository/biocontainers/vardictcpp?tab=tags


.. raw:: html

   <script>
      var package = "vardictcpp";
      var versions = ["2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vardictcpp"></div>
   <div style="width: 100%" id="platform_plot_vardictcpp"></div>
   <div style="width: 100%" id="cdf_plot_vardictcpp"></div>



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
         
            // Build cdf plot for vardictcpp
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardictcpp/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vardictcpp', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vardictcpp
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardictcpp/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vardictcpp', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vardictcpp
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vardictcpp/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vardictcpp', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardictcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardictcpp/README.html