:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastphylo'
.. highlight: bash

fastphylo
=========

.. conda:recipe:: fastphylo
   :replaces_section_title:
   :noindex:

   Fastphylo is software project containing the implementations of the algorithms \"Fast Computation of Distance Estimators\" and \"Fast Neighbor Joining\".

   :homepage: https://github.com/arvestad/FastPhylo
   :license: MIT
   :recipe: /`fastphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-14-334`

   


.. conda:package:: fastphylo

   |downloads_fastphylo| |docker_fastphylo|

   :versions:
      
      

      ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libxml2: ``>=2.11.4,<2.12.0a0``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on openmpi: ``<4.0.2``
   :depends on openmpi: ``>=4.0.1,<4.1.0a0``
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

    pixi global install fastphylo

to add into an existing workspace instead, run::

    pixi add fastphylo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastphylo

Alternatively, to install into a new environment, run::

    conda create -n envname fastphylo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastphylo:<tag>

(see `fastphylo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastphylo| image:: https://img.shields.io/conda/dn/bioconda/fastphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/fastphylo
   :alt:   (downloads)
.. |docker_fastphylo| image:: https://quay.io/repository/biocontainers/fastphylo/status
   :target: https://quay.io/repository/biocontainers/fastphylo
.. _`fastphylo/tags`: https://quay.io/repository/biocontainers/fastphylo?tab=tags


.. raw:: html

    <script>
        var package = "fastphylo";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastphylo/README.html