:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'portcullis'
.. highlight: bash

portcullis
==========

.. conda:recipe:: portcullis
   :replaces_section_title:
   :noindex:

   Splice junction analysis and filtering from BAM files.

   :homepage: https://github.com/maplesond/portcullis
   :documentation: https://ei-corebioinformatics.github.io/portcullis
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`portcullis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portcullis/meta.yaml>`_

   


.. conda:package:: portcullis

   |downloads_portcullis| |docker_portcullis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-4</code>,  <code>1.2.4-3</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.2.4-4``,  ``1.2.4-3``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-3``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libboost: 
   :depends on libboost-python: ``>=1.84.0,<1.85.0a0``
   :depends on libboost-python-devel: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on samtools: ``>=1.22.1,<2.0a0``
   :depends on samtools: ``>=1.9``
   :depends on tabulate: 

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

    pixi global install portcullis

to add into an existing workspace instead, run::

    pixi add portcullis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install portcullis

Alternatively, to install into a new environment, run::

    conda create -n envname portcullis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/portcullis:<tag>

(see `portcullis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_portcullis| image:: https://img.shields.io/conda/dn/bioconda/portcullis.svg?style=flat
   :target: https://anaconda.org/bioconda/portcullis
   :alt:   (downloads)
.. |docker_portcullis| image:: https://quay.io/repository/biocontainers/portcullis/status
   :target: https://quay.io/repository/biocontainers/portcullis
.. _`portcullis/tags`: https://quay.io/repository/biocontainers/portcullis?tab=tags


.. raw:: html

    <script>
        var package = "portcullis";
        var versions = ["1.2.4","1.2.4","1.2.4","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/portcullis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/portcullis/README.html