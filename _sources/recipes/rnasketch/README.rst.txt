:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasketch'
.. highlight: bash

rnasketch
=========

.. conda:recipe:: rnasketch
   :replaces_section_title:
   :noindex:

   RNAsketch Library for designing RNA molecules. Glue between RNAblueprint\/RNARedPrint and ViennaRNA\, Nupack\, Hotknots\, pKiss.

   :homepage: https://github.com/ViennaRNA/RNAsketch
   :license: GPL3
   :recipe: /`rnasketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch/meta.yaml>`_

   


.. conda:package:: rnasketch

   |downloads_rnasketch| |docker_rnasketch|

   :versions:
      
      

      ``1.5-2``,  ``1.5-1``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends on numpy: ``>=1.15*``
   :depends on python: ``<3``
   :depends on python-igraph: 
   :depends on rnablueprint: ``>=1.2``
   :depends on scipy: ``>=1.1*``
   :depends on viennarna: ``>=2.4*``

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

    pixi global install rnasketch

to add into an existing workspace instead, run::

    pixi add rnasketch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnasketch

Alternatively, to install into a new environment, run::

    conda create -n envname rnasketch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnasketch:<tag>

(see `rnasketch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnasketch| image:: https://img.shields.io/conda/dn/bioconda/rnasketch.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasketch
   :alt:   (downloads)
.. |docker_rnasketch| image:: https://quay.io/repository/biocontainers/rnasketch/status
   :target: https://quay.io/repository/biocontainers/rnasketch
.. _`rnasketch/tags`: https://quay.io/repository/biocontainers/rnasketch?tab=tags


.. raw:: html

    <script>
        var package = "rnasketch";
        var versions = ["1.5","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasketch/README.html