:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedparse'
.. highlight: bash

bedparse
========

.. conda:recipe:: bedparse
   :replaces_section_title:
   :noindex:

   A simple library and CLI tool to manipulate BED files

   :homepage: https://github.com/tleonardi/bedparse
   :license: MIT / MIT
   :recipe: /`bedparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedparse/meta.yaml>`_

   


.. conda:package:: bedparse

   |downloads_bedparse| |docker_bedparse|

   :versions:
      
      

      ``0.2.3-0``

      

   
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

    pixi global install bedparse

to add into an existing workspace instead, run::

    pixi add bedparse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bedparse

Alternatively, to install into a new environment, run::

    conda create -n envname bedparse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bedparse:<tag>

(see `bedparse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bedparse| image:: https://img.shields.io/conda/dn/bioconda/bedparse.svg?style=flat
   :target: https://anaconda.org/bioconda/bedparse
   :alt:   (downloads)
.. |docker_bedparse| image:: https://quay.io/repository/biocontainers/bedparse/status
   :target: https://quay.io/repository/biocontainers/bedparse
.. _`bedparse/tags`: https://quay.io/repository/biocontainers/bedparse?tab=tags


.. raw:: html

    <script>
        var package = "bedparse";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedparse/README.html