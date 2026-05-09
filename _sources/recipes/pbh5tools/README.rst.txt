:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbh5tools'
.. highlight: bash

pbh5tools
=========

.. conda:recipe:: pbh5tools
   :replaces_section_title:
   :noindex:

   A swiss\-army knife for interrogating PacBio® HDF5 files \(cmp.h5\, bas.h5\).

   :homepage: https://github.com/PacificBiosciences/pbh5tools
   :license: BSD-3-Clause
   :recipe: /`pbh5tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbh5tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbh5tools/meta.yaml>`_

   


.. conda:package:: pbh5tools

   |downloads_pbh5tools| |docker_pbh5tools|

   :versions:
      
      

      ``0.8.0-6``,  ``0.8.0-5``,  ``0.8.0-4``,  ``0.8.0-3``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``

      

   
   :depends on h5py: ``>=1.3.0``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on numpy: ``>=1.6.0``
   :depends on pbcore: ``>=0.8.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on setuptools: 

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

    pixi global install pbh5tools

to add into an existing workspace instead, run::

    pixi add pbh5tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbh5tools

Alternatively, to install into a new environment, run::

    conda create -n envname pbh5tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbh5tools:<tag>

(see `pbh5tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbh5tools| image:: https://img.shields.io/conda/dn/bioconda/pbh5tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pbh5tools
   :alt:   (downloads)
.. |docker_pbh5tools| image:: https://quay.io/repository/biocontainers/pbh5tools/status
   :target: https://quay.io/repository/biocontainers/pbh5tools
.. _`pbh5tools/tags`: https://quay.io/repository/biocontainers/pbh5tools?tab=tags


.. raw:: html

    <script>
        var package = "pbh5tools";
        var versions = ["0.8.0","0.8.0","0.8.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbh5tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbh5tools/README.html