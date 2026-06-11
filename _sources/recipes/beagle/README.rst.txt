:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beagle'
.. highlight: bash

beagle
======

.. conda:recipe:: beagle
   :replaces_section_title:
   :noindex:

   Beagle is a software package for phasing genotypes and for imputing ungenotyped markers.

   :homepage: http://faculty.washington.edu/browning/beagle/beagle.html
   :documentation: https://faculty.washington.edu/browning/beagle/beagle_5.4_18Mar22.pdf
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`beagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle/meta.yaml>`_
   :links: biotools: :biotools:`BEAGLE`, doi: :doi:`10.1086/521987`, doi: :doi:`10.1016/j.ajhg.2018.07.015`

   


.. conda:package:: beagle

   |downloads_beagle| |docker_beagle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.5_27Feb25.75f-0</code>,  <code>5.4_29Oct24.c8e-0</code>,  <code>5.4_27May24.118-0</code>,  <code>5.4_22Jul22.46e-0</code>,  <code>5.2_21Apr21.304-0</code>,  <code>5.1_24Aug19.3e8-1</code>,  <code>5.1_24Aug19.3e8-0</code>,  <code>4.1_21Jan17.6cc.jar-1</code>,  <code>4.1_21Jan17.6cc.jar-0</code>,  </span></summary>
      

      ``5.5_27Feb25.75f-0``,  ``5.4_29Oct24.c8e-0``,  ``5.4_27May24.118-0``,  ``5.4_22Jul22.46e-0``,  ``5.2_21Apr21.304-0``,  ``5.1_24Aug19.3e8-1``,  ``5.1_24Aug19.3e8-0``,  ``4.1_21Jan17.6cc.jar-1``,  ``4.1_21Jan17.6cc.jar-0``,  ``4.1_03May16.862.jar-0``,  ``4.0_06Jun17-3``,  ``4.0_06Jun17-2``,  ``4.0_06Jun17-1``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``

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

    pixi global install beagle

to add into an existing workspace instead, run::

    pixi add beagle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beagle

Alternatively, to install into a new environment, run::

    conda create -n envname beagle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beagle:<tag>

(see `beagle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beagle| image:: https://img.shields.io/conda/dn/bioconda/beagle.svg?style=flat
   :target: https://anaconda.org/bioconda/beagle
   :alt:   (downloads)
.. |docker_beagle| image:: https://quay.io/repository/biocontainers/beagle/status
   :target: https://quay.io/repository/biocontainers/beagle
.. _`beagle/tags`: https://quay.io/repository/biocontainers/beagle?tab=tags


.. raw:: html

   <script>
      var package = "beagle";
      var versions = ["5.5_27Feb25.75f","5.4_29Oct24.c8e","5.4_27May24.118","5.4_22Jul22.46e","5.2_21Apr21.304"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_beagle"></div>
   <div style="width: 100%" id="platform_plot_beagle"></div>
   <div style="width: 100%" id="cdf_plot_beagle"></div>



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
         
            // Build cdf plot for beagle
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beagle/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_beagle', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for beagle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beagle/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_beagle', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for beagle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beagle/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_beagle', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle/README.html