:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmasker'
.. highlight: bash

repeatmasker
============

.. conda:recipe:: repeatmasker
   :replaces_section_title:
   :noindex:

   RepeatMasker is a program that screens DNA sequences for interspersed repeats and low complexity DNA sequences.

   :homepage: https://www.repeatmasker.org/RepeatMasker
   :developer docs: https://github.com/Dfam-consortium/RepeatMasker
   :license: Open Software License v2.1
   :recipe: /`repeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker/meta.yaml>`_
   :links: biotools: :biotools:`repeatmasker`, usegalaxy-eu: :usegalaxy-eu:`repeatmasker_wrapper`

   


.. conda:package:: repeatmasker

   |downloads_repeatmasker| |docker_repeatmasker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.3-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  <code>4.1.9-0</code>,  <code>4.1.8-0</code>,  <code>4.1.7p1-1</code>,  <code>4.1.7p1-0</code>,  <code>4.1.5-1</code>,  </span></summary>
      

      ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.9-0``,  ``4.1.8-0``,  ``4.1.7p1-1``,  ``4.1.7p1-0``,  ``4.1.5-1``,  ``4.1.5-0``,  ``4.1.2.p1-1``,  ``4.1.2.p1-0``,  ``4.1.1-2``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.9_p2-2``,  ``4.0.9_p2-1``,  ``4.0.9_p2-0``,  ``4.0.8-14``,  ``4.0.8-13``,  ``4.0.7-13``,  ``4.0.7-11``,  ``4.0.7-10``,  ``4.0.6-10``,  ``4.0.6-9``,  ``4.0.6-8``,  ``4.0.6-7``,  ``4.0.6-6``,  ``4.0.6-5``,  ``4.0.6-4``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: 
   :depends on hmmer: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on rmblast: 
   :depends on trf: 
   :depends on wget: 

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

    pixi global install repeatmasker

to add into an existing workspace instead, run::

    pixi add repeatmasker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install repeatmasker

Alternatively, to install into a new environment, run::

    conda create -n envname repeatmasker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/repeatmasker:<tag>

(see `repeatmasker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_repeatmasker| image:: https://img.shields.io/conda/dn/bioconda/repeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatmasker
   :alt:   (downloads)
.. |docker_repeatmasker| image:: https://quay.io/repository/biocontainers/repeatmasker/status
   :target: https://quay.io/repository/biocontainers/repeatmasker
.. _`repeatmasker/tags`: https://quay.io/repository/biocontainers/repeatmasker?tab=tags


.. raw:: html

   <script>
      var package = "repeatmasker";
      var versions = ["4.2.3","4.2.2","4.2.1","4.2.0","4.1.9"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_repeatmasker"></div>
   <div style="width: 100%" id="platform_plot_repeatmasker"></div>
   <div style="width: 100%" id="cdf_plot_repeatmasker"></div>



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
         
            // Build cdf plot for repeatmasker
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/repeatmasker/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_repeatmasker', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for repeatmasker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/repeatmasker/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_repeatmasker', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for repeatmasker
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/repeatmasker/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_repeatmasker', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmasker/README.html