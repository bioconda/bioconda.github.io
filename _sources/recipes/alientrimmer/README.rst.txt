:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alientrimmer'
.. highlight: bash

alientrimmer
============

.. conda:recipe:: alientrimmer
   :replaces_section_title:
   :noindex:

   Tool for trimming non\-confident bases and alien oligo\-nucleotide sequences from sequencing reads.

   :homepage: https://gitlab.pasteur.fr/GIPhy/AlienTrimmer
   :license: AGPL / AGPL-3.0
   :recipe: /`alientrimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alientrimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alientrimmer/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ygeno.2013.07.011`

   


.. conda:package:: alientrimmer

   |downloads_alientrimmer| |docker_alientrimmer|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends on openjdk: 

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

    pixi global install alientrimmer

to add into an existing workspace instead, run::

    pixi add alientrimmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alientrimmer

Alternatively, to install into a new environment, run::

    conda create -n envname alientrimmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alientrimmer:<tag>

(see `alientrimmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alientrimmer| image:: https://img.shields.io/conda/dn/bioconda/alientrimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/alientrimmer
   :alt:   (downloads)
.. |docker_alientrimmer| image:: https://quay.io/repository/biocontainers/alientrimmer/status
   :target: https://quay.io/repository/biocontainers/alientrimmer
.. _`alientrimmer/tags`: https://quay.io/repository/biocontainers/alientrimmer?tab=tags


.. raw:: html

    <script>
        var package = "alientrimmer";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alientrimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alientrimmer/README.html