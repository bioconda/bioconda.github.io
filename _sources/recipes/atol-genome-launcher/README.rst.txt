:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-genome-launcher'
.. highlight: bash

atol-genome-launcher
====================

.. conda:recipe:: atol-genome-launcher
   :replaces_section_title:
   :noindex:

   Utility code for AToL\'s Genome Engine. This package provides modules for launching assemblies and annotations based on metadata ingested by the atol\-bpa\-datamapper.

   :homepage: https://github.com/TomHarrop/atol-genome-launcher
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-genome-launcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-genome-launcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-genome-launcher/meta.yaml>`_

   


.. conda:package:: atol-genome-launcher

   |downloads_atol-genome-launcher| |docker_atol-genome-launcher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ca-certificates: 
   :depends on pandas: ``>=2.3.3,<3``
   :depends on pigz: 
   :depends on pydantic: ``>=2.12.5``
   :depends on python: ``>=3.12,<3.15``
   :depends on rclone: 
   :depends on snakemake: ``>=9.11.6,<10``
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

    pixi global install atol-genome-launcher

to add into an existing workspace instead, run::

    pixi add atol-genome-launcher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atol-genome-launcher

Alternatively, to install into a new environment, run::

    conda create -n envname atol-genome-launcher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atol-genome-launcher:<tag>

(see `atol-genome-launcher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atol-genome-launcher| image:: https://img.shields.io/conda/dn/bioconda/atol-genome-launcher.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-genome-launcher
   :alt:   (downloads)
.. |docker_atol-genome-launcher| image:: https://quay.io/repository/biocontainers/atol-genome-launcher/status
   :target: https://quay.io/repository/biocontainers/atol-genome-launcher
.. _`atol-genome-launcher/tags`: https://quay.io/repository/biocontainers/atol-genome-launcher?tab=tags


.. raw:: html

    <script>
        var package = "atol-genome-launcher";
        var versions = ["0.5.4","0.5.3","0.5.2","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-genome-launcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-genome-launcher/README.html