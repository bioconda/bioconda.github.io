:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chia-rep'
.. highlight: bash

chia-rep
========

.. conda:recipe:: chia-rep
   :replaces_section_title:
   :noindex:

   A package for measuring reproducibility of ChIA\-PET data.

   :homepage: https://github.com/c0ver/chia_rep
   :license: MIT / MIT
   :recipe: /`chia-rep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chia-rep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chia-rep/meta.yaml>`_

   


.. conda:package:: chia-rep

   |downloads_chia-rep| |docker_chia-rep|

   :versions:
      
      

      ``3.1.1-3``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``1.0.0-0``

      

   
   :depends on click: ``>=7.0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: ``>=1.17.0``
   :depends on pybedgraph: ``>=0.5.40``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.3.1``

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

    pixi global install chia-rep

to add into an existing workspace instead, run::

    pixi add chia-rep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chia-rep

Alternatively, to install into a new environment, run::

    conda create -n envname chia-rep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chia-rep:<tag>

(see `chia-rep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chia-rep| image:: https://img.shields.io/conda/dn/bioconda/chia-rep.svg?style=flat
   :target: https://anaconda.org/bioconda/chia-rep
   :alt:   (downloads)
.. |docker_chia-rep| image:: https://quay.io/repository/biocontainers/chia-rep/status
   :target: https://quay.io/repository/biocontainers/chia-rep
.. _`chia-rep/tags`: https://quay.io/repository/biocontainers/chia-rep?tab=tags


.. raw:: html

    <script>
        var package = "chia-rep";
        var versions = ["3.1.1","3.1.1","3.1.1","3.1.1","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chia-rep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chia-rep/README.html