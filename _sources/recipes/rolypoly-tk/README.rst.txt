:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rolypoly-tk'
.. highlight: bash

rolypoly-tk
===========

.. conda:recipe:: rolypoly-tk
   :replaces_section_title:
   :noindex:

   RNA virus analysis toolkit

   :homepage: https://github.com/UriNeri/rolypoly
   :documentation: https://urineri.github.io/rolypoly/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rolypoly-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rolypoly-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rolypoly-tk/meta.yaml>`_

   RolyPoly is an RNA virus analysis toolkit. This package installs the
   Python library and all third\-party dependencies\/command\-line tools for
   the complete rolypoly suite \(all commands\)\, including read processing\,
   assembly\, RNA\/protein annotation\, virus identification\, and contig
   clustering.



.. conda:package:: rolypoly-tk

   |downloads_rolypoly-tk| |docker_rolypoly-tk|

   :versions:
      
      

      ``0.7.17-0``

      

   
   :depends on aragorn: ``>=1.2.41,<2``
   :depends on aria2: ``>=1.37.0``
   :depends on bbmapy: ``>=0.0.57,<0.0.59``
   :depends on blast: ``>=2.17.0,<3``
   :depends on bwa-mem2: ``>=2.3,<3``
   :depends on diamond: ``>=2.2.4,<3``
   :depends on falco: ``>=1.3.1``
   :depends on infernal: ``>=1.1.5,<2``
   :depends on intervaltree: ``>=3.1.0,<4``
   :depends on leidenalg: ``>=0.12.0,<0.13``
   :depends on linearfold: ``>=1.0.1.dev20220829,<2``
   :depends on mappy: ``>=2.30,<3``
   :depends on megahit: ``>=1.2.9,<2``
   :depends on mmseqs2: ``>=18.8cc5c,<19``
   :depends on needletail: ``>=0.7.3,<0.8``
   :depends on numpy: ``>=2.3.0,<3``
   :depends on parasail-python: ``>=1.3.4,<2``
   :depends on pigz: ``>=2.8``
   :depends on plass: ``>=5.cf8933,<6``
   :depends on polars: ``>=1.29.0,<2``
   :depends on psutil: ``>=7.2.2``
   :depends on pyarrow: ``>=25.0.0,<26``
   :depends on pydustmasker: ``>=3.2.0,<4``
   :depends on pyfastani: ``>=0.6.1,<0.7``
   :depends on pyfastx: ``>=2.3.1,<3``
   :depends on pyhmmer: ``>=0.12.1,<0.13``
   :depends on pyopal: ``>=0.7.3,<0.8``
   :depends on pyrodigal-rv: ``>=0.1.0,<0.2``
   :depends on pyskani: ``>=0.2.0,<0.3``
   :depends on python: ``>=3.10,<3.14``
   :depends on python-igraph: ``>=1.0.0,<2``
   :depends on python-xxhash: ``>=3.6.0,<4``
   :depends on requests: ``>=2.34.2``
   :depends on rich: ``>=15.0.0``
   :depends on rich-click: ``>=1.9.8,<2``
   :depends on seqkit: ``>=2.13.0,<3``
   :depends on spades: ``>=4.3.0,<5``
   :depends on trnascan-se: ``>=2.0.13,<3``
   :depends on viennarna: ``>=2.7.2,<3``

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

    pixi global install rolypoly-tk

to add into an existing workspace instead, run::

    pixi add rolypoly-tk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rolypoly-tk

Alternatively, to install into a new environment, run::

    conda create -n envname rolypoly-tk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rolypoly-tk:<tag>

(see `rolypoly-tk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rolypoly-tk| image:: https://img.shields.io/conda/dn/bioconda/rolypoly-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/rolypoly-tk
   :alt:   (downloads)
.. |docker_rolypoly-tk| image:: https://quay.io/repository/biocontainers/rolypoly-tk/status
   :target: https://quay.io/repository/biocontainers/rolypoly-tk
.. _`rolypoly-tk/tags`: https://quay.io/repository/biocontainers/rolypoly-tk?tab=tags


.. raw:: html

   <script>
      var package = "rolypoly-tk";
      var versions = ["0.7.17"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rolypoly-tk"></div>
   <div style="width: 100%" id="platform_plot_rolypoly-tk"></div>
   <div style="width: 100%" id="cdf_plot_rolypoly-tk"></div>



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
         
            // Build cdf plot for rolypoly-tk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rolypoly-tk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rolypoly-tk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rolypoly-tk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rolypoly-tk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rolypoly-tk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rolypoly-tk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rolypoly-tk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rolypoly-tk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rolypoly-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rolypoly-tk/README.html