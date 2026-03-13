:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'khipu-metabolomics'
.. highlight: bash

khipu-metabolomics
==================

.. conda:recipe:: khipu-metabolomics
   :replaces_section_title:
   :noindex:

   Python library for generalized\, low\-level annotation of MS metabolomics.

   :homepage: https://github.com/shuzhao-li/khipu
   :license: BSD / BSD-3-Clause
   :recipe: /`khipu-metabolomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khipu-metabolomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khipu-metabolomics/meta.yaml>`_

   


.. conda:package:: khipu-metabolomics

   |downloads_khipu-metabolomics| |docker_khipu-metabolomics|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``0.7.5-0``

      

   
   :depends on intervaltree: 
   :depends on isocor: 
   :depends on mass2chem: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on requests: 
   :depends on scipy: 
   :depends on treelib: 

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

    pixi global install khipu-metabolomics

to add into an existing workspace instead, run::

    pixi add khipu-metabolomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install khipu-metabolomics

Alternatively, to install into a new environment, run::

    conda create -n envname khipu-metabolomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/khipu-metabolomics:<tag>

(see `khipu-metabolomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_khipu-metabolomics| image:: https://img.shields.io/conda/dn/bioconda/khipu-metabolomics.svg?style=flat
   :target: https://anaconda.org/bioconda/khipu-metabolomics
   :alt:   (downloads)
.. |docker_khipu-metabolomics| image:: https://quay.io/repository/biocontainers/khipu-metabolomics/status
   :target: https://quay.io/repository/biocontainers/khipu-metabolomics
.. _`khipu-metabolomics/tags`: https://quay.io/repository/biocontainers/khipu-metabolomics?tab=tags


.. raw:: html

    <script>
        var package = "khipu-metabolomics";
        var versions = ["2.0.4","2.0.2","2.0.1","0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/khipu-metabolomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/khipu-metabolomics/README.html