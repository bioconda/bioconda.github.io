:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arborator'
.. highlight: bash

arborator
=========

.. conda:recipe:: arborator
   :replaces_section_title:
   :noindex:

   Arborator\: Simplifying operationalized pathogen surveillance and outbreak detection.

   :homepage: https://github.com/phac-nml/arborator
   :license: APACHE / Apache-2.0
   :recipe: /`arborator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborator/meta.yaml>`_

   


.. conda:package:: arborator

   |downloads_arborator| |docker_arborator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  </span></summary>
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fastparquet: ``>=2023.4.0``
   :depends on genomic_address_service: 
   :depends on numba: ``>=0.57.1,<=0.61.2``
   :depends on numpy: ``>=1.24.4,<2.0.0``
   :depends on openpyxl: 
   :depends on pandas: ``>=2.0.2,<2.2.0``
   :depends on profile_dists: 
   :depends on psutil: 
   :depends on pyarrow: ``>=14.0.0``
   :depends on pytables: ``>=3.8.0``
   :depends on python: ``>=3.8.2,<3.12``
   :depends on scipy: 
   :depends on six: ``>=1.16.0``

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

    pixi global install arborator

to add into an existing workspace instead, run::

    pixi add arborator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arborator

Alternatively, to install into a new environment, run::

    conda create -n envname arborator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arborator:<tag>

(see `arborator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arborator| image:: https://img.shields.io/conda/dn/bioconda/arborator.svg?style=flat
   :target: https://anaconda.org/bioconda/arborator
   :alt:   (downloads)
.. |docker_arborator| image:: https://quay.io/repository/biocontainers/arborator/status
   :target: https://quay.io/repository/biocontainers/arborator
.. _`arborator/tags`: https://quay.io/repository/biocontainers/arborator?tab=tags


.. raw:: html

    <script>
        var package = "arborator";
        var versions = ["1.2.2","1.2.1","1.2.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arborator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arborator/README.html