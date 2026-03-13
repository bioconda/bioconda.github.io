:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discovar'
.. highlight: bash

discovar
========

.. conda:recipe:: discovar
   :replaces_section_title:
   :noindex:

   Suitable for variant calling with reference and de novo assembly of small genomes.

   :homepage: https://www.broadinstitute.org/software/discovar
   :license: MIT
   :recipe: /`discovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar/meta.yaml>`_
   :links: biotools: :biotools:`discovar`, doi: :doi:`10.1038/ng.3121`

   


.. conda:package:: discovar

   |downloads_discovar| |docker_discovar|

   :versions:
      
      

      ``52488-1``,  ``52488-0``

      

   
   :depends on libgcc-ng: ``>=4.9``

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

    pixi global install discovar

to add into an existing workspace instead, run::

    pixi add discovar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install discovar

Alternatively, to install into a new environment, run::

    conda create -n envname discovar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/discovar:<tag>

(see `discovar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_discovar| image:: https://img.shields.io/conda/dn/bioconda/discovar.svg?style=flat
   :target: https://anaconda.org/bioconda/discovar
   :alt:   (downloads)
.. |docker_discovar| image:: https://quay.io/repository/biocontainers/discovar/status
   :target: https://quay.io/repository/biocontainers/discovar
.. _`discovar/tags`: https://quay.io/repository/biocontainers/discovar?tab=tags


.. raw:: html

    <script>
        var package = "discovar";
        var versions = ["52488","52488"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discovar/README.html