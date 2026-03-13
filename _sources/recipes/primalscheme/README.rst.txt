:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primalscheme'
.. highlight: bash

primalscheme
============

.. conda:recipe:: primalscheme
   :replaces_section_title:
   :noindex:

   primalscheme is a tool for designing primer panels for multiplex PCR

   :homepage: https://github.com/aresti/primalscheme
   :license: GPL3 / GPL-3
   :recipe: /`primalscheme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme/meta.yaml>`_
   :links: doi: :doi:`10.1038/nprot.2017.066`

   


.. conda:package:: primalscheme

   |downloads_primalscheme| |docker_primalscheme|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``

      

   
   :depends on biopython: ``>=1,<2``
   :depends on click: ``>=8.1.3``
   :depends on parasail-python: ``>=1.2``
   :depends on primer3-py: ``>=0,<1``
   :depends on progress: ``>=1.5``
   :depends on python: 
   :depends on reportlab: ``>=3,<4``

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

    pixi global install primalscheme

to add into an existing workspace instead, run::

    pixi add primalscheme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install primalscheme

Alternatively, to install into a new environment, run::

    conda create -n envname primalscheme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/primalscheme:<tag>

(see `primalscheme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_primalscheme| image:: https://img.shields.io/conda/dn/bioconda/primalscheme.svg?style=flat
   :target: https://anaconda.org/bioconda/primalscheme
   :alt:   (downloads)
.. |docker_primalscheme| image:: https://quay.io/repository/biocontainers/primalscheme/status
   :target: https://quay.io/repository/biocontainers/primalscheme
.. _`primalscheme/tags`: https://quay.io/repository/biocontainers/primalscheme?tab=tags


.. raw:: html

    <script>
        var package = "primalscheme";
        var versions = ["1.4.1","1.4.0","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primalscheme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primalscheme/README.html