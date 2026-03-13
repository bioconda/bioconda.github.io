:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miru-hero'
.. highlight: bash

miru-hero
=========

.. conda:recipe:: miru-hero
   :replaces_section_title:
   :noindex:

   Compute MIRU and Spoligotype from a M. tuberculosis genome

   :homepage: https://gitlab.com/LPCDRP/miru-hero
   :license: GPL / GPL-3.0-or-later
   :recipe: /`miru-hero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero/meta.yaml>`_

   Calculate the number and position of MIRU and Spoligotype sequences from a FASTA file\, output results 
   to a file\, and print octal Spoligotype results\, MIRU results\, and lineage results to screen



.. conda:package:: miru-hero

   |downloads_miru-hero| |docker_miru-hero|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends on biopython: ``<1.79``
   :depends on blast: 
   :depends on python: 

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

    pixi global install miru-hero

to add into an existing workspace instead, run::

    pixi add miru-hero

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install miru-hero

Alternatively, to install into a new environment, run::

    conda create -n envname miru-hero

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/miru-hero:<tag>

(see `miru-hero/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_miru-hero| image:: https://img.shields.io/conda/dn/bioconda/miru-hero.svg?style=flat
   :target: https://anaconda.org/bioconda/miru-hero
   :alt:   (downloads)
.. |docker_miru-hero| image:: https://quay.io/repository/biocontainers/miru-hero/status
   :target: https://quay.io/repository/biocontainers/miru-hero
.. _`miru-hero/tags`: https://quay.io/repository/biocontainers/miru-hero?tab=tags


.. raw:: html

    <script>
        var package = "miru-hero";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miru-hero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miru-hero/README.html