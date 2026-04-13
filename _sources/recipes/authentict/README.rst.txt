:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'authentict'
.. highlight: bash

authentict
==========

.. conda:recipe:: authentict
   :replaces_section_title:
   :noindex:

   Estimates present\-day DNA contamination in ancient DNA single\-stranded libraries.

   :homepage: https://github.com/StephanePeyregne/AuthentiCT
   :license: GPL3
   :recipe: /`authentict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02123-y`

   


.. conda:package:: authentict

   |downloads_authentict| |docker_authentict|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numdifftools: ``>=0.9.39``
   :depends on numpy: ``>=1.17.2``
   :depends on pandas: ``>=0.25.1``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on samtools: 
   :depends on scipy: ``>=1.3``

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

    pixi global install authentict

to add into an existing workspace instead, run::

    pixi add authentict

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install authentict

Alternatively, to install into a new environment, run::

    conda create -n envname authentict

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/authentict:<tag>

(see `authentict/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_authentict| image:: https://img.shields.io/conda/dn/bioconda/authentict.svg?style=flat
   :target: https://anaconda.org/bioconda/authentict
   :alt:   (downloads)
.. |docker_authentict| image:: https://quay.io/repository/biocontainers/authentict/status
   :target: https://quay.io/repository/biocontainers/authentict
.. _`authentict/tags`: https://quay.io/repository/biocontainers/authentict?tab=tags


.. raw:: html

    <script>
        var package = "authentict";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/authentict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/authentict/README.html