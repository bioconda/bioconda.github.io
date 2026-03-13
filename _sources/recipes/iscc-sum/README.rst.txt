:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iscc-sum'
.. highlight: bash

iscc-sum
========

.. conda:recipe:: iscc-sum
   :replaces_section_title:
   :noindex:

   High\-performance ISCC Data\-Code and Instance\-Code hashing

   :homepage: https://github.com/bio-codes/iscc-sum
   :license: Apache / Apache-2.0
   :recipe: /`iscc-sum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iscc-sum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iscc-sum/meta.yaml>`_

   


.. conda:package:: iscc-sum

   |downloads_iscc-sum| |docker_iscc-sum|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on blake3: ``>=1.0.5``
   :depends on click: ``>=8.0.0``
   :depends on libgcc: ``>=13``
   :depends on pathspec: ``>=0.12.1``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python-xxhash: ``>=3.5.0``
   :depends on python_abi: ``3.14.* *_cp314``
   :depends on universal-pathlib: ``>=0.2.6``

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

    pixi global install iscc-sum

to add into an existing workspace instead, run::

    pixi add iscc-sum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iscc-sum

Alternatively, to install into a new environment, run::

    conda create -n envname iscc-sum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iscc-sum:<tag>

(see `iscc-sum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iscc-sum| image:: https://img.shields.io/conda/dn/bioconda/iscc-sum.svg?style=flat
   :target: https://anaconda.org/bioconda/iscc-sum
   :alt:   (downloads)
.. |docker_iscc-sum| image:: https://quay.io/repository/biocontainers/iscc-sum/status
   :target: https://quay.io/repository/biocontainers/iscc-sum
.. _`iscc-sum/tags`: https://quay.io/repository/biocontainers/iscc-sum?tab=tags


.. raw:: html

    <script>
        var package = "iscc-sum";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iscc-sum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iscc-sum/README.html