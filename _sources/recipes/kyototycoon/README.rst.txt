:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kyototycoon'
.. highlight: bash

kyototycoon
===========

.. conda:recipe:: kyototycoon
   :replaces_section_title:
   :noindex:

   a lightweight network server on top of the Kyoto Cabinet key\-value database\, built for high\-performance and concurrency

   :homepage: https://github.com/alticelabs/kyoto
   :license: GNU GPL v3.0
   :recipe: /`kyototycoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kyototycoon/meta.yaml>`_

   


.. conda:package:: kyototycoon

   |downloads_kyototycoon| |docker_kyototycoon|

   :versions:
      
      

      ``20170410-5``,  ``20170410-4``,  ``20170410-3``,  ``20170410-2``,  ``20170410-1``,  ``20170410-0``,  ``2017.04.10-3``,  ``2017.04.10-2``,  ``2017.04.10-1``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lzo: ``>=2.10,<3.0a0``

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

    pixi global install kyototycoon

to add into an existing workspace instead, run::

    pixi add kyototycoon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kyototycoon

Alternatively, to install into a new environment, run::

    conda create -n envname kyototycoon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kyototycoon:<tag>

(see `kyototycoon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kyototycoon| image:: https://img.shields.io/conda/dn/bioconda/kyototycoon.svg?style=flat
   :target: https://anaconda.org/bioconda/kyototycoon
   :alt:   (downloads)
.. |docker_kyototycoon| image:: https://quay.io/repository/biocontainers/kyototycoon/status
   :target: https://quay.io/repository/biocontainers/kyototycoon
.. _`kyototycoon/tags`: https://quay.io/repository/biocontainers/kyototycoon?tab=tags


.. raw:: html

    <script>
        var package = "kyototycoon";
        var versions = ["20170410","20170410","20170410","20170410","20170410"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kyototycoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kyototycoon/README.html