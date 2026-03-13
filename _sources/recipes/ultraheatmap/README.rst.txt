:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraheatmap'
.. highlight: bash

ultraheatmap
============

.. conda:recipe:: ultraheatmap
   :replaces_section_title:
   :noindex:

   ultraheatmaps facilitates the production of deepTools heatmaps

   :homepage: https://github.com/maxplanck-ie/ultraheatmap/
   :license: MIT / MIT
   :recipe: /`ultraheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap/meta.yaml>`_

   


.. conda:package:: ultraheatmap

   |downloads_ultraheatmap| |docker_ultraheatmap|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on bedtools: ``>2``
   :depends on deeptools: ``>3``
   :depends on gffutils: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.6``
   :depends on pyyaml: ``>=5.1``

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

    pixi global install ultraheatmap

to add into an existing workspace instead, run::

    pixi add ultraheatmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ultraheatmap

Alternatively, to install into a new environment, run::

    conda create -n envname ultraheatmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ultraheatmap:<tag>

(see `ultraheatmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ultraheatmap| image:: https://img.shields.io/conda/dn/bioconda/ultraheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraheatmap
   :alt:   (downloads)
.. |docker_ultraheatmap| image:: https://quay.io/repository/biocontainers/ultraheatmap/status
   :target: https://quay.io/repository/biocontainers/ultraheatmap
.. _`ultraheatmap/tags`: https://quay.io/repository/biocontainers/ultraheatmap?tab=tags


.. raw:: html

    <script>
        var package = "ultraheatmap";
        var versions = ["1.3.1","1.3.0","1.3.0","1.2.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraheatmap/README.html