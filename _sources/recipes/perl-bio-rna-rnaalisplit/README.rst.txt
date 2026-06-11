:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-rnaalisplit'
.. highlight: bash

perl-bio-rna-rnaalisplit
========================

.. conda:recipe:: perl-bio-rna-rnaalisplit
   :replaces_section_title:
   :noindex:

   Split and deconvolute structural RNA multiple sequence alignments

   :homepage: https://github.com/mtw/Bio-RNA-RNAaliSplit
   :license: agpl_3
   :recipe: /`perl-bio-rna-rnaalisplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-rnaalisplit/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-rnaalisplit

   |downloads_perl-bio-rna-rnaalisplit| |docker_perl-bio-rna-rnaalisplit|

   :versions:
      
      

      ``0.11-0``,  ``v0.09-0``,  ``v0.08-0``,  ``v0.07-0``,  ``v0.06-2``,  ``v0.06-1``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-array-set: 
   :depends on perl-bioperl: 
   :depends on perl-file-share: 
   :depends on perl-filedirutil: 
   :depends on perl-moose: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-params-coerce: 
   :depends on perl-path-class: 
   :depends on perl-test-script: 
   :depends on rnaz: ``>=2.1``
   :depends on rscape: ``>=1.2.2,<1.3``
   :depends on viennarna: ``>=2.4.9``

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

    pixi global install perl-bio-rna-rnaalisplit

to add into an existing workspace instead, run::

    pixi add perl-bio-rna-rnaalisplit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-rna-rnaalisplit

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-rna-rnaalisplit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-rna-rnaalisplit:<tag>

(see `perl-bio-rna-rnaalisplit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-rna-rnaalisplit| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-rnaalisplit.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-rnaalisplit
   :alt:   (downloads)
.. |docker_perl-bio-rna-rnaalisplit| image:: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit
.. _`perl-bio-rna-rnaalisplit/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-rnaalisplit?tab=tags


.. raw:: html

   <script>
      var package = "perl-bio-rna-rnaalisplit";
      var versions = ["0.11","v0.09","v0.08","v0.07","v0.06"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_perl-bio-rna-rnaalisplit"></div>
   <div style="width: 100%" id="platform_plot_perl-bio-rna-rnaalisplit"></div>
   <div style="width: 100%" id="cdf_plot_perl-bio-rna-rnaalisplit"></div>



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
         
            // Build cdf plot for perl-bio-rna-rnaalisplit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-rna-rnaalisplit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_perl-bio-rna-rnaalisplit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for perl-bio-rna-rnaalisplit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-rna-rnaalisplit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_perl-bio-rna-rnaalisplit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for perl-bio-rna-rnaalisplit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/perl-bio-rna-rnaalisplit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_perl-bio-rna-rnaalisplit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-rnaalisplit/README.html