:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svsolver'
.. highlight: bash

svsolver
========

.. conda:recipe:: svsolver
   :replaces_section_title:
   :noindex:

   The svSolver includes three executable programs\: Presolver\(svpre\)\, Flowsolver\(svsolver\)\, Postsolver\(svpost\).

   :homepage: https://simtk.org/projects/simvascular/
   :developer docs: https://github.com/SimVascular/svSolver
   :license: BSD / BSD
   :recipe: /`svsolver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svsolver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svsolver/meta.yaml>`_

   


.. conda:package:: svsolver

   |downloads_svsolver| |docker_svsolver|

   :versions:
      
      

      ``2022.07.20-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.4.0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on mpich: ``>=3.4.3,<5.0a0``
   :depends on tbb: ``>=2020.2,<2021.0.0a0``
   :depends on vtk: ``>=8.1.1,<8.1.2.0a0``
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

    pixi global install svsolver

to add into an existing workspace instead, run::

    pixi add svsolver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svsolver

Alternatively, to install into a new environment, run::

    conda create -n envname svsolver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svsolver:<tag>

(see `svsolver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svsolver| image:: https://img.shields.io/conda/dn/bioconda/svsolver.svg?style=flat
   :target: https://anaconda.org/bioconda/svsolver
   :alt:   (downloads)
.. |docker_svsolver| image:: https://quay.io/repository/biocontainers/svsolver/status
   :target: https://quay.io/repository/biocontainers/svsolver
.. _`svsolver/tags`: https://quay.io/repository/biocontainers/svsolver?tab=tags


.. raw:: html

    <script>
        var package = "svsolver";
        var versions = ["2022.07.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svsolver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svsolver/README.html