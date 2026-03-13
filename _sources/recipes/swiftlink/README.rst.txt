:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swiftlink'
.. highlight: bash

swiftlink
=========

.. conda:recipe:: swiftlink
   :replaces_section_title:
   :noindex:

   A multipoint parametric linkage analysis tool for large consanguineous pedigrees and is primarily targeted at pedigrees that cannot be analysed by a Lander\-Green algorithm based program\, i.e. many markers\, but larger pedigrees.

   :homepage: https://github.com/ajm/swiftlink
   :license: GPLv3
   :recipe: /`swiftlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink/meta.yaml>`_

   


.. conda:package:: swiftlink

   |downloads_swiftlink| |docker_swiftlink|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on gsl: ``>=2.2.1,<2.3.0a0``
   :depends on libgcc-ng: ``>=4.9``
   :depends on libstdcxx-ng: ``>=4.9``
   :depends on openblas: ``>=0.2.20,<0.2.21.0a0``
   :depends on openmp: 

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

    pixi global install swiftlink

to add into an existing workspace instead, run::

    pixi add swiftlink

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install swiftlink

Alternatively, to install into a new environment, run::

    conda create -n envname swiftlink

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/swiftlink:<tag>

(see `swiftlink/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_swiftlink| image:: https://img.shields.io/conda/dn/bioconda/swiftlink.svg?style=flat
   :target: https://anaconda.org/bioconda/swiftlink
   :alt:   (downloads)
.. |docker_swiftlink| image:: https://quay.io/repository/biocontainers/swiftlink/status
   :target: https://quay.io/repository/biocontainers/swiftlink
.. _`swiftlink/tags`: https://quay.io/repository/biocontainers/swiftlink?tab=tags


.. raw:: html

    <script>
        var package = "swiftlink";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swiftlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swiftlink/README.html