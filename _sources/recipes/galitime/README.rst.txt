:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galitime'
.. highlight: bash

galitime
========

.. conda:recipe:: galitime
   :replaces_section_title:
   :noindex:

   benchmarking of scientific computaional experiments

   :homepage: https://github.com/karel-brinda/galitime
   :license: MIT / MIT
   :recipe: /`galitime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galitime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galitime/meta.yaml>`_

   


.. conda:package:: galitime

   |downloads_galitime| |docker_galitime|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install galitime

to add into an existing workspace instead, run::

    pixi add galitime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galitime

Alternatively, to install into a new environment, run::

    conda create -n envname galitime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galitime:<tag>

(see `galitime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galitime| image:: https://img.shields.io/conda/dn/bioconda/galitime.svg?style=flat
   :target: https://anaconda.org/bioconda/galitime
   :alt:   (downloads)
.. |docker_galitime| image:: https://quay.io/repository/biocontainers/galitime/status
   :target: https://quay.io/repository/biocontainers/galitime
.. _`galitime/tags`: https://quay.io/repository/biocontainers/galitime?tab=tags


.. raw:: html

    <script>
        var package = "galitime";
        var versions = ["0.2.0","0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galitime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galitime/README.html