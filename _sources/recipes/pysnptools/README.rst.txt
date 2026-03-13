:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysnptools'
.. highlight: bash

pysnptools
==========

.. conda:recipe:: pysnptools
   :replaces_section_title:
   :noindex:

   Python library for reading and manipulating genetic data

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/
   :license: Apache 2.0
   :recipe: /`pysnptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools/meta.yaml>`_

   


.. conda:package:: pysnptools

   |downloads_pysnptools| |docker_pysnptools|

   :versions:
      
      

      ``0.3.13-6``,  ``0.3.13-5``,  ``0.3.13-4``,  ``0.3.13-3``,  ``0.3.13-2``,  ``0.3.13-0``,  ``0.3.9-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on numpy: ``>=1.9.2``
   :depends on pandas: ``>=0.16.2``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on scipy: ``>=0.15.1``

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

    pixi global install pysnptools

to add into an existing workspace instead, run::

    pixi add pysnptools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pysnptools

Alternatively, to install into a new environment, run::

    conda create -n envname pysnptools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pysnptools:<tag>

(see `pysnptools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pysnptools| image:: https://img.shields.io/conda/dn/bioconda/pysnptools.svg?style=flat
   :target: https://anaconda.org/bioconda/pysnptools
   :alt:   (downloads)
.. |docker_pysnptools| image:: https://quay.io/repository/biocontainers/pysnptools/status
   :target: https://quay.io/repository/biocontainers/pysnptools
.. _`pysnptools/tags`: https://quay.io/repository/biocontainers/pysnptools?tab=tags


.. raw:: html

    <script>
        var package = "pysnptools";
        var versions = ["0.3.13","0.3.13","0.3.13","0.3.13","0.3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysnptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysnptools/README.html