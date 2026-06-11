:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl'
.. highlight: bash

perl-bioperl
============

.. conda:recipe:: perl-bioperl
   :replaces_section_title:
   :noindex:

   Bioinformatics Toolkit

   :homepage: http://metacpan.org/pod/BioPerl
   :license: perl_5
   :recipe: /`perl-bioperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl/meta.yaml>`_
   :links: biotools: :biotools:`bioperl`, doi: :doi:`10.1007/978-1-59745-535-0_26`

   


.. conda:package:: perl-bioperl

   |downloads_perl-bioperl| |docker_perl-bioperl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.8-1</code>,  <code>1.7.8-0</code>,  <code>1.7.2-11</code>,  <code>1.7.2-10</code>,  <code>1.7.2-9</code>,  <code>1.7.2-8</code>,  <code>1.6.924-7</code>,  <code>1.6.924-6</code>,  <code>1.6.924-5</code>,  </span></summary>
      

      ``1.7.8-1``,  ``1.7.8-0``,  ``1.7.2-11``,  ``1.7.2-10``,  ``1.7.2-9``,  ``1.7.2-8``,  ``1.6.924-7``,  ``1.6.924-6``,  ``1.6.924-5``,  ``1.6.924-4``,  ``1.6.924-3``,  ``1.6.924-2``,  ``1.6.924-1``,  ``1.6.924-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: 
   :depends on perl-bio-asn1-entrezgene: 
   :depends on perl-bio-coordinate: 
   :depends on perl-bio-featureio: 
   :depends on perl-bio-samtools: 
   :depends on perl-bio-searchio-hmmer: 
   :depends on perl-bio-tools-phylo-paml: 
   :depends on perl-bio-tools-run-alignment-clustalw: 
   :depends on perl-bio-tools-run-alignment-tcoffee: 
   :depends on perl-bioperl-core: ``1.7.8.*``
   :depends on perl-bioperl-run: 

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

    pixi global install perl-bioperl

to add into an existing workspace instead, run::

    pixi add perl-bioperl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bioperl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bioperl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bioperl:<tag>

(see `perl-bioperl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bioperl| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl
   :alt:   (downloads)
.. |docker_perl-bioperl| image:: https://quay.io/repository/biocontainers/perl-bioperl/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl
.. _`perl-bioperl/tags`: https://quay.io/repository/biocontainers/perl-bioperl?tab=tags


.. raw:: html

   <script>
      var package = "perl-bioperl";
      var versions = ["1.7.8","1.7.8","1.7.2","1.7.2","1.7.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-bioperl"></div>
   <div style="width: 100%" id="platform_plot_perl-bioperl"></div>
   <div style="width: 100%" id="cdf_plot_perl-bioperl"></div>



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
         
            // Build cdf plot for perl-bioperl
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bioperl/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-bioperl', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-bioperl
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bioperl/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-bioperl', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-bioperl
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bioperl/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-bioperl', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl/README.html