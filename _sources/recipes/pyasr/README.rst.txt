:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyasr'
.. highlight: bash

pyasr
=====

.. conda:recipe:: pyasr
   :replaces_section_title:
   :noindex:

   Ancestral sequence reconstruction using Python.

   :homepage: https://github.com/Zsailer/pyasr
   :license: BSD / BSD-3-Clause
   :recipe: /`pyasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasr/meta.yaml>`_

   


.. conda:package:: pyasr

   |downloads_pyasr| |docker_pyasr|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends on biopython: ``1.69``
   :depends on dendropy: ``>=3.4.0``
   :depends on pandas: ``>=0.20.3``
   :depends on phylopandas: 
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

    pixi global install pyasr

to add into an existing workspace instead, run::

    pixi add pyasr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyasr

Alternatively, to install into a new environment, run::

    conda create -n envname pyasr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyasr:<tag>

(see `pyasr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyasr| image:: https://img.shields.io/conda/dn/bioconda/pyasr.svg?style=flat
   :target: https://anaconda.org/bioconda/pyasr
   :alt:   (downloads)
.. |docker_pyasr| image:: https://quay.io/repository/biocontainers/pyasr/status
   :target: https://quay.io/repository/biocontainers/pyasr
.. _`pyasr/tags`: https://quay.io/repository/biocontainers/pyasr?tab=tags


.. raw:: html

    <script>
        var package = "pyasr";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyasr/README.html