:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtv'
.. highlight: bash

wtv
===

.. conda:recipe:: wtv
   :replaces_section_title:
   :noindex:

   A library and CLI for ion selection in mass spectrometry data.

   :homepage: https://recetox.github.io/wtv
   :license: GPL3 / GPL-3.0-only
   :recipe: /`wtv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtv/meta.yaml>`_

   


.. conda:package:: wtv

   |downloads_wtv| |docker_wtv|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.2-0``

      

   
   :depends on lxml: ``<6.0.0``
   :depends on matchms: ``>=0.30.2,<0.31.0``
   :depends on numpy: ``>=2.0.0``
   :depends on pandas: ``>=2.2.3,<3.0.0``
   :depends on python: ``>=3.10,<3.13``
   :depends on rdkit: ``<2025.0.0``

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

    pixi global install wtv

to add into an existing workspace instead, run::

    pixi add wtv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wtv

Alternatively, to install into a new environment, run::

    conda create -n envname wtv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wtv:<tag>

(see `wtv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wtv| image:: https://img.shields.io/conda/dn/bioconda/wtv.svg?style=flat
   :target: https://anaconda.org/bioconda/wtv
   :alt:   (downloads)
.. |docker_wtv| image:: https://quay.io/repository/biocontainers/wtv/status
   :target: https://quay.io/repository/biocontainers/wtv
.. _`wtv/tags`: https://quay.io/repository/biocontainers/wtv?tab=tags


.. raw:: html

    <script>
        var package = "wtv";
        var versions = ["0.1.0","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtv/README.html