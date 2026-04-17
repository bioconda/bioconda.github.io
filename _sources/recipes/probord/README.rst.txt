:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probord'
.. highlight: bash

probord
=======

.. conda:recipe:: probord
   :replaces_section_title:
   :noindex:

   A tool for precise delimitation of provirus borders in host genomes

   :homepage: https://github.com/mujiezhang/ProBord
   :license: MIT
   :recipe: /`probord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probord/meta.yaml>`_

   


.. conda:package:: probord

   |downloads_probord| |docker_probord|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on checkv: 
   :depends on ncbi-genome-download: 
   :depends on python: ``>=3.8``

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

    pixi global install probord

to add into an existing workspace instead, run::

    pixi add probord

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install probord

Alternatively, to install into a new environment, run::

    conda create -n envname probord

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/probord:<tag>

(see `probord/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_probord| image:: https://img.shields.io/conda/dn/bioconda/probord.svg?style=flat
   :target: https://anaconda.org/bioconda/probord
   :alt:   (downloads)
.. |docker_probord| image:: https://quay.io/repository/biocontainers/probord/status
   :target: https://quay.io/repository/biocontainers/probord
.. _`probord/tags`: https://quay.io/repository/biocontainers/probord?tab=tags


.. raw:: html

    <script>
        var package = "probord";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probord/README.html