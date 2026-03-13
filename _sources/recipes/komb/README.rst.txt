:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'komb'
.. highlight: bash

komb
====

.. conda:recipe:: komb
   :replaces_section_title:
   :noindex:

   Characterizing metagenomes using K\-Core decomposition

   :homepage: https://gitlab.com/treangenlab/komb
   :license: GPL-3.0-or-later
   :recipe: /`komb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb/meta.yaml>`_

   


.. conda:package:: komb

   |downloads_komb| |docker_komb|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends on abyss: ``2.0.2.*``
   :depends on bifrost: ``>=1.0.5``
   :depends on bowtie2: ``>=2.3.5.1``
   :depends on igraph: ``0.8.*``
   :depends on igraph: ``>=0.8.3,<0.9.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.12,<1.3.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: ``>=1.2.12,<1.3.0a0``

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

    pixi global install komb

to add into an existing workspace instead, run::

    pixi add komb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install komb

Alternatively, to install into a new environment, run::

    conda create -n envname komb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/komb:<tag>

(see `komb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_komb| image:: https://img.shields.io/conda/dn/bioconda/komb.svg?style=flat
   :target: https://anaconda.org/bioconda/komb
   :alt:   (downloads)
.. |docker_komb| image:: https://quay.io/repository/biocontainers/komb/status
   :target: https://quay.io/repository/biocontainers/komb
.. _`komb/tags`: https://quay.io/repository/biocontainers/komb?tab=tags


.. raw:: html

    <script>
        var package = "komb";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/komb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/komb/README.html