:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hydra-multi'
.. highlight: bash

hydra-multi
===========

.. conda:recipe:: hydra-multi
   :replaces_section_title:
   :noindex:

   Hydra detects structural variation breakpoints in both unique and duplicated genomic regions.

   :homepage: https://github.com/arq5x/Hydra
   :license: MIT
   :recipe: /`hydra-multi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-multi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-multi/meta.yaml>`_

   


.. conda:package:: hydra-multi

   |downloads_hydra-multi| |docker_hydra-multi|

   :versions:
      
      

      ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``

      

   
   :depends on bedtools: ``>=2.31.1,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on pysam: ``0.7.7.*``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: ``0.1.19.*``

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

    pixi global install hydra-multi

to add into an existing workspace instead, run::

    pixi add hydra-multi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hydra-multi

Alternatively, to install into a new environment, run::

    conda create -n envname hydra-multi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hydra-multi:<tag>

(see `hydra-multi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hydra-multi| image:: https://img.shields.io/conda/dn/bioconda/hydra-multi.svg?style=flat
   :target: https://anaconda.org/bioconda/hydra-multi
   :alt:   (downloads)
.. |docker_hydra-multi| image:: https://quay.io/repository/biocontainers/hydra-multi/status
   :target: https://quay.io/repository/biocontainers/hydra-multi
.. _`hydra-multi/tags`: https://quay.io/repository/biocontainers/hydra-multi?tab=tags


.. raw:: html

    <script>
        var package = "hydra-multi";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hydra-multi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hydra-multi/README.html