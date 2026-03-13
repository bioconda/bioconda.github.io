:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grafimo'
.. highlight: bash

grafimo
=======

.. conda:recipe:: grafimo
   :replaces_section_title:
   :noindex:

   GRAFIMO\, GRAph\-based Finding of Indivividual Motif Occurrences

   :homepage: https://github.com/pinellolab/GRAFIMO
   :license: MIT
   :recipe: /`grafimo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grafimo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grafimo/meta.yaml>`_

   


.. conda:package:: grafimo

   |downloads_grafimo| |docker_grafimo|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.0.1-0``

      

   
   :depends on colorama: 
   :depends on graphviz: 
   :depends on htslib: 
   :depends on libgcc-ng: ``>=12``
   :depends on numba: ``>=0.47,<1``
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on pandas: ``>=1.4.4,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on statsmodels: ``>=0.11``
   :depends on vg: 

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

    pixi global install grafimo

to add into an existing workspace instead, run::

    pixi add grafimo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grafimo

Alternatively, to install into a new environment, run::

    conda create -n envname grafimo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grafimo:<tag>

(see `grafimo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grafimo| image:: https://img.shields.io/conda/dn/bioconda/grafimo.svg?style=flat
   :target: https://anaconda.org/bioconda/grafimo
   :alt:   (downloads)
.. |docker_grafimo| image:: https://quay.io/repository/biocontainers/grafimo/status
   :target: https://quay.io/repository/biocontainers/grafimo
.. _`grafimo/tags`: https://quay.io/repository/biocontainers/grafimo?tab=tags


.. raw:: html

    <script>
        var package = "grafimo";
        var versions = ["1.1.6","1.1.4","1.1.4","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grafimo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grafimo/README.html