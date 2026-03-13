:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymethylation_utils'
.. highlight: bash

pymethylation_utils
===================

.. conda:recipe:: pymethylation_utils
   :replaces_section_title:
   :noindex:

   Python wrapper for the methylation\_utils Rust binary

   :homepage: https://github.com/SebastianDall/pymethylation_utils
   :license: MIT
   :recipe: /`pymethylation_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymethylation_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymethylation_utils/meta.yaml>`_

   


.. conda:package:: pymethylation_utils

   |downloads_pymethylation_utils| |docker_pymethylation_utils|

   :versions:
      
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.1-0``

      

   
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

    pixi global install pymethylation_utils

to add into an existing workspace instead, run::

    pixi add pymethylation_utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pymethylation_utils

Alternatively, to install into a new environment, run::

    conda create -n envname pymethylation_utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pymethylation_utils:<tag>

(see `pymethylation_utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pymethylation_utils| image:: https://img.shields.io/conda/dn/bioconda/pymethylation_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pymethylation_utils
   :alt:   (downloads)
.. |docker_pymethylation_utils| image:: https://quay.io/repository/biocontainers/pymethylation_utils/status
   :target: https://quay.io/repository/biocontainers/pymethylation_utils
.. _`pymethylation_utils/tags`: https://quay.io/repository/biocontainers/pymethylation_utils?tab=tags


.. raw:: html

    <script>
        var package = "pymethylation_utils";
        var versions = ["0.5.3","0.5.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymethylation_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymethylation_utils/README.html