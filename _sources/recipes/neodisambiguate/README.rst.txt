:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neodisambiguate'
.. highlight: bash

neodisambiguate
===============

.. conda:recipe:: neodisambiguate
   :replaces_section_title:
   :noindex:

   Disambiguate reads that were mapped to multiple references.

   :homepage: https://github.com/clintval/neodisambiguate
   :license: MIT / MIT
   :recipe: /`neodisambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neodisambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neodisambiguate/meta.yaml>`_

   


.. conda:package:: neodisambiguate

   |downloads_neodisambiguate| |docker_neodisambiguate|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on openjdk: ``>=8``

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

    pixi global install neodisambiguate

to add into an existing workspace instead, run::

    pixi add neodisambiguate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install neodisambiguate

Alternatively, to install into a new environment, run::

    conda create -n envname neodisambiguate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/neodisambiguate:<tag>

(see `neodisambiguate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_neodisambiguate| image:: https://img.shields.io/conda/dn/bioconda/neodisambiguate.svg?style=flat
   :target: https://anaconda.org/bioconda/neodisambiguate
   :alt:   (downloads)
.. |docker_neodisambiguate| image:: https://quay.io/repository/biocontainers/neodisambiguate/status
   :target: https://quay.io/repository/biocontainers/neodisambiguate
.. _`neodisambiguate/tags`: https://quay.io/repository/biocontainers/neodisambiguate?tab=tags


.. raw:: html

    <script>
        var package = "neodisambiguate";
        var versions = ["1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neodisambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neodisambiguate/README.html