:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydna_repeatfinder'
.. highlight: bash

pydna_repeatfinder
==================

.. conda:recipe:: pydna_repeatfinder
   :replaces_section_title:
   :noindex:

   Search for direct and inverted repeats in DNA sequences.

   :homepage: https://github.com/linsalrob/repeatfinder
   :license: MIT / MIT
   :recipe: /`pydna_repeatfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna_repeatfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna_repeatfinder/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.5006657`

   


.. conda:package:: pydna_repeatfinder

   |downloads_pydna_repeatfinder| |docker_pydna_repeatfinder|

   :versions:
      
      

      ``0.2.9-2``,  ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pydna_repeatfinder

to add into an existing workspace instead, run::

    pixi add pydna_repeatfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydna_repeatfinder

Alternatively, to install into a new environment, run::

    conda create -n envname pydna_repeatfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydna_repeatfinder:<tag>

(see `pydna_repeatfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydna_repeatfinder| image:: https://img.shields.io/conda/dn/bioconda/pydna_repeatfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/pydna_repeatfinder
   :alt:   (downloads)
.. |docker_pydna_repeatfinder| image:: https://quay.io/repository/biocontainers/pydna_repeatfinder/status
   :target: https://quay.io/repository/biocontainers/pydna_repeatfinder
.. _`pydna_repeatfinder/tags`: https://quay.io/repository/biocontainers/pydna_repeatfinder?tab=tags


.. raw:: html

    <script>
        var package = "pydna_repeatfinder";
        var versions = ["0.2.9","0.2.9","0.2.9","0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna_repeatfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna_repeatfinder/README.html