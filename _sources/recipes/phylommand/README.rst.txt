:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylommand'
.. highlight: bash

phylommand
==========

.. conda:recipe:: phylommand
   :replaces_section_title:
   :noindex:

   Command\-line phylogenetics tools.

   :homepage: https://github.com/mr-y/phylommand
   :license: GPLv3
   :recipe: /`phylommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand/meta.yaml>`_

   Command\-line tools to create\, manipulate\, and\/or analyze phylogenetic trees or pairwise alignments. Does not include \"rudisvg\" svg viewer.


.. conda:package:: phylommand

   |downloads_phylommand| |docker_phylommand|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on nlopt: ``>=2.8.0,<2.9.0a0``

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

    pixi global install phylommand

to add into an existing workspace instead, run::

    pixi add phylommand

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylommand

Alternatively, to install into a new environment, run::

    conda create -n envname phylommand

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylommand:<tag>

(see `phylommand/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylommand| image:: https://img.shields.io/conda/dn/bioconda/phylommand.svg?style=flat
   :target: https://anaconda.org/bioconda/phylommand
   :alt:   (downloads)
.. |docker_phylommand| image:: https://quay.io/repository/biocontainers/phylommand/status
   :target: https://quay.io/repository/biocontainers/phylommand
.. _`phylommand/tags`: https://quay.io/repository/biocontainers/phylommand?tab=tags


.. raw:: html

    <script>
        var package = "phylommand";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylommand/README.html