:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rvtests'
.. highlight: bash

rvtests
=======

.. conda:recipe:: rvtests
   :replaces_section_title:
   :noindex:

   Rare variant test software for next generation sequencing data

   :homepage: https://github.com/zhanxw/rvtests
   :license: GPL
   :recipe: /`rvtests <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rvtests>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rvtests/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw079`, biotools: :biotools:`rvtests`

   


.. conda:package:: rvtests

   |downloads_rvtests| |docker_rvtests|

   :versions:
      
      

      ``2.0.7-2``,  ``2.0.6-1``

      

   
   :depends on libgfortran: ``>=3.0``
   :depends on libstdcxx-ng: ``>=4.9``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install rvtests

to add into an existing workspace instead, run::

    pixi add rvtests

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rvtests

Alternatively, to install into a new environment, run::

    conda create -n envname rvtests

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rvtests:<tag>

(see `rvtests/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rvtests| image:: https://img.shields.io/conda/dn/bioconda/rvtests.svg?style=flat
   :target: https://anaconda.org/bioconda/rvtests
   :alt:   (downloads)
.. |docker_rvtests| image:: https://quay.io/repository/biocontainers/rvtests/status
   :target: https://quay.io/repository/biocontainers/rvtests
.. _`rvtests/tags`: https://quay.io/repository/biocontainers/rvtests?tab=tags


.. raw:: html

    <script>
        var package = "rvtests";
        var versions = ["2.0.7","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rvtests/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rvtests/README.html