:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coral'
.. highlight: bash

coral
=====

.. conda:recipe:: coral
   :replaces_section_title:
   :noindex:

   Coral is an efficient tool to bridge paire\-end RNA\-seq reads.

   :homepage: https://github.com/Shao-Group/coral
   :license: BSD 3-Clause License
   :recipe: /`coral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coral/meta.yaml>`_

   


.. conda:package:: coral

   |downloads_coral| |docker_coral|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``

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

    pixi global install coral

to add into an existing workspace instead, run::

    pixi add coral

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coral

Alternatively, to install into a new environment, run::

    conda create -n envname coral

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coral:<tag>

(see `coral/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coral| image:: https://img.shields.io/conda/dn/bioconda/coral.svg?style=flat
   :target: https://anaconda.org/bioconda/coral
   :alt:   (downloads)
.. |docker_coral| image:: https://quay.io/repository/biocontainers/coral/status
   :target: https://quay.io/repository/biocontainers/coral
.. _`coral/tags`: https://quay.io/repository/biocontainers/coral?tab=tags


.. raw:: html

    <script>
        var package = "coral";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coral/README.html