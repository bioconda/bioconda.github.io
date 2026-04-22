:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemf_favites'
.. highlight: bash

gemf_favites
============

.. conda:recipe:: gemf_favites
   :replaces_section_title:
   :noindex:

   User\-friendly epidemic simulations

   :homepage: https://github.com/niemasd/GEMF
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gemf_favites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemf_favites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemf_favites/meta.yaml>`_
   :links: biotools: :biotools:`gemf_favites`

   


.. conda:package:: gemf_favites

   |downloads_gemf_favites| |docker_gemf_favites|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.7``

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

    pixi global install gemf_favites

to add into an existing workspace instead, run::

    pixi add gemf_favites

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gemf_favites

Alternatively, to install into a new environment, run::

    conda create -n envname gemf_favites

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gemf_favites:<tag>

(see `gemf_favites/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gemf_favites| image:: https://img.shields.io/conda/dn/bioconda/gemf_favites.svg?style=flat
   :target: https://anaconda.org/bioconda/gemf_favites
   :alt:   (downloads)
.. |docker_gemf_favites| image:: https://quay.io/repository/biocontainers/gemf_favites/status
   :target: https://quay.io/repository/biocontainers/gemf_favites
.. _`gemf_favites/tags`: https://quay.io/repository/biocontainers/gemf_favites?tab=tags


.. raw:: html

    <script>
        var package = "gemf_favites";
        var versions = ["1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemf_favites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemf_favites/README.html