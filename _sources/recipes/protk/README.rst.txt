:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protk'
.. highlight: bash

protk
=====

.. conda:recipe:: protk
   :replaces_section_title:
   :noindex:

   protk \(Proteomics toolkit\)

   :homepage: https://github.com/iracooke/protk
   :license: MIT
   :recipe: /`protk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk/meta.yaml>`_

   


.. conda:package:: protk

   |downloads_protk| |docker_protk|

   :versions:
      
      

      ``1.4.4a-1``,  ``1.4.4a-0``

      

   
   :depends on libgcc-ng: ``>=4.9``
   :depends on libxml2: ``>=2.9.8,<2.10.0a0``
   :depends on ruby: ``>=2.4``
   :depends on tpp: 

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

    pixi global install protk

to add into an existing workspace instead, run::

    pixi add protk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install protk

Alternatively, to install into a new environment, run::

    conda create -n envname protk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/protk:<tag>

(see `protk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_protk| image:: https://img.shields.io/conda/dn/bioconda/protk.svg?style=flat
   :target: https://anaconda.org/bioconda/protk
   :alt:   (downloads)
.. |docker_protk| image:: https://quay.io/repository/biocontainers/protk/status
   :target: https://quay.io/repository/biocontainers/protk
.. _`protk/tags`: https://quay.io/repository/biocontainers/protk?tab=tags


.. raw:: html

    <script>
        var package = "protk";
        var versions = ["1.4.4a","1.4.4a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protk/README.html