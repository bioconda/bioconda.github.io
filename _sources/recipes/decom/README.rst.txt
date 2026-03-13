:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decom'
.. highlight: bash

decom
=====

.. conda:recipe:: decom
   :replaces_section_title:
   :noindex:

   decOM\: Microbial source tracking of ancient oral samples using k\-mers.

   :homepage: https://github.com/CamilaDuitama/decOM
   :license: MIT / MIT
   :recipe: /`decom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decom/meta.yaml>`_

   decOM is a similarity\-based microbial source tracking tool for contamination assessment of ancient oral samples using k\-mer\-based methods.



.. conda:package:: decom

   |downloads_decom| |docker_decom|

   :versions:
      
      

      ``0.0.32-2``,  ``0.0.32-1``,  ``0.0.32-0``

      

   
   :depends on colorama: 
   :depends on dask: ``>=2021.12.0``
   :depends on git: 
   :depends on importlib_resources: ``>=5.4.0``
   :depends on kmtricks: ``>=1.4.0``
   :depends on numpy: ``>=1.7``
   :depends on pandas: 
   :depends on plotly: ``>=5.5.0``
   :depends on python: ``>=3.9,<3.13``
   :depends on python-kaleido: 
   :depends on setuptools: 

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

    pixi global install decom

to add into an existing workspace instead, run::

    pixi add decom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install decom

Alternatively, to install into a new environment, run::

    conda create -n envname decom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/decom:<tag>

(see `decom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_decom| image:: https://img.shields.io/conda/dn/bioconda/decom.svg?style=flat
   :target: https://anaconda.org/bioconda/decom
   :alt:   (downloads)
.. |docker_decom| image:: https://quay.io/repository/biocontainers/decom/status
   :target: https://quay.io/repository/biocontainers/decom
.. _`decom/tags`: https://quay.io/repository/biocontainers/decom?tab=tags


.. raw:: html

    <script>
        var package = "decom";
        var versions = ["0.0.32","0.0.32","0.0.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decom/README.html