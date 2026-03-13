:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tolkein'
.. highlight: bash

tolkein
=======

.. conda:recipe:: tolkein
   :replaces_section_title:
   :noindex:

   Tree of Life Kit of Evolutionary Informatics Novelties

   :homepage: https://github.com/tolkit/tolkein
   :documentation: https://tolkein.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`tolkein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein/meta.yaml>`_

   


.. conda:package:: tolkein

   |downloads_tolkein| |docker_tolkein|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on docopt: ``>=0.6.2``
   :depends on python: 
   :depends on pyyaml: 
   :depends on requests: ``>=2.24.0``
   :depends on setuptools: ``<78``
   :depends on tqdm: ``>=4.48.1``
   :depends on ujson: ``>=3.0.0``
   :depends on xmltodict: ``>=0.12.0``

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

    pixi global install tolkein

to add into an existing workspace instead, run::

    pixi add tolkein

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tolkein

Alternatively, to install into a new environment, run::

    conda create -n envname tolkein

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tolkein:<tag>

(see `tolkein/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tolkein| image:: https://img.shields.io/conda/dn/bioconda/tolkein.svg?style=flat
   :target: https://anaconda.org/bioconda/tolkein
   :alt:   (downloads)
.. |docker_tolkein| image:: https://quay.io/repository/biocontainers/tolkein/status
   :target: https://quay.io/repository/biocontainers/tolkein
.. _`tolkein/tags`: https://quay.io/repository/biocontainers/tolkein?tab=tags


.. raw:: html

    <script>
        var package = "tolkein";
        var versions = ["0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tolkein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tolkein/README.html