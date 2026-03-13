:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starfish'
.. highlight: bash

starfish
========

.. conda:recipe:: starfish
   :replaces_section_title:
   :noindex:

   Standardized analysis pipeline for image\-based transcriptomics.

   :homepage: https://github.com/spacetx/starfish
   :documentation: https://spacetx-starfish.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`starfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish/meta.yaml>`_

   


.. conda:package:: starfish

   |downloads_starfish| |docker_starfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.27-0``,  ``0.0.26-2``,  ``0.0.25-2``,  ``0.0.23-2``,  ``0.0.21-2``,  ``0.0.20-2``,  ``0.0.19-2``,  ``0.0.18-2``,  ``0.0.17-2``,  ``0.0.16-2``,  ``0.0.14-2``,  ``0.0.14-1``,  ``0.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on docutils: ``<0.20``
   :depends on h5py: 
   :depends on jsonschema: ``<4.18``
   :depends on matplotlib-base: ``<3.8``
   :depends on mistune: ``0.8.4``
   :depends on numpy: ``<2``
   :depends on python: ``>=3.9,<3.13``
   :depends on read-roi: 
   :depends on referencing: 
   :depends on regional: 
   :depends on scikit-image: ``>0.22``
   :depends on scikit-learn: 
   :depends on seaborn-base: 
   :depends on semantic_version: 
   :depends on showit: 
   :depends on slicedimage: 
   :depends on sympy: 
   :depends on tqdm: 
   :depends on trackpy: 
   :depends on validators: 
   :depends on xarray: ``<2023.09``

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

    pixi global install starfish

to add into an existing workspace instead, run::

    pixi add starfish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install starfish

Alternatively, to install into a new environment, run::

    conda create -n envname starfish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/starfish:<tag>

(see `starfish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_starfish| image:: https://img.shields.io/conda/dn/bioconda/starfish.svg?style=flat
   :target: https://anaconda.org/bioconda/starfish
   :alt:   (downloads)
.. |docker_starfish| image:: https://quay.io/repository/biocontainers/starfish/status
   :target: https://quay.io/repository/biocontainers/starfish
.. _`starfish/tags`: https://quay.io/repository/biocontainers/starfish?tab=tags


.. raw:: html

    <script>
        var package = "starfish";
        var versions = ["0.4.0","0.3.4","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starfish/README.html