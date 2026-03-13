:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amiga'
.. highlight: bash

amiga
=====

.. conda:recipe:: amiga
   :replaces_section_title:
   :noindex:

   Analysis of Microbial Growth Assays.

   :homepage: https://github.com/firasmidani/amiga
   :documentation: https://firasmidani.github.io/amiga
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`amiga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amiga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amiga/meta.yaml>`_
   :links: doi: :doi:`10.1128/msystems.00508-21`

   


.. conda:package:: amiga

   |downloads_amiga| |docker_amiga|

   :versions:
      
      

      ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``

      

   
   :depends on cycler: ``>=0.11.0``
   :depends on decorator: ``>=5.1.0``
   :depends on gpy: ``>=1.13.2``
   :depends on kiwisolver: ``>=1.3.2``
   :depends on matplotlib-base: ``>=3.5.1``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.3.0``
   :depends on paramz: ``>=0.9.5``
   :depends on pyparsing: ``>=3.0.0``
   :depends on python: ``>=3.10,<3.13``
   :depends on python-dateutil: ``>=2.8.2``
   :depends on pytz: ``>=2021.3``
   :depends on scipy: ``>=1.8.0``
   :depends on seaborn-base: ``>=0.11.2``
   :depends on six: ``>=1.16.0``
   :depends on tabulate: ``>=0.8.8``

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

    pixi global install amiga

to add into an existing workspace instead, run::

    pixi add amiga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amiga

Alternatively, to install into a new environment, run::

    conda create -n envname amiga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amiga:<tag>

(see `amiga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amiga| image:: https://img.shields.io/conda/dn/bioconda/amiga.svg?style=flat
   :target: https://anaconda.org/bioconda/amiga
   :alt:   (downloads)
.. |docker_amiga| image:: https://quay.io/repository/biocontainers/amiga/status
   :target: https://quay.io/repository/biocontainers/amiga
.. _`amiga/tags`: https://quay.io/repository/biocontainers/amiga?tab=tags


.. raw:: html

    <script>
        var package = "amiga";
        var versions = ["3.0.4","3.0.4","3.0.3","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amiga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amiga/README.html