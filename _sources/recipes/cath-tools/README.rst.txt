:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cath-tools'
.. highlight: bash

cath-tools
==========

.. conda:recipe:: cath-tools
   :replaces_section_title:
   :noindex:

   Protein structure comparison tools such as SSAP\, as used by the Orengo Group in curating CATH.

   :homepage: https://github.com/UCLOrengoGroup/cath-tools
   :license: GPLv3
   :recipe: /`cath-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cath-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cath-tools/meta.yaml>`_

   


.. conda:package:: cath-tools

   |downloads_cath-tools| |docker_cath-tools|

   :versions:
      
      

      ``0.16.5-0``

      

   
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``

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

    pixi global install cath-tools

to add into an existing workspace instead, run::

    pixi add cath-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cath-tools

Alternatively, to install into a new environment, run::

    conda create -n envname cath-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cath-tools:<tag>

(see `cath-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cath-tools| image:: https://img.shields.io/conda/dn/bioconda/cath-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cath-tools
   :alt:   (downloads)
.. |docker_cath-tools| image:: https://quay.io/repository/biocontainers/cath-tools/status
   :target: https://quay.io/repository/biocontainers/cath-tools
.. _`cath-tools/tags`: https://quay.io/repository/biocontainers/cath-tools?tab=tags


.. raw:: html

    <script>
        var package = "cath-tools";
        var versions = ["0.16.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cath-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cath-tools/README.html