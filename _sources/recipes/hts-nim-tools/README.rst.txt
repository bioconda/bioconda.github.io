:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hts-nim-tools'
.. highlight: bash

hts-nim-tools
=============

.. conda:recipe:: hts-nim-tools
   :replaces_section_title:
   :noindex:

   useful command\-line tools written to show\-case hts\-nim

   :homepage: https://github.com/brentp/hts-nim-tools
   :license: MIT
   :recipe: /`hts-nim-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools/meta.yaml>`_

   


.. conda:package:: hts-nim-tools

   |downloads_hts-nim-tools| |docker_hts-nim-tools|

   :versions:
      
      

      ``0.3.11-0``,  ``0.2.0-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on pcre: ``>=8.44,<9.0a0``

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

    pixi global install hts-nim-tools

to add into an existing workspace instead, run::

    pixi add hts-nim-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hts-nim-tools

Alternatively, to install into a new environment, run::

    conda create -n envname hts-nim-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hts-nim-tools:<tag>

(see `hts-nim-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hts-nim-tools| image:: https://img.shields.io/conda/dn/bioconda/hts-nim-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/hts-nim-tools
   :alt:   (downloads)
.. |docker_hts-nim-tools| image:: https://quay.io/repository/biocontainers/hts-nim-tools/status
   :target: https://quay.io/repository/biocontainers/hts-nim-tools
.. _`hts-nim-tools/tags`: https://quay.io/repository/biocontainers/hts-nim-tools?tab=tags


.. raw:: html

    <script>
        var package = "hts-nim-tools";
        var versions = ["0.3.11","0.2.0","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hts-nim-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hts-nim-tools/README.html