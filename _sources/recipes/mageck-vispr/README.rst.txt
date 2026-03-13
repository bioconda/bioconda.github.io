:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mageck-vispr'
.. highlight: bash

mageck-vispr
============

.. conda:recipe:: mageck-vispr
   :replaces_section_title:
   :noindex:

   MAGeCK\-VISPR is a comprehensive quality control\, analysis and visualization workflow for CRISPR\/Cas9 screens based on MAGeCK\, VISPR\, Snakemake\, FastQC and cutadapt.

   :homepage: https://bitbucket.org/liulab/mageck-vispr
   :license: MIT License
   :recipe: /`mageck-vispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck-vispr/meta.yaml>`_

   


.. conda:package:: mageck-vispr

   |downloads_mageck-vispr| |docker_mageck-vispr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.6-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.4.7-0</code>,  </span></summary>
      

      ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cutadapt: 
   :depends on fastqc: 
   :depends on jinja2: 
   :depends on mageck: ``>=0.5.9``
   :depends on python: ``>=3``
   :depends on snakemake: 
   :depends on vispr: 

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

    pixi global install mageck-vispr

to add into an existing workspace instead, run::

    pixi add mageck-vispr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mageck-vispr

Alternatively, to install into a new environment, run::

    conda create -n envname mageck-vispr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mageck-vispr:<tag>

(see `mageck-vispr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mageck-vispr| image:: https://img.shields.io/conda/dn/bioconda/mageck-vispr.svg?style=flat
   :target: https://anaconda.org/bioconda/mageck-vispr
   :alt:   (downloads)
.. |docker_mageck-vispr| image:: https://quay.io/repository/biocontainers/mageck-vispr/status
   :target: https://quay.io/repository/biocontainers/mageck-vispr
.. _`mageck-vispr/tags`: https://quay.io/repository/biocontainers/mageck-vispr?tab=tags


.. raw:: html

    <script>
        var package = "mageck-vispr";
        var versions = ["0.5.6","0.5.5","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck-vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck-vispr/README.html