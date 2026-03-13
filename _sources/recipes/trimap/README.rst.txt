:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimap'
.. highlight: bash

trimap
======

.. conda:recipe:: trimap
   :replaces_section_title:
   :noindex:

   TriMap\: Large\-scale Dimensionality Reduction Using Triplets

   :homepage: http://github.com/eamid/trimap
   :license: Apache-2.0
   :recipe: /`trimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap/meta.yaml>`_

   


.. conda:package:: trimap

   |downloads_trimap| |docker_trimap|

   :versions:
      
      

      ``1.0.15-0``

      

   
   :depends on numba: ``>=0.34``
   :depends on python: 
   :depends on python-annoy: ``>=1.11``
   :depends on scikit-learn: ``>=0.16``

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

    pixi global install trimap

to add into an existing workspace instead, run::

    pixi add trimap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trimap

Alternatively, to install into a new environment, run::

    conda create -n envname trimap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trimap:<tag>

(see `trimap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trimap| image:: https://img.shields.io/conda/dn/bioconda/trimap.svg?style=flat
   :target: https://anaconda.org/bioconda/trimap
   :alt:   (downloads)
.. |docker_trimap| image:: https://quay.io/repository/biocontainers/trimap/status
   :target: https://quay.io/repository/biocontainers/trimap
.. _`trimap/tags`: https://quay.io/repository/biocontainers/trimap?tab=tags


.. raw:: html

    <script>
        var package = "trimap";
        var versions = ["1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimap/README.html