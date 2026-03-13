:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comut'
.. highlight: bash

comut
=====

.. conda:recipe:: comut
   :replaces_section_title:
   :noindex:

   A Python library for creating comutation plots to visualize genomic and phenotypic information

   :homepage: https://github.com/vanallenlab/comut
   :license: MIT / MIT
   :recipe: /`comut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comut/meta.yaml>`_
   :links: biotools: :biotools:`comut`, doi: :doi:`10.1101/2020.03.18.997361`

   


.. conda:package:: comut

   |downloads_comut| |docker_comut|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends on matplotlib-base: ``>=3.1.1``
   :depends on numpy: ``>=1.18.1``
   :depends on palettable: ``>=3.3.0``
   :depends on pandas: ``>=0.25.3``
   :depends on python: ``>=3.6``

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

    pixi global install comut

to add into an existing workspace instead, run::

    pixi add comut

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install comut

Alternatively, to install into a new environment, run::

    conda create -n envname comut

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/comut:<tag>

(see `comut/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_comut| image:: https://img.shields.io/conda/dn/bioconda/comut.svg?style=flat
   :target: https://anaconda.org/bioconda/comut
   :alt:   (downloads)
.. |docker_comut| image:: https://quay.io/repository/biocontainers/comut/status
   :target: https://quay.io/repository/biocontainers/comut
.. _`comut/tags`: https://quay.io/repository/biocontainers/comut?tab=tags


.. raw:: html

    <script>
        var package = "comut";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comut/README.html