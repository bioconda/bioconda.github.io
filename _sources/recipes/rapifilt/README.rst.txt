:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapifilt'
.. highlight: bash

rapifilt
========

.. conda:recipe:: rapifilt
   :replaces_section_title:
   :noindex:

   RAPIFILT\:RAPId FILTer is a quality control of DNA sequences

   :homepage: https://github.com/andvides/RAPIFILT.git
   :license: GPL / GPL-3.0
   :recipe: /`rapifilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapifilt/meta.yaml>`_

   


.. conda:package:: rapifilt

   |downloads_rapifilt| |docker_rapifilt|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install rapifilt

to add into an existing workspace instead, run::

    pixi add rapifilt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rapifilt

Alternatively, to install into a new environment, run::

    conda create -n envname rapifilt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rapifilt:<tag>

(see `rapifilt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rapifilt| image:: https://img.shields.io/conda/dn/bioconda/rapifilt.svg?style=flat
   :target: https://anaconda.org/bioconda/rapifilt
   :alt:   (downloads)
.. |docker_rapifilt| image:: https://quay.io/repository/biocontainers/rapifilt/status
   :target: https://quay.io/repository/biocontainers/rapifilt
.. _`rapifilt/tags`: https://quay.io/repository/biocontainers/rapifilt?tab=tags


.. raw:: html

    <script>
        var package = "rapifilt";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapifilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapifilt/README.html