:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedtools'
.. highlight: bash

pybedtools
==========

.. conda:recipe:: pybedtools
   :replaces_section_title:
   :noindex:

   Wraps BEDTools for use in Python and adds many additional features.

   :homepage: https://github.com/daler/pybedtools
   :documentation: https://daler.github.io/pybedtools
   
   :license: MIT / MIT
   :recipe: /`pybedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools/meta.yaml>`_
   :links: biotools: :biotools:`pybedtools`

   


.. conda:package:: pybedtools

   |downloads_pybedtools| |docker_pybedtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-3</code>,  <code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-2</code>,  </span></summary>
      

      ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-3``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.10-3``,  ``0.7.10-2``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-1``,  ``0.7.7-1``,  ``0.7.6-1``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.2-1``,  ``0.7.0-1``,  ``0.6.9-6``,  ``0.6.9-5``,  ``0.6.9-4``,  ``0.6.9-3``,  ``0.6.9-2``,  ``0.6.9-1``,  ``0.6.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pybedtools

to add into an existing workspace instead, run::

    pixi add pybedtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybedtools

Alternatively, to install into a new environment, run::

    conda create -n envname pybedtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybedtools:<tag>

(see `pybedtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybedtools| image:: https://img.shields.io/conda/dn/bioconda/pybedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedtools
   :alt:   (downloads)
.. |docker_pybedtools| image:: https://quay.io/repository/biocontainers/pybedtools/status
   :target: https://quay.io/repository/biocontainers/pybedtools
.. _`pybedtools/tags`: https://quay.io/repository/biocontainers/pybedtools?tab=tags


.. raw:: html

    <script>
        var package = "pybedtools";
        var versions = ["0.12.0","0.11.0","0.10.0","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedtools/README.html