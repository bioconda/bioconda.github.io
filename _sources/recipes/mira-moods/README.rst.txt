:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira-moods'
.. highlight: bash

mira-moods
==========

.. conda:recipe:: mira-moods
   :replaces_section_title:
   :noindex:

   MOODS\: Motif Occurrence Detection Suite

   :homepage: https://www.cs.helsinki.fi/group/pssmfind/
   :license: MIT AND GPL-3.0
   :recipe: /`mira-moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: mira-moods

   |downloads_mira-moods| |docker_mira-moods|

   :versions:
      
      

      ``1.9.4.2-2``,  ``1.9.4.2-1``,  ``1.9.4.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on swig: 

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

    pixi global install mira-moods

to add into an existing workspace instead, run::

    pixi add mira-moods

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mira-moods

Alternatively, to install into a new environment, run::

    conda create -n envname mira-moods

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mira-moods:<tag>

(see `mira-moods/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mira-moods| image:: https://img.shields.io/conda/dn/bioconda/mira-moods.svg?style=flat
   :target: https://anaconda.org/bioconda/mira-moods
   :alt:   (downloads)
.. |docker_mira-moods| image:: https://quay.io/repository/biocontainers/mira-moods/status
   :target: https://quay.io/repository/biocontainers/mira-moods
.. _`mira-moods/tags`: https://quay.io/repository/biocontainers/mira-moods?tab=tags


.. raw:: html

    <script>
        var package = "mira-moods";
        var versions = ["1.9.4.2","1.9.4.2","1.9.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira-moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira-moods/README.html