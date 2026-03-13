:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'traitar'
.. highlight: bash

traitar
=======

.. conda:recipe:: traitar
   :replaces_section_title:
   :noindex:

   traitar \- The microbial trait analyzer

   :homepage: https://github.com/nick-youngblut/traitar3
   :license: GPL3 / GNU General Public, version 3 (GPL-3.0)
   :recipe: /`traitar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/traitar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/traitar/meta.yaml>`_

   Traitar is a software for characterizing microbial samples from nucleotide or protein sequences


.. conda:package:: traitar

   |downloads_traitar| |docker_traitar|

   :versions:
      
      

      ``3.0.1-0``,  ``1.1.2-0``

      

   
   :depends on hmmer: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: ``>1.2,<2``
   :depends on python: ``>=3.7,<3.11``
   :depends on scipy: 

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

    pixi global install traitar

to add into an existing workspace instead, run::

    pixi add traitar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install traitar

Alternatively, to install into a new environment, run::

    conda create -n envname traitar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/traitar:<tag>

(see `traitar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_traitar| image:: https://img.shields.io/conda/dn/bioconda/traitar.svg?style=flat
   :target: https://anaconda.org/bioconda/traitar
   :alt:   (downloads)
.. |docker_traitar| image:: https://quay.io/repository/biocontainers/traitar/status
   :target: https://quay.io/repository/biocontainers/traitar
.. _`traitar/tags`: https://quay.io/repository/biocontainers/traitar?tab=tags


.. raw:: html

    <script>
        var package = "traitar";
        var versions = ["3.0.1","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/traitar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/traitar/README.html