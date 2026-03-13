:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trycycler'
.. highlight: bash

trycycler
=========

.. conda:recipe:: trycycler
   :replaces_section_title:
   :noindex:

   Trycycler is a tool for generating consensus long\-read assemblies for bacterial genomes.

   :homepage: https://github.com/rrwick/Trycycler
   :documentation: https://github.com/rrwick/Trycycler/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`trycycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trycycler/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02483-z`, biotools: :biotools:`trycycler`, usegalaxy-eu: :usegalaxy-eu:`trycycler_cluster`, usegalaxy-eu: :usegalaxy-eu:`trycycler_consensus`, usegalaxy-eu: :usegalaxy-eu:`trycycler_partition`, usegalaxy-eu: :usegalaxy-eu:`trycycler_reconcile_msa`, usegalaxy-eu: :usegalaxy-eu:`trycycler_subsample`

   


.. conda:package:: trycycler

   |downloads_trycycler| |docker_trycycler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.6-0</code>,  <code>0.5.5-1</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on mash: 
   :depends on miniasm: 
   :depends on minimap2: 
   :depends on muscle: ``<4``
   :depends on numpy: 
   :depends on pillow: 
   :depends on python: ``>=3.9``
   :depends on python-edlib: 
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-phangorn: 
   :depends on scipy: 
   :depends on setuptools: 

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

    pixi global install trycycler

to add into an existing workspace instead, run::

    pixi add trycycler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trycycler

Alternatively, to install into a new environment, run::

    conda create -n envname trycycler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trycycler:<tag>

(see `trycycler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trycycler| image:: https://img.shields.io/conda/dn/bioconda/trycycler.svg?style=flat
   :target: https://anaconda.org/bioconda/trycycler
   :alt:   (downloads)
.. |docker_trycycler| image:: https://quay.io/repository/biocontainers/trycycler/status
   :target: https://quay.io/repository/biocontainers/trycycler
.. _`trycycler/tags`: https://quay.io/repository/biocontainers/trycycler?tab=tags


.. raw:: html

    <script>
        var package = "trycycler";
        var versions = ["0.5.6","0.5.5","0.5.5","0.5.4","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trycycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trycycler/README.html