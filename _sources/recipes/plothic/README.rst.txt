:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plothic'
.. highlight: bash

plothic
=======

.. conda:recipe:: plothic
   :replaces_section_title:
   :noindex:

   Plot Whole genome Hi\-C contact matrix heatmap.

   :homepage: https://github.com/Jwindler/PlotHiC
   :documentation: https://github.com/Jwindler/PlotHiC/blob/v1.0.0/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`plothic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plothic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plothic/meta.yaml>`_

   


.. conda:package:: plothic

   |downloads_plothic| |docker_plothic|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.0-0``,  ``0.4.19-0``,  ``0.4.18-0``,  ``0.4.17-0``,  ``0.4.16-0``

      

   
   :depends on hic-straw: ``>=1.3.1``
   :depends on libcurl: 
   :depends on matplotlib-base: ``>=3.9.2``
   :depends on numpy: ``>=2.1.1``
   :depends on pandas: ``>=2.2.3``
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``>=1.5.2``
   :depends on scipy: ``>=1.14.1``
   :depends on six: ``>=1.16.0``

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

    pixi global install plothic

to add into an existing workspace instead, run::

    pixi add plothic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plothic

Alternatively, to install into a new environment, run::

    conda create -n envname plothic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plothic:<tag>

(see `plothic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plothic| image:: https://img.shields.io/conda/dn/bioconda/plothic.svg?style=flat
   :target: https://anaconda.org/bioconda/plothic
   :alt:   (downloads)
.. |docker_plothic| image:: https://quay.io/repository/biocontainers/plothic/status
   :target: https://quay.io/repository/biocontainers/plothic
.. _`plothic/tags`: https://quay.io/repository/biocontainers/plothic?tab=tags


.. raw:: html

    <script>
        var package = "plothic";
        var versions = ["1.0.0","0.5.0","0.4.19","0.4.18","0.4.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plothic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plothic/README.html