:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfs_code'
.. highlight: bash

sfs_code
========

.. conda:recipe:: sfs_code
   :replaces_section_title:
   :noindex:

   This article introduces a new forward population genetic simulation program that can efficiently generate samples from populations with complex demographic histories under various models of natural selection. The program \(SFS\_CODE\) is highly flexible\, allowing the user to simulate realistic genomic regions with several loci evolving according to a variety of mutation models \(from simple to context\-dependent\)\, and allows for insertions and deletions. Each locus can be annotated as either coding or non\-coding\, sex\-linked or autosomal\, selected or neutral\, and have an arbitrary linkage structure \(from completely linked to independent\). © The Author 2008. Published by Oxford University Press. All rights reserved.

   :homepage: http://sfscode.sourceforge.net/SFS_CODE/index/index.html
   :license: file
   :recipe: /`sfs_code <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs_code>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs_code/meta.yaml>`_
   :links: biotools: :biotools:`sfs_code`, doi: :doi:`10.1093/bioinformatics/btn522`

   


.. conda:package:: sfs_code

   |downloads_sfs_code| |docker_sfs_code|

   :versions:
      
      

      ``20150910-7``,  ``20150910-6``,  ``20150910-5``,  ``20150910-4``,  ``20150910-3``,  ``20150910-2``,  ``20150910-1``,  ``20150910-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install sfs_code

to add into an existing workspace instead, run::

    pixi add sfs_code

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sfs_code

Alternatively, to install into a new environment, run::

    conda create -n envname sfs_code

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sfs_code:<tag>

(see `sfs_code/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sfs_code| image:: https://img.shields.io/conda/dn/bioconda/sfs_code.svg?style=flat
   :target: https://anaconda.org/bioconda/sfs_code
   :alt:   (downloads)
.. |docker_sfs_code| image:: https://quay.io/repository/biocontainers/sfs_code/status
   :target: https://quay.io/repository/biocontainers/sfs_code
.. _`sfs_code/tags`: https://quay.io/repository/biocontainers/sfs_code?tab=tags


.. raw:: html

   <script>
      var package = "sfs_code";
      var versions = ["20150910","20150910","20150910","20150910","20150910"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sfs_code"></div>
   <div style="width: 100%" id="platform_plot_sfs_code"></div>
   <div style="width: 100%" id="cdf_plot_sfs_code"></div>



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
         
            // Build cdf plot for sfs_code
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sfs_code/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sfs_code', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sfs_code
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sfs_code/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sfs_code', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sfs_code
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sfs_code/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sfs_code', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfs_code/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfs_code/README.html