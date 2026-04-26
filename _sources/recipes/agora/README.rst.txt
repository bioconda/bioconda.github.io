:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agora'
.. highlight: bash

agora
=====

.. conda:recipe:: agora
   :replaces_section_title:
   :noindex:

   AGORA\: Algorithm for Gene Order Reconstruction in Ancestors

   :homepage: https://github.com/DyogenIBENS/Agora
   :documentation: https://github.com/DyogenIBENS/Agora/blob/master/doc/HowTo.md
   
   :license: GPL-3.0-or-later OR CeCILL-2.0
   :recipe: /`agora <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agora>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agora/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41559-022-01956-z`

   


.. conda:package:: agora

   |downloads_agora| |docker_agora|

   :versions:
      
      

      ``3.1-0``

      

   
   :depends on psutil: 
   :depends on python: ``>=3.5``

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

    pixi global install agora

to add into an existing workspace instead, run::

    pixi add agora

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install agora

Alternatively, to install into a new environment, run::

    conda create -n envname agora

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/agora:<tag>

(see `agora/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_agora| image:: https://img.shields.io/conda/dn/bioconda/agora.svg?style=flat
   :target: https://anaconda.org/bioconda/agora
   :alt:   (downloads)
.. |docker_agora| image:: https://quay.io/repository/biocontainers/agora/status
   :target: https://quay.io/repository/biocontainers/agora
.. _`agora/tags`: https://quay.io/repository/biocontainers/agora?tab=tags


.. raw:: html

    <script>
        var package = "agora";
        var versions = ["3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agora/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agora/README.html