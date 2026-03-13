:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plncpro'
.. highlight: bash

plncpro
=======

.. conda:recipe:: plncpro
   :replaces_section_title:
   :noindex:

   PlncPRO is a program to predict long non\-coding \(lncRNAs\) transcripts using Random Forests.

   :homepage: https://github.com/urmi-21/PLncPRO
   :license: GNU General Public License
   :recipe: /`plncpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plncpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plncpro/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx866`

   


.. conda:package:: plncpro

   |downloads_plncpro| |docker_plncpro|

   :versions:
      
      

      ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``

      

   
   :depends on biopython: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on regex: 
   :depends on scikit-learn: 

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

    pixi global install plncpro

to add into an existing workspace instead, run::

    pixi add plncpro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plncpro

Alternatively, to install into a new environment, run::

    conda create -n envname plncpro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plncpro:<tag>

(see `plncpro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plncpro| image:: https://img.shields.io/conda/dn/bioconda/plncpro.svg?style=flat
   :target: https://anaconda.org/bioconda/plncpro
   :alt:   (downloads)
.. |docker_plncpro| image:: https://quay.io/repository/biocontainers/plncpro/status
   :target: https://quay.io/repository/biocontainers/plncpro
.. _`plncpro/tags`: https://quay.io/repository/biocontainers/plncpro?tab=tags


.. raw:: html

    <script>
        var package = "plncpro";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plncpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plncpro/README.html