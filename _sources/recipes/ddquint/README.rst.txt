:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddquint'
.. highlight: bash

ddquint
=======

.. conda:recipe:: ddquint
   :replaces_section_title:
   :noindex:

   Droplet Digital PCR Multiplex Analysis for chromosomal copy number detection

   :homepage: https://github.com/globuzzz2000/ddQuint
   :license: MIT
   :recipe: /`ddquint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddquint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddquint/meta.yaml>`_

   


.. conda:package:: ddquint

   |downloads_ddquint| |docker_ddquint|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on colorama: ``>=0.4.4``
   :depends on hdbscan: ``>=0.8.27``
   :depends on matplotlib-base: ``>=3.3``
   :depends on numpy: ``>=1.18``
   :depends on openpyxl: ``>=3.0.5``
   :depends on pandas: ``>=1.0``
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``>=0.24``
   :depends on scipy: ``>=1.11``
   :depends on seaborn: ``>=0.13``
   :depends on send2trash: ``>=1.8.2``
   :depends on tqdm: ``>=4.60.0``
   :depends on wxpython: ``>=4.1.0``

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

    pixi global install ddquint

to add into an existing workspace instead, run::

    pixi add ddquint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ddquint

Alternatively, to install into a new environment, run::

    conda create -n envname ddquint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ddquint:<tag>

(see `ddquint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ddquint| image:: https://img.shields.io/conda/dn/bioconda/ddquint.svg?style=flat
   :target: https://anaconda.org/bioconda/ddquint
   :alt:   (downloads)
.. |docker_ddquint| image:: https://quay.io/repository/biocontainers/ddquint/status
   :target: https://quay.io/repository/biocontainers/ddquint
.. _`ddquint/tags`: https://quay.io/repository/biocontainers/ddquint?tab=tags


.. raw:: html

    <script>
        var package = "ddquint";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddquint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddquint/README.html