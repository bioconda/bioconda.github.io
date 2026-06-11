:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-fromperlver'
.. highlight: bash

perl-module-fromperlver
=======================

.. conda:recipe:: perl-module-fromperlver/0.008002
   :replaces_section_title:
   :noindex:

   install modules compatible with the running perl.

   :homepage: http://metacpan.org/pod/Module::FromPerlVer
   :license: perl_5
   :recipe: /`perl-module-fromperlver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver>`_/`0.008002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002/meta.yaml>`_

   


.. conda:package:: perl-module-fromperlver

   |downloads_perl-module-fromperlver| |docker_perl-module-fromperlver|

   :versions:
      
      

      ``0.008002-2``,  ``0.008002-1``,  ``0.008002-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-archive-tar: 
   :depends on perl-carp: 
   :depends on perl-file-copy-recursive: 
   :depends on perl-lib: 
   :depends on perl-list-moreutils: 
   :depends on perl-parent: 
   :depends on perl-pathtools: 
   :depends on perl-perl-version: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-test-deep: 
   :depends on perl-test-simple: 
   :depends on perl-version-next: 

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

    pixi global install perl-module-fromperlver

to add into an existing workspace instead, run::

    pixi add perl-module-fromperlver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-module-fromperlver

Alternatively, to install into a new environment, run::

    conda create -n envname perl-module-fromperlver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-module-fromperlver:<tag>

(see `perl-module-fromperlver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-module-fromperlver| image:: https://img.shields.io/conda/dn/bioconda/perl-module-fromperlver.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-fromperlver
   :alt:   (downloads)
.. |docker_perl-module-fromperlver| image:: https://quay.io/repository/biocontainers/perl-module-fromperlver/status
   :target: https://quay.io/repository/biocontainers/perl-module-fromperlver
.. _`perl-module-fromperlver/tags`: https://quay.io/repository/biocontainers/perl-module-fromperlver?tab=tags


.. raw:: html

   <script>
      var package = "perl-module-fromperlver";
      var versions = ["0.008002","0.008002","0.008002"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-module-fromperlver"></div>
   <div style="width: 100%" id="platform_plot_perl-module-fromperlver"></div>
   <div style="width: 100%" id="cdf_plot_perl-module-fromperlver"></div>



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
         
            // Build cdf plot for perl-module-fromperlver
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-fromperlver/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-module-fromperlver', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-module-fromperlver
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-fromperlver/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-module-fromperlver', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-module-fromperlver
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-module-fromperlver/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-module-fromperlver', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-fromperlver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-fromperlver/README.html