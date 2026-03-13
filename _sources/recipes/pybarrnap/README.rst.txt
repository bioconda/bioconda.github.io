:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybarrnap'
.. highlight: bash

pybarrnap
=========

.. conda:recipe:: pybarrnap
   :replaces_section_title:
   :noindex:

   Python implementation of barrnap \(Bacterial ribosomal RNA predictor\).

   :homepage: https://github.com/moshi4/pybarrnap
   :documentation: https://github.com/moshi4/pybarrnap/blob/v0.5.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pybarrnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybarrnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybarrnap/meta.yaml>`_

   


.. conda:package:: pybarrnap

   |downloads_pybarrnap| |docker_pybarrnap|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.3.0-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on pyhmmer: ``>=0.11.0``
   :depends on python: ``>=3.9``

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

    pixi global install pybarrnap

to add into an existing workspace instead, run::

    pixi add pybarrnap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybarrnap

Alternatively, to install into a new environment, run::

    conda create -n envname pybarrnap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybarrnap:<tag>

(see `pybarrnap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybarrnap| image:: https://img.shields.io/conda/dn/bioconda/pybarrnap.svg?style=flat
   :target: https://anaconda.org/bioconda/pybarrnap
   :alt:   (downloads)
.. |docker_pybarrnap| image:: https://quay.io/repository/biocontainers/pybarrnap/status
   :target: https://quay.io/repository/biocontainers/pybarrnap
.. _`pybarrnap/tags`: https://quay.io/repository/biocontainers/pybarrnap?tab=tags


.. raw:: html

    <script>
        var package = "pybarrnap";
        var versions = ["0.5.1","0.5.0","0.4.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybarrnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybarrnap/README.html