:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaalishapes'
.. highlight: bash

rnaalishapes
============

.. conda:recipe:: rnaalishapes
   :replaces_section_title:
   :noindex:

   RNAalishapes is a tool for secondary structure prediction\, using shape abstraction. Input is a multiple sequence alignment. Pseudoknots are not considered at all.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnaalishapes
   :license: GPL-3.0-or-later
   :recipe: /`rnaalishapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaalishapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaalishapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnaalishapes

   |downloads_rnaalishapes| |docker_rnaalishapes|

   :versions:
      
      

      ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      

   
   :depends on bellmans-gapc: ``>=2024.01.12``
   :depends on bellmans-gapc: ``>=2024.1.12``
   :depends on libgcc: ``>=13``
   :depends on libopenblas: ``>=0.3.28,<1.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install rnaalishapes

to add into an existing workspace instead, run::

    pixi add rnaalishapes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaalishapes

Alternatively, to install into a new environment, run::

    conda create -n envname rnaalishapes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaalishapes:<tag>

(see `rnaalishapes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnaalishapes| image:: https://img.shields.io/conda/dn/bioconda/rnaalishapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaalishapes
   :alt:   (downloads)
.. |docker_rnaalishapes| image:: https://quay.io/repository/biocontainers/rnaalishapes/status
   :target: https://quay.io/repository/biocontainers/rnaalishapes
.. _`rnaalishapes/tags`: https://quay.io/repository/biocontainers/rnaalishapes?tab=tags


.. raw:: html

    <script>
        var package = "rnaalishapes";
        var versions = ["2.5.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaalishapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaalishapes/README.html