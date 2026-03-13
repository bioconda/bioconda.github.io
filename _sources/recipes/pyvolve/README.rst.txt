:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyvolve'
.. highlight: bash

pyvolve
=======

.. conda:recipe:: pyvolve
   :replaces_section_title:
   :noindex:

   Pyvolve is an open\-source Python module for simulating sequences along a phylogenetic tree according to continuous\-time Markov models of sequence evolution.

   :homepage: https://github.com/sjspielman/pyvolve
   :documentation: https://sjspielman.github.io/pyvolve
   
   :license: BSD / BSD-2-Clause
   :recipe: /`pyvolve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvolve/meta.yaml>`_

   


.. conda:package:: pyvolve

   |downloads_pyvolve| |docker_pyvolve|

   :versions:
      
      

      ``1.1.0-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.8.8-2``,  ``0.8.8-0``,  ``0.8.7-0``

      

   
   :depends on biopython: 
   :depends on numpy: ``>=1.20.0``
   :depends on python: ``>=3``
   :depends on scipy: 

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

    pixi global install pyvolve

to add into an existing workspace instead, run::

    pixi add pyvolve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyvolve

Alternatively, to install into a new environment, run::

    conda create -n envname pyvolve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyvolve:<tag>

(see `pyvolve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyvolve| image:: https://img.shields.io/conda/dn/bioconda/pyvolve.svg?style=flat
   :target: https://anaconda.org/bioconda/pyvolve
   :alt:   (downloads)
.. |docker_pyvolve| image:: https://quay.io/repository/biocontainers/pyvolve/status
   :target: https://quay.io/repository/biocontainers/pyvolve
.. _`pyvolve/tags`: https://quay.io/repository/biocontainers/pyvolve?tab=tags


.. raw:: html

    <script>
        var package = "pyvolve";
        var versions = ["1.1.0","0.9.0","0.8.9","0.8.8","0.8.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyvolve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyvolve/README.html