:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malder'
.. highlight: bash

malder
======

.. conda:recipe:: malder
   :replaces_section_title:
   :noindex:

   MALDER is a version of ALDER \(http\:\/\/groups.csail.mit.edu\/cb\/alder\/\) that has been modified to allow multiple admixture events.

   :homepage: https://github.com/joepickrell/malder
   :license: Custom OSS
   :recipe: /`malder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malder/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1313787111`

   


.. conda:package:: malder

   |downloads_malder| |docker_malder|

   :versions:
      
      

      ``1.0.1e83d4e-8``,  ``1.0.1e83d4e-7``,  ``1.0.1e83d4e-6``,  ``1.0.1e83d4e-5``,  ``1.0.1e83d4e-4``,  ``1.0.1e83d4e-3``,  ``1.0.1e83d4e-2``,  ``1.0.1e83d4e-1``,  ``1.0.1e83d4e-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblapacke: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``

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

    pixi global install malder

to add into an existing workspace instead, run::

    pixi add malder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install malder

Alternatively, to install into a new environment, run::

    conda create -n envname malder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/malder:<tag>

(see `malder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_malder| image:: https://img.shields.io/conda/dn/bioconda/malder.svg?style=flat
   :target: https://anaconda.org/bioconda/malder
   :alt:   (downloads)
.. |docker_malder| image:: https://quay.io/repository/biocontainers/malder/status
   :target: https://quay.io/repository/biocontainers/malder
.. _`malder/tags`: https://quay.io/repository/biocontainers/malder?tab=tags


.. raw:: html

    <script>
        var package = "malder";
        var versions = ["1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e","1.0.1e83d4e"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malder/README.html