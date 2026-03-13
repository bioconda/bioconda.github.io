:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unac'
.. highlight: bash

unac
====

.. conda:recipe:: unac
   :replaces_section_title:
   :noindex:

   A universal meta tool to perform natural abundance correction of isotopic labeling data

   :homepage: https://jugit.fz-juelich.de/IBG-1/ModSim/uNAC
   :license: MIT
   :recipe: /`unac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unac/meta.yaml>`_

   


.. conda:package:: unac

   |downloads_unac| |docker_unac|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on bioconductor-isocorrector: ``>=1.24.0``
   :depends on isocor: ``>=2.2``
   :depends on matplotlib-base: ``>=3.7``
   :depends on numpy: ``>=1.25``
   :depends on openpyxl: ``>=3.0``
   :depends on pandas: ``>=2.0``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on python: ``>=3.11``
   :depends on rpy2: ``>=3.5``
   :depends on setuptools: ``>=68.0.0``

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

    pixi global install unac

to add into an existing workspace instead, run::

    pixi add unac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unac

Alternatively, to install into a new environment, run::

    conda create -n envname unac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unac:<tag>

(see `unac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unac| image:: https://img.shields.io/conda/dn/bioconda/unac.svg?style=flat
   :target: https://anaconda.org/bioconda/unac
   :alt:   (downloads)
.. |docker_unac| image:: https://quay.io/repository/biocontainers/unac/status
   :target: https://quay.io/repository/biocontainers/unac
.. _`unac/tags`: https://quay.io/repository/biocontainers/unac?tab=tags


.. raw:: html

    <script>
        var package = "unac";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unac/README.html