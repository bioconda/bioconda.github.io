:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sativa-epang'
.. highlight: bash

sativa-epang
============

.. conda:recipe:: sativa-epang
   :replaces_section_title:
   :noindex:

   SATIVA with EPA\-ng as the placement engine

   :homepage: https://github.com/Aaramis/sativa-epang
   :documentation: https://github.com/Aaramis/sativa-epang/blob/epa-ng/CHANGES-epa-ng.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sativa-epang <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sativa-epang>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sativa-epang/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw396`, doi: :doi:`10.1093/sysbio/syy054`

   SATIVA \(Kozlov et al. 2016\) detects taxonomically mislabelled sequences by placing every
   reference sequence back into a tree built without it. This fork of amkozlov\/sativa
   v0.9.3 replaces the RAxML placement \(\-f O\) with EPA\-ng \(Barbera et al. 2019\) in both the
   leave\-one\-out and the final confirmation\, and leaves SATIVA\'s classification and
   decision logic alone\: the EPA\-ng edges are mapped back onto SATIVA\'s own B\= numbering by
   leaf bipartition.

   Against unmodified SATIVA v0.9.3 on ITS alignments\: 257 s to 15.4 s at 1600 sequences\,
   1536 s to 87 s at 5402\, with 0.98 recall and 0.90 precision at 800 sequences.

   The leave\-one\-out can also be run in three steps \(\-stage loo\-tasks\, loo\-place\,
   loo\-score\)\, so a workflow manager can prepare the folds\, place them elsewhere and pass
   the results back. The output is identical either way.

   The command is \`sativa\-epang\`\; the \`sativa\` package provides unmodified SATIVA as
   \`sativa.py\`\, and the two can be installed side by side.



.. conda:package:: sativa-epang

   |downloads_sativa-epang| |docker_sativa-epang|

   :versions:
      
      

      ``0.9.3.6-0``,  ``0.9.3.4-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on epa-ng: ``>=0.3.8``
   :depends on libgcc: ``>=14``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``

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

    pixi global install sativa-epang

to add into an existing workspace instead, run::

    pixi add sativa-epang

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sativa-epang

Alternatively, to install into a new environment, run::

    conda create -n envname sativa-epang

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sativa-epang:<tag>

(see `sativa-epang/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sativa-epang| image:: https://img.shields.io/conda/dn/bioconda/sativa-epang.svg?style=flat
   :target: https://anaconda.org/bioconda/sativa-epang
   :alt:   (downloads)
.. |docker_sativa-epang| image:: https://quay.io/repository/biocontainers/sativa-epang/status
   :target: https://quay.io/repository/biocontainers/sativa-epang
.. _`sativa-epang/tags`: https://quay.io/repository/biocontainers/sativa-epang?tab=tags


.. raw:: html

   <script>
      var package = "sativa-epang";
      var versions = ["0.9.3.6","0.9.3.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sativa-epang"></div>
   <div style="width: 100%" id="platform_plot_sativa-epang"></div>
   <div style="width: 100%" id="cdf_plot_sativa-epang"></div>



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
         
            // Build cdf plot for sativa-epang
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sativa-epang/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sativa-epang', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sativa-epang
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sativa-epang/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sativa-epang', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sativa-epang
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sativa-epang/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sativa-epang', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sativa-epang/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sativa-epang/README.html