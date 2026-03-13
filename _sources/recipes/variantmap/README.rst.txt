:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantmap'
.. highlight: bash

variantmap
==========

.. conda:recipe:: variantmap
   :replaces_section_title:
   :noindex:

   Interactive heatmap for multi\-sample structural variant analysis

   :homepage: https://github.com/cytham/variantmap
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantmap/meta.yaml>`_

   


.. conda:package:: variantmap

   |downloads_variantmap| |docker_variantmap|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on dash: ``>=1.17.0``
   :depends on pandas: ``>=1.1.4``
   :depends on pytables: ``>=3.6.1``
   :depends on python: 

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

    pixi global install variantmap

to add into an existing workspace instead, run::

    pixi add variantmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install variantmap

Alternatively, to install into a new environment, run::

    conda create -n envname variantmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/variantmap:<tag>

(see `variantmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_variantmap| image:: https://img.shields.io/conda/dn/bioconda/variantmap.svg?style=flat
   :target: https://anaconda.org/bioconda/variantmap
   :alt:   (downloads)
.. |docker_variantmap| image:: https://quay.io/repository/biocontainers/variantmap/status
   :target: https://quay.io/repository/biocontainers/variantmap
.. _`variantmap/tags`: https://quay.io/repository/biocontainers/variantmap?tab=tags


.. raw:: html

    <script>
        var package = "variantmap";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantmap/README.html