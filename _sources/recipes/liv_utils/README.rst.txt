:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liv_utils'
.. highlight: bash

liv_utils
=========

.. conda:recipe:: liv_utils
   :replaces_section_title:
   :noindex:

   Liverpool University Basic Tools

   :homepage: https://github.com/neilswainston/liv-utils
   :license: MIT
   :recipe: /`liv_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liv_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liv_utils/meta.yaml>`_

   


.. conda:package:: liv_utils

   |downloads_liv_utils| |docker_liv_utils|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on pysbol2: 
   :depends on python: ``>3.6``

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

    pixi global install liv_utils

to add into an existing workspace instead, run::

    pixi add liv_utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install liv_utils

Alternatively, to install into a new environment, run::

    conda create -n envname liv_utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/liv_utils:<tag>

(see `liv_utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_liv_utils| image:: https://img.shields.io/conda/dn/bioconda/liv_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/liv_utils
   :alt:   (downloads)
.. |docker_liv_utils| image:: https://quay.io/repository/biocontainers/liv_utils/status
   :target: https://quay.io/repository/biocontainers/liv_utils
.. _`liv_utils/tags`: https://quay.io/repository/biocontainers/liv_utils?tab=tags


.. raw:: html

    <script>
        var package = "liv_utils";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liv_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liv_utils/README.html