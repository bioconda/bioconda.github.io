:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-checkflowtypes'
.. highlight: bash

ig-checkflowtypes
=================

.. conda:recipe:: ig-checkflowtypes
   :replaces_section_title:
   :noindex:

   quick flow\-related datatype for galaxy checks

   :homepage: https://github.com/ImmPortDB/ig-checkflowtypes
   :license: BSD / BSD License
   :recipe: /`ig-checkflowtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkflowtypes/meta.yaml>`_

   


.. conda:package:: ig-checkflowtypes

   |downloads_ig-checkflowtypes| |docker_ig-checkflowtypes|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-flowcore: 
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libgfortran-ng: ``>=7,<8.0a0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on r-base: ``>=3.6,<3.7.0a0``

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

    pixi global install ig-checkflowtypes

to add into an existing workspace instead, run::

    pixi add ig-checkflowtypes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ig-checkflowtypes

Alternatively, to install into a new environment, run::

    conda create -n envname ig-checkflowtypes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ig-checkflowtypes:<tag>

(see `ig-checkflowtypes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ig-checkflowtypes| image:: https://img.shields.io/conda/dn/bioconda/ig-checkflowtypes.svg?style=flat
   :target: https://anaconda.org/bioconda/ig-checkflowtypes
   :alt:   (downloads)
.. |docker_ig-checkflowtypes| image:: https://quay.io/repository/biocontainers/ig-checkflowtypes/status
   :target: https://quay.io/repository/biocontainers/ig-checkflowtypes
.. _`ig-checkflowtypes/tags`: https://quay.io/repository/biocontainers/ig-checkflowtypes?tab=tags


.. raw:: html

    <script>
        var package = "ig-checkflowtypes";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-checkflowtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-checkflowtypes/README.html