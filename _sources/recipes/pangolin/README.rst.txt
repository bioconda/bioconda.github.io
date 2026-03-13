:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin'
.. highlight: bash

pangolin
========

.. conda:recipe:: pangolin
   :replaces_section_title:
   :noindex:

   Phylogenetic Assignment of Named Global Outbreak LINeages

   :homepage: https://github.com/cov-lineages/pangolin
   :license: GPL-3.0-only
   :recipe: /`pangolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`pangolin`

   


.. conda:package:: pangolin

   |downloads_pangolin| |docker_pangolin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.4-1</code>,  <code>4.3.4-0</code>,  <code>4.3.3-0</code>,  <code>4.3.2-0</code>,  <code>4.3.1-0</code>,  <code>4.3-2</code>,  <code>4.3-1</code>,  <code>4.3-0</code>,  <code>4.2-1</code>,  </span></summary>
      

      ``4.3.4-1``,  ``4.3.4-0``,  ``4.3.3-0``,  ``4.3.2-0``,  ``4.3.1-0``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``,  ``4.2-1``,  ``4.2-0``,  ``4.1.3-0``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.6-1``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-1``,  ``4.0.2-0``,  ``4.0.1-0``,  ``3.1.20-0``,  ``3.1.19-0``,  ``3.1.18-0``,  ``3.1.17-1``,  ``3.1.17-0``,  ``3.1.16-2``,  ``3.1.16-1``,  ``3.1.16-0``,  ``3.1.15-0``,  ``3.1.14-1``,  ``3.1.14-0``,  ``3.1.11-2``,  ``3.1.11-1``,  ``3.1.11-0``,  ``3.1.10-0``,  ``3.1.9-0``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.0.5-0``,  ``3.0.3-0``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4-0``,  ``2.3.8-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.11-0``,  ``2.1.10-1``,  ``2.1.10-0``,  ``2.1.7-0``,  ``1.1.14-0``,  ``1.1.13-0``,  ``1.1.11-0``,  ``1.1.5-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.74``
   :depends on conda: 
   :depends on constellations: ``>=0.0.15``
   :depends on git: 
   :depends on git-lfs: 
   :depends on gofasta: 
   :depends on joblib: ``>=0.11``
   :depends on minimap2: ``>=2.16``
   :depends on pandas: ``>=1.0.1``
   :depends on pangolin-data: ``>=1.2.133.2``
   :depends on pip: ``<25.3``
   :depends on pulp: ``>=2``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``>=0.23.1,<1.3.0``
   :depends on scorpio: ``>=0.3.12``
   :depends on setuptools: ``<81``
   :depends on snakemake-minimal: ``>=5.13,!=7.30.1,<8``
   :depends on ucsc-fatovcf: ``>=426``
   :depends on usher: ``>=0.6.2``

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

    pixi global install pangolin

to add into an existing workspace instead, run::

    pixi add pangolin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangolin

Alternatively, to install into a new environment, run::

    conda create -n envname pangolin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangolin:<tag>

(see `pangolin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangolin| image:: https://img.shields.io/conda/dn/bioconda/pangolin.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin
   :alt:   (downloads)
.. |docker_pangolin| image:: https://quay.io/repository/biocontainers/pangolin/status
   :target: https://quay.io/repository/biocontainers/pangolin
.. _`pangolin/tags`: https://quay.io/repository/biocontainers/pangolin?tab=tags


.. raw:: html

    <script>
        var package = "pangolin";
        var versions = ["4.3.4","4.3.4","4.3.3","4.3.2","4.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin/README.html