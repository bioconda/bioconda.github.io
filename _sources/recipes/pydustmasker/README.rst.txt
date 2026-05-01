:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydustmasker'
.. highlight: bash

pydustmasker
============

.. conda:recipe:: pydustmasker
   :replaces_section_title:
   :noindex:

   Python library for identification and masking of low\-complexity regions in nucleotide sequences.


   :homepage: https://apcamargo.github.io/pydustmasker
   :developer docs: https://github.com/apcamargo/pydustmasker
   :license: MIT / MIT
   :recipe: /`pydustmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydustmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydustmasker/meta.yaml>`_

   


.. conda:package:: pydustmasker

   |downloads_pydustmasker| |docker_pydustmasker|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install pydustmasker

to add into an existing workspace instead, run::

    pixi add pydustmasker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydustmasker

Alternatively, to install into a new environment, run::

    conda create -n envname pydustmasker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydustmasker:<tag>

(see `pydustmasker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydustmasker| image:: https://img.shields.io/conda/dn/bioconda/pydustmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/pydustmasker
   :alt:   (downloads)
.. |docker_pydustmasker| image:: https://quay.io/repository/biocontainers/pydustmasker/status
   :target: https://quay.io/repository/biocontainers/pydustmasker
.. _`pydustmasker/tags`: https://quay.io/repository/biocontainers/pydustmasker?tab=tags


.. raw:: html

    <script>
        var package = "pydustmasker";
        var versions = ["2.0.0","1.0.3","1.0.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydustmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydustmasker/README.html