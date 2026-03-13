:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypolca'
.. highlight: bash

pypolca
=======

.. conda:recipe:: pypolca
   :replaces_section_title:
   :noindex:

   Standalone Python re\-implementation of the POLCA polisher from MaSuRCA

   :homepage: https://github.com/gbouras13/pypolca
   :license: MIT / MIT
   :recipe: /`pypolca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypolca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypolca/meta.yaml>`_

   


.. conda:package:: pypolca

   |downloads_pypolca| |docker_pypolca|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.76``
   :depends on bwa: ``>=0.7.17``
   :depends on click: ``>=8.0.0``
   :depends on freebayes: ``>=1.3.9``
   :depends on loguru: ``>=0.5.3``
   :depends on pandas: ``>=1.4.2``
   :depends on python: ``>=3.8,<4.0``
   :depends on pyyaml: ``>=6.0``
   :depends on samtools: ``>=1.18``

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

    pixi global install pypolca

to add into an existing workspace instead, run::

    pixi add pypolca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pypolca

Alternatively, to install into a new environment, run::

    conda create -n envname pypolca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pypolca:<tag>

(see `pypolca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pypolca| image:: https://img.shields.io/conda/dn/bioconda/pypolca.svg?style=flat
   :target: https://anaconda.org/bioconda/pypolca
   :alt:   (downloads)
.. |docker_pypolca| image:: https://quay.io/repository/biocontainers/pypolca/status
   :target: https://quay.io/repository/biocontainers/pypolca
.. _`pypolca/tags`: https://quay.io/repository/biocontainers/pypolca?tab=tags


.. raw:: html

    <script>
        var package = "pypolca";
        var versions = ["0.4.0","0.3.1","0.3.1","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypolca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypolca/README.html