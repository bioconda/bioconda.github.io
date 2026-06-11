:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'b2btools'
.. highlight: bash

b2btools
========

.. conda:recipe:: b2btools
   :replaces_section_title:
   :noindex:

   The bio2Byte software suite to predict protein biophysical properties.

   :homepage: https://bio2byte.be
   :documentation: https://bio2byte.be/b2btools/package-documentation
   
   :developer docs: https://bitbucket.org/bio2byte/b2btools_releases
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`b2btools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkab425`, doi: :doi:`10.3389/fmolb.2022.959956`, doi: :doi:`10.1038/ncomms3741`, doi: :doi:`10.1016/j.jmb.2022.167579`, doi: :doi:`10.1038/s41598-017-08366-3`, doi: :doi:`10.1093/bioinformatics/btz912`, doi: :doi:`10.1093/bioinformatics/btz274`, doi: :doi:`10.1093/nar/gkaa391`, biotools: :biotools:`b2btools`

   This package provides you with structural predictions for protein sequences made by the Bio2Byte group which researches the relation between protein sequence and biophysical behavior.

   List of available predictors\:
   1. DynaMine\: Fast predictor of protein backbone dynamics using only sequence information as input. The version here also predicts side\-chain dynamics and secondary structure predictors using the same principle.
   2. DisoMine\: Predicts protein disorder with recurrent neural networks not directly from the amino acid sequence\, but instead from more generic predictions of key biophysical properties\, here protein dynamics\, secondary structure\, and early folding.
   3. EfoldMine\: Predicts from the primary amino acid sequence of a protein\, which amino acids are likely involved in early folding events.
   4. AgMata\: Single\-sequence\-based predictor of protein regions that are likely to cause beta\-aggregation.
   5. PSPer\: PSP \(Phase Separating Protein\) predicts whether a protein is likely to phase\-separate with a particular mechanism involving RNA interacts \(FUS\-like proteins\).
   6. ShiftCrypt\: Auto\-encoding NMR chemical shifts from their native vector space to a residue\-level biophysical index.



.. conda:package:: b2btools

   |downloads_b2btools| |docker_b2btools|

   :versions:
      
      

      ``3.0.8-0``,  ``3.0.7-3``,  ``3.0.7-2``,  ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on hmmer: ``>=3.4``
   :depends on matplotlib-base: ``>=3.5``
   :depends on numpy: ``>=1.24,<1.25``
   :depends on pandas: ``>=1.1,<2``
   :depends on python: ``>=3.9``
   :depends on pytorch: ``>=2.2.0``
   :depends on requests: ``>=2,<3``
   :depends on scikit-learn: ``>=1.0.2``
   :depends on scipy: ``>=1.10.1``
   :depends on t-coffee: 
   :depends on urllib3: ``>=1.26``

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

    pixi global install b2btools

to add into an existing workspace instead, run::

    pixi add b2btools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install b2btools

Alternatively, to install into a new environment, run::

    conda create -n envname b2btools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/b2btools:<tag>

(see `b2btools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_b2btools| image:: https://img.shields.io/conda/dn/bioconda/b2btools.svg?style=flat
   :target: https://anaconda.org/bioconda/b2btools
   :alt:   (downloads)
.. |docker_b2btools| image:: https://quay.io/repository/biocontainers/b2btools/status
   :target: https://quay.io/repository/biocontainers/b2btools
.. _`b2btools/tags`: https://quay.io/repository/biocontainers/b2btools?tab=tags


.. raw:: html

   <script>
      var package = "b2btools";
      var versions = ["3.0.8","3.0.7","3.0.7","3.0.7","3.0.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_b2btools"></div>
   <div style="width: 100%" id="platform_plot_b2btools"></div>
   <div style="width: 100%" id="cdf_plot_b2btools"></div>



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
         
            // Build cdf plot for b2btools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/b2btools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_b2btools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for b2btools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/b2btools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_b2btools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for b2btools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/b2btools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_b2btools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
For questions about b2bTools\, contact bio2byte\@vub.be.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/b2btools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/b2btools/README.html