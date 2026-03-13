:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drug2cell'
.. highlight: bash

drug2cell
=========

.. conda:recipe:: drug2cell
   :replaces_section_title:
   :noindex:

   This is a collection of utility functions for gene group activity evaluation in scanpy

   :homepage: https://github.com/teichlab/drug2cell/
   :license: non-commercial license
   :recipe: /`drug2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drug2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drug2cell/meta.yaml>`_

   


.. conda:package:: drug2cell

   |downloads_drug2cell| |docker_drug2cell|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on anndata: 
   :depends on blitzgsea: 
   :depends on numpy: 
   :depends on pandas: ``>=1.5.3,<2.0``
   :depends on python: ``>=3.10,<3.11``
   :depends on scipy: 
   :depends on statsmodels: 

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

    pixi global install drug2cell

to add into an existing workspace instead, run::

    pixi add drug2cell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drug2cell

Alternatively, to install into a new environment, run::

    conda create -n envname drug2cell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drug2cell:<tag>

(see `drug2cell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drug2cell| image:: https://img.shields.io/conda/dn/bioconda/drug2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/drug2cell
   :alt:   (downloads)
.. |docker_drug2cell| image:: https://quay.io/repository/biocontainers/drug2cell/status
   :target: https://quay.io/repository/biocontainers/drug2cell
.. _`drug2cell/tags`: https://quay.io/repository/biocontainers/drug2cell?tab=tags


.. raw:: html

    <script>
        var package = "drug2cell";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drug2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drug2cell/README.html