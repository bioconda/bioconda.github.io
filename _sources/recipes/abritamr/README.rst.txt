:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abritamr'
.. highlight: bash

abritamr
========

.. conda:recipe:: abritamr
   :replaces_section_title:
   :noindex:

   Running AMRFinderPlus for MDU.

   :homepage: https://github.com/MDU-PHL/abritamr
   :license: GPL3 / GPL-3.0-only
   :recipe: /`abritamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr/meta.yaml>`_
   :links: biotools: :biotools:`abritamr`

   


.. conda:package:: abritamr

   |downloads_abritamr| |docker_abritamr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.20-0</code>,  <code>1.0.19-0</code>,  <code>1.0.18-0</code>,  <code>1.0.17-2</code>,  <code>1.0.17-1</code>,  <code>1.0.17-0</code>,  <code>1.0.14-1</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  </span></summary>
      

      ``1.0.20-0``,  ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-2``,  ``1.0.17-1``,  ``1.0.17-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on hmmer: 
   :depends on ncbi-amrfinderplus: ``3.12.8.*``
   :depends on pandas: 
   :depends on parallel: 
   :depends on python: ``>=3.9``
   :depends on xlsxwriter: 

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

    pixi global install abritamr

to add into an existing workspace instead, run::

    pixi add abritamr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abritamr

Alternatively, to install into a new environment, run::

    conda create -n envname abritamr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abritamr:<tag>

(see `abritamr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abritamr| image:: https://img.shields.io/conda/dn/bioconda/abritamr.svg?style=flat
   :target: https://anaconda.org/bioconda/abritamr
   :alt:   (downloads)
.. |docker_abritamr| image:: https://quay.io/repository/biocontainers/abritamr/status
   :target: https://quay.io/repository/biocontainers/abritamr
.. _`abritamr/tags`: https://quay.io/repository/biocontainers/abritamr?tab=tags


.. raw:: html

    <script>
        var package = "abritamr";
        var versions = ["1.0.20","1.0.19","1.0.18","1.0.17","1.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abritamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abritamr/README.html