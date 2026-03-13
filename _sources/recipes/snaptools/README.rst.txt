:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snaptools'
.. highlight: bash

snaptools
=========

.. conda:recipe:: snaptools
   :replaces_section_title:
   :noindex:

   A module for working with snap files in Python

   :homepage: https://github.com/r3fang/SnapTools.git
   :license: OTHER / LICENSE
   :recipe: /`snaptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaptools/meta.yaml>`_

   


.. conda:package:: snaptools

   |downloads_snaptools| |docker_snaptools|

   :versions:
      
      

      ``1.4.8-1``,  ``1.4.8-0``

      

   
   :depends on future: 
   :depends on h5py: 
   :depends on numpy: 
   :depends on pybedtools: ``>=0.7``
   :depends on pysam: 
   :depends on python: 
   :depends on python-louvain: 

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

    pixi global install snaptools

to add into an existing workspace instead, run::

    pixi add snaptools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snaptools

Alternatively, to install into a new environment, run::

    conda create -n envname snaptools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snaptools:<tag>

(see `snaptools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snaptools| image:: https://img.shields.io/conda/dn/bioconda/snaptools.svg?style=flat
   :target: https://anaconda.org/bioconda/snaptools
   :alt:   (downloads)
.. |docker_snaptools| image:: https://quay.io/repository/biocontainers/snaptools/status
   :target: https://quay.io/repository/biocontainers/snaptools
.. _`snaptools/tags`: https://quay.io/repository/biocontainers/snaptools?tab=tags


.. raw:: html

    <script>
        var package = "snaptools";
        var versions = ["1.4.8","1.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snaptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snaptools/README.html