:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mob_suite'
.. highlight: bash

mob_suite
=========

.. conda:recipe:: mob_suite
   :replaces_section_title:
   :noindex:

   MOB\-suite is a set of tools for finding\, typing and reconstruction of plasmids from draft and complete genome assemblies.

   :homepage: https://pypi.org/project/mob-suite/
   :documentation: https://github.com/phac-nml/mob-suite/blob/master/README.md
   
   :developer docs: https://github.com/phac-nml/mob-suite
   :license: APACHE / Apache-2.0
   :recipe: /`mob_suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite/meta.yaml>`_
   :links: biotools: :biotools:`mob-suite`, usegalaxy-eu: :usegalaxy-eu:`mob_recon`, usegalaxy-eu: :usegalaxy-eu:`mob_typer`, doi: :doi:`10.1099/mgen.0.000206`, doi: :doi:`10.1099/mgen.0.000435`

   


.. conda:package:: mob_suite

   |downloads_mob_suite| |docker_mob_suite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.9-1</code>,  <code>3.1.9-0</code>,  <code>3.1.8-1</code>,  <code>3.1.8-0</code>,  <code>3.1.7-0</code>,  <code>3.1.6-1</code>,  <code>3.1.6-0</code>,  <code>3.1.5-0</code>,  <code>3.1.4-0</code>,  </span></summary>
      

      ``3.1.9-1``,  ``3.1.9-0``,  ``3.1.8-1``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.6-1``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.2-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.9.1-0``,  ``1.4.9-1``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.6-1``,  ``1.4.5-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.8,<2``
   :depends on blast: ``>=2.9.0,<2.16.0``
   :depends on ete3: ``>=3.1.3``
   :depends on libsqlite: ``<3.49``
   :depends on mash: ``>=2.0``
   :depends on numpy: ``>=1.11.1,<1.23.5``
   :depends on pandas: ``>=0.22,<=1.5.3``
   :depends on pycurl: ``>=7.43.0``
   :depends on pytables: 
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=1.1.0``
   :depends on six: 

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

    pixi global install mob_suite

to add into an existing workspace instead, run::

    pixi add mob_suite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mob_suite

Alternatively, to install into a new environment, run::

    conda create -n envname mob_suite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mob_suite:<tag>

(see `mob_suite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mob_suite| image:: https://img.shields.io/conda/dn/bioconda/mob_suite.svg?style=flat
   :target: https://anaconda.org/bioconda/mob_suite
   :alt:   (downloads)
.. |docker_mob_suite| image:: https://quay.io/repository/biocontainers/mob_suite/status
   :target: https://quay.io/repository/biocontainers/mob_suite
.. _`mob_suite/tags`: https://quay.io/repository/biocontainers/mob_suite?tab=tags


.. raw:: html

   <script>
      var package = "mob_suite";
      var versions = ["3.1.9","3.1.9","3.1.8","3.1.8","3.1.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mob_suite"></div>
   <div style="width: 100%" id="platform_plot_mob_suite"></div>
   <div style="width: 100%" id="cdf_plot_mob_suite"></div>



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
         
            // Build cdf plot for mob_suite
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mob_suite/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mob_suite', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mob_suite
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mob_suite/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mob_suite', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mob_suite
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mob_suite/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mob_suite', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mob_suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mob_suite/README.html