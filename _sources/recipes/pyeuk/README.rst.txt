:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyeuk'
.. highlight: bash

pyeuk
=====

.. conda:recipe:: pyeuk
   :replaces_section_title:
   :noindex:

   MLST\/cgMLST typing\, dropout\-robust genetic distance estimation\, and outbreak clustering for eukaryotic and microbial pathogens.

   :homepage: https://github.com/spond/pyeuk
   :license: APACHE / Apache-2.0
   :recipe: /`pyeuk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeuk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeuk/meta.yaml>`_

   PyEuk is a Python framework for molecular typing\, genetic distance
   estimation\, and foodborne\/waterborne outbreak cluster detection in
   eukaryotic and microbial pathogens\, including Cyclospora cayetanensis\,
   Cryptosporidium parvum\/hominis\, and general MLST\/cgMLST schemes. It
   provides reference\-free de novo locus and haplotype discovery from
   assembled contigs\, a weighted identity\-by\-state \(wIBS\) distance engine
   with selectable allele weighting\, pairwise\-complete dropout tolerance
   and optional PSD Gram matrix projection\, and unsupervised Ward
   hierarchical clustering with either knee\-based selection of the
   cluster count or a distance\-threshold cut for surveillance cohorts
   whose structure is mostly singletons. An amplicon front end turns
   aligned reads into the haplotype sheet directly\: analysis windows are
   derived from the reads themselves\, and each haplotype is read off a
   single read that spans the window end to end\, so linkage between
   positions is observed on one molecule rather than inferred across
   molecules.



.. conda:package:: pyeuk

   |downloads_pyeuk| |docker_pyeuk|

   :versions:
      
      

      ``0.7.0-0``

      

   
   :depends on numba: ``>=0.53.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on pillow: ``>=9``
   :depends on pysam: ``>=0.22``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on scipy: ``>=1.7.0``

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

    pixi global install pyeuk

to add into an existing workspace instead, run::

    pixi add pyeuk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyeuk

Alternatively, to install into a new environment, run::

    conda create -n envname pyeuk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyeuk:<tag>

(see `pyeuk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyeuk| image:: https://img.shields.io/conda/dn/bioconda/pyeuk.svg?style=flat
   :target: https://anaconda.org/bioconda/pyeuk
   :alt:   (downloads)
.. |docker_pyeuk| image:: https://quay.io/repository/biocontainers/pyeuk/status
   :target: https://quay.io/repository/biocontainers/pyeuk
.. _`pyeuk/tags`: https://quay.io/repository/biocontainers/pyeuk?tab=tags


.. raw:: html

   <script>
      var package = "pyeuk";
      var versions = ["0.7.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_pyeuk"></div>
   <div style="width: 100%" id="platform_plot_pyeuk"></div>
   <div style="width: 100%" id="cdf_plot_pyeuk"></div>



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
         
            // Build cdf plot for pyeuk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pyeuk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_pyeuk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for pyeuk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pyeuk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_pyeuk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for pyeuk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/pyeuk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_pyeuk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyeuk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyeuk/README.html