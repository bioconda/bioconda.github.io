:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymisc-utils'
.. highlight: bash

pymisc-utils
============

.. conda:recipe:: pymisc-utils
   :replaces_section_title:
   :noindex:

   Utility library for rp\-bp

   :homepage: https://github.com/dieterich-lab/pymisc-utils
   :license: MIT
   :recipe: /`pymisc-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils/meta.yaml>`_

   


.. conda:package:: pymisc-utils

   |downloads_pymisc-utils| |docker_pymisc-utils|

   :versions:
      
      

      ``0.2.11-6``,  ``0.2.11-5``,  ``0.2.11-4``,  ``0.2.11-3``,  ``0.2.11-2``,  ``0.2.11-1``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``

      

   
   :depends on dask: 
   :depends on docopt: 
   :depends on fastparquet: 
   :depends on graphviz: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on nltk: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on paramiko: 
   :depends on pydot: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on six: 
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on xlrd: 

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

    pixi global install pymisc-utils

to add into an existing workspace instead, run::

    pixi add pymisc-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pymisc-utils

Alternatively, to install into a new environment, run::

    conda create -n envname pymisc-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pymisc-utils:<tag>

(see `pymisc-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pymisc-utils| image:: https://img.shields.io/conda/dn/bioconda/pymisc-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pymisc-utils
   :alt:   (downloads)
.. |docker_pymisc-utils| image:: https://quay.io/repository/biocontainers/pymisc-utils/status
   :target: https://quay.io/repository/biocontainers/pymisc-utils
.. _`pymisc-utils/tags`: https://quay.io/repository/biocontainers/pymisc-utils?tab=tags


.. raw:: html

    <script>
        var package = "pymisc-utils";
        var versions = ["0.2.11","0.2.11","0.2.11","0.2.11","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymisc-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymisc-utils/README.html