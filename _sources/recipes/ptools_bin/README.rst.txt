:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ptools_bin'
.. highlight: bash

ptools_bin
==========

.. conda:recipe:: ptools_bin
   :replaces_section_title:
   :noindex:

   Installation for ptools scripts.

   :homepage: https://github.com/ENCODE-DCC/ptools_bin
   :license: MIT / MIT
   :recipe: /`ptools_bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ptools_bin/meta.yaml>`_

   


.. conda:package:: ptools_bin

   |downloads_ptools_bin| |docker_ptools_bin|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on numpy: ``>=1.19.2``
   :depends on pandas: ``>=1.1.3``
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

    pixi global install ptools_bin

to add into an existing workspace instead, run::

    pixi add ptools_bin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ptools_bin

Alternatively, to install into a new environment, run::

    conda create -n envname ptools_bin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ptools_bin:<tag>

(see `ptools_bin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ptools_bin| image:: https://img.shields.io/conda/dn/bioconda/ptools_bin.svg?style=flat
   :target: https://anaconda.org/bioconda/ptools_bin
   :alt:   (downloads)
.. |docker_ptools_bin| image:: https://quay.io/repository/biocontainers/ptools_bin/status
   :target: https://quay.io/repository/biocontainers/ptools_bin
.. _`ptools_bin/tags`: https://quay.io/repository/biocontainers/ptools_bin?tab=tags


.. raw:: html

    <script>
        var package = "ptools_bin";
        var versions = ["0.0.7","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ptools_bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ptools_bin/README.html