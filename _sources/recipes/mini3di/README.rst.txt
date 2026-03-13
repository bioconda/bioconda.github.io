:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mini3di'
.. highlight: bash

mini3di
=======

.. conda:recipe:: mini3di
   :replaces_section_title:
   :noindex:

   A NumPy port of the foldseek code for encoding protein structures to 3di.

   :homepage: https://github.com/althonos/mini3di
   :license: BSD-3-Clause
   :recipe: /`mini3di <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mini3di>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mini3di/meta.yaml>`_

   


.. conda:package:: mini3di

   |downloads_mini3di| |docker_mini3di|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends on numpy: 
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

    pixi global install mini3di

to add into an existing workspace instead, run::

    pixi add mini3di

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mini3di

Alternatively, to install into a new environment, run::

    conda create -n envname mini3di

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mini3di:<tag>

(see `mini3di/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mini3di| image:: https://img.shields.io/conda/dn/bioconda/mini3di.svg?style=flat
   :target: https://anaconda.org/bioconda/mini3di
   :alt:   (downloads)
.. |docker_mini3di| image:: https://quay.io/repository/biocontainers/mini3di/status
   :target: https://quay.io/repository/biocontainers/mini3di
.. _`mini3di/tags`: https://quay.io/repository/biocontainers/mini3di?tab=tags


.. raw:: html

    <script>
        var package = "mini3di";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mini3di/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mini3di/README.html