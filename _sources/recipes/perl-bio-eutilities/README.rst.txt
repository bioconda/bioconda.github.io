:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-eutilities'
.. highlight: bash

perl-bio-eutilities
===================

.. conda:recipe:: perl-bio-eutilities
   :replaces_section_title:
   :noindex:

   Webagent which interacts with and retrieves data from NCBI eUtils.

   :homepage: https://metacpan.org/release/Bio-EUtilities
   :license: perl_5
   :recipe: /`perl-bio-eutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities/meta.yaml>`_

   


.. conda:package:: perl-bio-eutilities

   |downloads_perl-bio-eutilities| |docker_perl-bio-eutilities|

   :versions:
      
      

      ``1.77-0``,  ``1.75-4``,  ``1.75-2``,  ``1.75-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-asn1-entrezgene: 
   :depends on perl-bioperl: 
   :depends on perl-capture-tiny: 
   :depends on perl-class-data-inheritable: 
   :depends on perl-data-stag: 
   :depends on perl-devel-stacktrace: 
   :depends on perl-exception-class: 
   :depends on perl-sub-uplevel: 
   :depends on perl-test-deep: 
   :depends on perl-test-differences: 
   :depends on perl-test-exception: 
   :depends on perl-test-most: 
   :depends on perl-test-simple: 
   :depends on perl-test-warn: 
   :depends on perl-text-csv: 
   :depends on perl-text-diff: 
   :depends on perl-xml-namespacesupport: 
   :depends on perl-xml-sax: 
   :depends on perl-xml-sax-base: 
   :depends on perl-xml-sax-expat: 
   :depends on perl-xml-simple: 

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

    pixi global install perl-bio-eutilities

to add into an existing workspace instead, run::

    pixi add perl-bio-eutilities

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-eutilities

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-eutilities

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-eutilities:<tag>

(see `perl-bio-eutilities/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-eutilities| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-eutilities.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-eutilities
   :alt:   (downloads)
.. |docker_perl-bio-eutilities| image:: https://quay.io/repository/biocontainers/perl-bio-eutilities/status
   :target: https://quay.io/repository/biocontainers/perl-bio-eutilities
.. _`perl-bio-eutilities/tags`: https://quay.io/repository/biocontainers/perl-bio-eutilities?tab=tags


.. raw:: html

   <script>
      var package = "perl-bio-eutilities";
      var versions = ["1.77","1.75","1.75","1.75"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-bio-eutilities"></div>
   <div style="width: 100%" id="platform_plot_perl-bio-eutilities"></div>
   <div style="width: 100%" id="cdf_plot_perl-bio-eutilities"></div>



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
         
            // Build cdf plot for perl-bio-eutilities
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-eutilities/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-bio-eutilities', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-bio-eutilities
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-eutilities/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-bio-eutilities', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-bio-eutilities
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-eutilities/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-bio-eutilities', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-eutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-eutilities/README.html