:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrodigal-gv'
.. highlight: bash

pyrodigal-gv
============

.. conda:recipe:: pyrodigal-gv
   :replaces_section_title:
   :noindex:

   A Pyrodigal extension to predict genes in giant viruses and viruses with alternative genetic code.

   :homepage: https://github.com/althonos/pyrodigal-gv
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyrodigal-gv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal-gv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal-gv/meta.yaml>`_

   


.. conda:package:: pyrodigal-gv

   |downloads_pyrodigal-gv| |docker_pyrodigal-gv|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on pyrodigal: ``>=3.1,<4``
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

    pixi global install pyrodigal-gv

to add into an existing workspace instead, run::

    pixi add pyrodigal-gv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyrodigal-gv

Alternatively, to install into a new environment, run::

    conda create -n envname pyrodigal-gv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyrodigal-gv:<tag>

(see `pyrodigal-gv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyrodigal-gv| image:: https://img.shields.io/conda/dn/bioconda/pyrodigal-gv.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrodigal-gv
   :alt:   (downloads)
.. |docker_pyrodigal-gv| image:: https://quay.io/repository/biocontainers/pyrodigal-gv/status
   :target: https://quay.io/repository/biocontainers/pyrodigal-gv
.. _`pyrodigal-gv/tags`: https://quay.io/repository/biocontainers/pyrodigal-gv?tab=tags


.. raw:: html

    <script>
        var package = "pyrodigal-gv";
        var versions = ["0.3.2","0.3.1","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrodigal-gv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrodigal-gv/README.html