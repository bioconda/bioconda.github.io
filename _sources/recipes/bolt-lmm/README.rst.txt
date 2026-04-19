:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bolt-lmm'
.. highlight: bash

bolt-lmm
========

.. conda:recipe:: bolt-lmm
   :replaces_section_title:
   :noindex:

   Efficient large cohorts genome\-wide Bayesian mixed\-model association testing

   :homepage: https://alkesgroup.broadinstitute.org/BOLT-LMM/
   :license: GPL-3+
   :recipe: /`bolt-lmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt-lmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt-lmm/meta.yaml>`_
   :links: doi: :doi:`10.1038/ng.3190`

   


.. conda:package:: bolt-lmm

   |downloads_bolt-lmm| |docker_bolt-lmm|

   :versions:
      
      

      ``2.5-0``,  ``2.3.4-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on nlopt: ``>=2.8.0,<2.9.0a0``
   :depends on openblas: 
   :depends on zlib: 

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

    pixi global install bolt-lmm

to add into an existing workspace instead, run::

    pixi add bolt-lmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bolt-lmm

Alternatively, to install into a new environment, run::

    conda create -n envname bolt-lmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bolt-lmm:<tag>

(see `bolt-lmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bolt-lmm| image:: https://img.shields.io/conda/dn/bioconda/bolt-lmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bolt-lmm
   :alt:   (downloads)
.. |docker_bolt-lmm| image:: https://quay.io/repository/biocontainers/bolt-lmm/status
   :target: https://quay.io/repository/biocontainers/bolt-lmm
.. _`bolt-lmm/tags`: https://quay.io/repository/biocontainers/bolt-lmm?tab=tags


.. raw:: html

    <script>
        var package = "bolt-lmm";
        var versions = ["2.5","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bolt-lmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bolt-lmm/README.html