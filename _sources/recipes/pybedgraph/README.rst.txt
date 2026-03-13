:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedgraph'
.. highlight: bash

pybedgraph
==========

.. conda:recipe:: pybedgraph
   :replaces_section_title:
   :noindex:

   A package for fast operations on 1\-dimensional genomic signal tracks

   :homepage: https://github.com/TheJacksonLaboratory/pyBedGraph
   :license: MIT / MIT
   :recipe: /`pybedgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph/meta.yaml>`_

   


.. conda:package:: pybedgraph

   |downloads_pybedgraph| |docker_pybedgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.43-6</code>,  <code>0.5.43-5</code>,  <code>0.5.43-4</code>,  <code>0.5.43-3</code>,  <code>0.5.43-2</code>,  <code>0.5.43-1</code>,  <code>0.5.43-0</code>,  <code>0.5.42-0</code>,  <code>0.5.39-0</code>,  </span></summary>
      

      ``0.5.43-6``,  ``0.5.43-5``,  ``0.5.43-4``,  ``0.5.43-3``,  ``0.5.43-2``,  ``0.5.43-1``,  ``0.5.43-0``,  ``0.5.42-0``,  ``0.5.39-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.36-0``,  ``0.5.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.16.4``
   :depends on pybigwig: ``>=0.3.16``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pybedgraph

to add into an existing workspace instead, run::

    pixi add pybedgraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybedgraph

Alternatively, to install into a new environment, run::

    conda create -n envname pybedgraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybedgraph:<tag>

(see `pybedgraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybedgraph| image:: https://img.shields.io/conda/dn/bioconda/pybedgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedgraph
   :alt:   (downloads)
.. |docker_pybedgraph| image:: https://quay.io/repository/biocontainers/pybedgraph/status
   :target: https://quay.io/repository/biocontainers/pybedgraph
.. _`pybedgraph/tags`: https://quay.io/repository/biocontainers/pybedgraph?tab=tags


.. raw:: html

    <script>
        var package = "pybedgraph";
        var versions = ["0.5.43","0.5.43","0.5.43","0.5.43","0.5.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedgraph/README.html