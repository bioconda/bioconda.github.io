:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfsamplecompare'
.. highlight: bash

vcfsamplecompare
================

.. conda:recipe:: vcfsamplecompare
   :replaces_section_title:
   :noindex:

   This script sorts and \(optionally\) filters the rows\/variants of a VCF file \(containing data for 2 or more samples\) based on the differences in the variant data between samples or sample groups. Degree of \"difference\" is determined by either the best possible degree of separation of sample groups by genotype calls or the difference in average allelic frequency of each sample or sample group \(with a gap size threshold\). The pair of samples or sample groups used to represent the difference for a variant row is the one leading to the greatest difference in consistent genotype or average allelic frequencies \(i.e. observation ratios\, e.g. AO\/DP\) of the same variant state. If sample groups are not specified\, the pair of samples leading to the greatest difference is greedily discovered and chosen to represent the variant\/row.

   :homepage: https://github.com/hepcat72/vcfSampleCompare
   :license: GNU
   :recipe: /`vcfsamplecompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3565896`

   


.. conda:package:: vcfsamplecompare

   |downloads_vcfsamplecompare| |docker_vcfsamplecompare|

   :versions:
      
      

      ``2.013-2``,  ``2.013-1``,  ``2.013-0``,  ``v2.008-1``,  ``v2.008-0``,  ``v2.006-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install vcfsamplecompare

to add into an existing workspace instead, run::

    pixi add vcfsamplecompare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcfsamplecompare

Alternatively, to install into a new environment, run::

    conda create -n envname vcfsamplecompare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcfsamplecompare:<tag>

(see `vcfsamplecompare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcfsamplecompare| image:: https://img.shields.io/conda/dn/bioconda/vcfsamplecompare.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfsamplecompare
   :alt:   (downloads)
.. |docker_vcfsamplecompare| image:: https://quay.io/repository/biocontainers/vcfsamplecompare/status
   :target: https://quay.io/repository/biocontainers/vcfsamplecompare
.. _`vcfsamplecompare/tags`: https://quay.io/repository/biocontainers/vcfsamplecompare?tab=tags


.. raw:: html

   <script>
      var package = "vcfsamplecompare";
      var versions = ["2.013","2.013","2.013","v2.008","v2.008"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vcfsamplecompare"></div>
   <div style="width: 100%" id="platform_plot_vcfsamplecompare"></div>
   <div style="width: 100%" id="cdf_plot_vcfsamplecompare"></div>



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
         
            // Build cdf plot for vcfsamplecompare
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfsamplecompare/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vcfsamplecompare', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vcfsamplecompare
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfsamplecompare/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vcfsamplecompare', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vcfsamplecompare
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcfsamplecompare/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vcfsamplecompare', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfsamplecompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfsamplecompare/README.html