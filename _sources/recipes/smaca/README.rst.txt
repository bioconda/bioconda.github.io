:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smaca'
.. highlight: bash

smaca
=====

.. conda:recipe:: smaca
   :replaces_section_title:
   :noindex:

   smaca is a python tool to detect putative SMA carriers and estimate the absolute SMN1 copy\-number in a population.

   :homepage: https://github.com/babelomics/SMAca
   :license: GPL-3.0
   :recipe: /`smaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca/meta.yaml>`_
   :links: doi: :doi:`https://zenodo.org/badge/latestdoi/250259934`

   


.. conda:package:: smaca

   |downloads_smaca| |docker_smaca|

   :versions:
      
      

      ``1.2.3-6``,  ``1.2.3-5``,  ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends on click: 
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pysam: ``>=0.22.1,<0.23.0a0``
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

    pixi global install smaca

to add into an existing workspace instead, run::

    pixi add smaca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smaca

Alternatively, to install into a new environment, run::

    conda create -n envname smaca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smaca:<tag>

(see `smaca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smaca| image:: https://img.shields.io/conda/dn/bioconda/smaca.svg?style=flat
   :target: https://anaconda.org/bioconda/smaca
   :alt:   (downloads)
.. |docker_smaca| image:: https://quay.io/repository/biocontainers/smaca/status
   :target: https://quay.io/repository/biocontainers/smaca
.. _`smaca/tags`: https://quay.io/repository/biocontainers/smaca?tab=tags


.. raw:: html

    <script>
        var package = "smaca";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smaca/README.html