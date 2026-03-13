:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccfind'
.. highlight: bash

ccfind
======

.. conda:recipe:: ccfind
   :replaces_section_title:
   :noindex:

   Circular Complete genome FINDer

   :homepage: https://github.com/yosuken/ccfind
   :license: MIT / MIT
   :recipe: /`ccfind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccfind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccfind/meta.yaml>`_

   ccfind is a general tool to detect circular complete genomes
   with clues of terminal redundancy. It was originally designed
   for identification of complete virus genomes from metagenome assembly.



.. conda:package:: ccfind

   |downloads_ccfind| |docker_ccfind|

   :versions:
      
      

      ``1.4.7-0``

      

   
   :depends on blast: ``>=2.6``
   :depends on fasta3: 
   :depends on parallel: 
   :depends on prodigal: 
   :depends on ruby: ``>=2.0``

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

    pixi global install ccfind

to add into an existing workspace instead, run::

    pixi add ccfind

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ccfind

Alternatively, to install into a new environment, run::

    conda create -n envname ccfind

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ccfind:<tag>

(see `ccfind/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ccfind| image:: https://img.shields.io/conda/dn/bioconda/ccfind.svg?style=flat
   :target: https://anaconda.org/bioconda/ccfind
   :alt:   (downloads)
.. |docker_ccfind| image:: https://quay.io/repository/biocontainers/ccfind/status
   :target: https://quay.io/repository/biocontainers/ccfind
.. _`ccfind/tags`: https://quay.io/repository/biocontainers/ccfind?tab=tags


.. raw:: html

    <script>
        var package = "ccfind";
        var versions = ["1.4.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccfind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccfind/README.html