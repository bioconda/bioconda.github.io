:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'voronota'
.. highlight: bash

voronota
========

.. conda:recipe:: voronota
   :replaces_section_title:
   :noindex:

   Compute Voronoi diagram vertices for macromolecular structures

   :homepage: https://www.voronota.com/
   :developer docs: https://github.com/kliment-olechnovic/voronota
   :license: MIT / MIT
   :recipe: /`voronota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota/meta.yaml>`_
   :links: doi: :doi:`10.1002/jcc.23538`

   The analysis of macromolecular structures often requires a comprehensive definition of atomic neighborhoods.
   Such a definition can be based on the Voronoi diagram of balls\, where each ball represents an atom of some van der Waals radius.
   Voronota is a software tool for finding all the vertices of the Voronoi diagram of balls.
   Such vertices correspond to the centers of the empty tangent spheres defined by quadruples of balls.
   Voronota is especially suitable for processing three\-dimensional structures of biological macromolecules such as proteins and RNA.

   Since version 1.2 Voronota also uses the Voronoi vertices to construct inter\-atom contact surfaces and solvent accessible surfaces.
   Voronota provides tools to query contacts\, generate contacts graphics\, compare contacts and evaluate quality of protein structural models using contacts.

   Most of the new developments are happening in the expansions of Voronota\: Voronota\-JS\, Voronota\-LT and Voronota\-GL.

   Voronota and its expansions are developed by Kliment Olechnovic \(https\:\/\/www.kliment.lt\).



.. conda:package:: voronota

   |downloads_voronota| |docker_voronota|

   :versions:
      
      

      ``1.29.4781-0``,  ``1.29.4771-0``,  ``1.29.4723-0``,  ``1.29.4602-0``,  ``1.29.4592-0``,  ``1.29.4415-0``,  ``1.29.4412-0``,  ``1.29.4408-0``,  ``1.29.4370-0``

      

   
   :depends on glew: ``>=2.3.0,<2.4.0a0``
   :depends on glfw: ``>=3.4,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on llvm-openmp: ``>=19.1.7``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install voronota

to add into an existing workspace instead, run::

    pixi add voronota

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install voronota

Alternatively, to install into a new environment, run::

    conda create -n envname voronota

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/voronota:<tag>

(see `voronota/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_voronota| image:: https://img.shields.io/conda/dn/bioconda/voronota.svg?style=flat
   :target: https://anaconda.org/bioconda/voronota
   :alt:   (downloads)
.. |docker_voronota| image:: https://quay.io/repository/biocontainers/voronota/status
   :target: https://quay.io/repository/biocontainers/voronota
.. _`voronota/tags`: https://quay.io/repository/biocontainers/voronota?tab=tags


.. raw:: html

   <script>
      var package = "voronota";
      var versions = ["1.29.4781","1.29.4771","1.29.4723","1.29.4602","1.29.4592"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_voronota"></div>
   <div style="width: 100%" id="platform_plot_voronota"></div>
   <div style="width: 100%" id="cdf_plot_voronota"></div>



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
         
            // Build cdf plot for voronota
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/voronota/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_voronota', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for voronota
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/voronota/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_voronota', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for voronota
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/voronota/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_voronota', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/voronota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/voronota/README.html