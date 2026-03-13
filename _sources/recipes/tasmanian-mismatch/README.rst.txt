:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tasmanian-mismatch'
.. highlight: bash

tasmanian-mismatch
==================

.. conda:recipe:: tasmanian-mismatch
   :replaces_section_title:
   :noindex:

   Tasmanian tool to analyze mismatches at read and position in high throughput sequencing data.

   :homepage: https://github.com/nebiolabs/tasmanian-mismatch
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`tasmanian-mismatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch/meta.yaml>`_

   


.. conda:package:: tasmanian-mismatch

   |downloads_tasmanian-mismatch| |docker_tasmanian-mismatch|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``<3.13``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 
   :depends on termcolor: 

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

    pixi global install tasmanian-mismatch

to add into an existing workspace instead, run::

    pixi add tasmanian-mismatch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tasmanian-mismatch

Alternatively, to install into a new environment, run::

    conda create -n envname tasmanian-mismatch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tasmanian-mismatch:<tag>

(see `tasmanian-mismatch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tasmanian-mismatch| image:: https://img.shields.io/conda/dn/bioconda/tasmanian-mismatch.svg?style=flat
   :target: https://anaconda.org/bioconda/tasmanian-mismatch
   :alt:   (downloads)
.. |docker_tasmanian-mismatch| image:: https://quay.io/repository/biocontainers/tasmanian-mismatch/status
   :target: https://quay.io/repository/biocontainers/tasmanian-mismatch
.. _`tasmanian-mismatch/tags`: https://quay.io/repository/biocontainers/tasmanian-mismatch?tab=tags


.. raw:: html

    <script>
        var package = "tasmanian-mismatch";
        var versions = ["1.0.9","1.0.7","1.0.6","1.0.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tasmanian-mismatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tasmanian-mismatch/README.html