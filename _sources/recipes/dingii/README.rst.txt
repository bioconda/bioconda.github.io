:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dingii'
.. highlight: bash

dingii
======

.. conda:recipe:: dingii
   :replaces_section_title:
   :noindex:

   Computing the Rearrangement Distance of Natural Genomes.

   :homepage: https://gitlab.ub.uni-bielefeld.de/gi/dingiiofficial
   :documentation: https://gitlab.ub.uni-bielefeld.de/gi/dingiiofficial/-/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`dingii <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dingii>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dingii/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2001.02139`

   


.. conda:package:: dingii

   |downloads_dingii| |docker_dingii|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on networkx: ``>=3.1``
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

    pixi global install dingii

to add into an existing workspace instead, run::

    pixi add dingii

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dingii

Alternatively, to install into a new environment, run::

    conda create -n envname dingii

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dingii:<tag>

(see `dingii/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dingii| image:: https://img.shields.io/conda/dn/bioconda/dingii.svg?style=flat
   :target: https://anaconda.org/bioconda/dingii
   :alt:   (downloads)
.. |docker_dingii| image:: https://quay.io/repository/biocontainers/dingii/status
   :target: https://quay.io/repository/biocontainers/dingii
.. _`dingii/tags`: https://quay.io/repository/biocontainers/dingii?tab=tags


.. raw:: html

    <script>
        var package = "dingii";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dingii/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dingii/README.html