:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pp'
.. highlight: bash

pp
==

.. conda:recipe:: pp
   :replaces_section_title:
   :noindex:

   Parallel and distributed programming for Python

   :homepage: http://www.parallelpython.com
   :license: BSD / BSD License
   :recipe: /`pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pp/meta.yaml>`_

   


.. conda:package:: pp

   |downloads_pp| |docker_pp|

   :versions:
      
      

      ``1.6.5-2``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4.4-0``,  ``1.6.4-1``,  ``1.6.4-0``

      

   
   :depends on python: ``<3``

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

    pixi global install pp

to add into an existing workspace instead, run::

    pixi add pp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pp

Alternatively, to install into a new environment, run::

    conda create -n envname pp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pp:<tag>

(see `pp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pp| image:: https://img.shields.io/conda/dn/bioconda/pp.svg?style=flat
   :target: https://anaconda.org/bioconda/pp
   :alt:   (downloads)
.. |docker_pp| image:: https://quay.io/repository/biocontainers/pp/status
   :target: https://quay.io/repository/biocontainers/pp
.. _`pp/tags`: https://quay.io/repository/biocontainers/pp?tab=tags


.. raw:: html

    <script>
        var package = "pp";
        var versions = ["1.6.5","1.6.5","1.6.5","1.6.4.4","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pp/README.html