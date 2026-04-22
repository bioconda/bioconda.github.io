:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustybam'
.. highlight: bash

rustybam
========

.. conda:recipe:: rustybam
   :replaces_section_title:
   :noindex:

   Mitchell Vollger\'s bioinformatics rust utilities.

   :homepage: https://github.com/vollgerlab/rustybam
   :documentation: https://vollgerlab.com/rustybam
   
   :license: MIT / MIT
   :recipe: /`rustybam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam/meta.yaml>`_

   


.. conda:package:: rustybam

   |downloads_rustybam| |docker_rustybam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-0</code>,  <code>0.1.34-0</code>,  <code>0.1.33-2</code>,  <code>0.1.33-1</code>,  <code>0.1.33-0</code>,  <code>0.1.31-2</code>,  <code>0.1.31-1</code>,  <code>0.1.31-0</code>,  <code>0.1.30-1</code>,  </span></summary>
      

      ``0.2.0-0``,  ``0.1.34-0``,  ``0.1.33-2``,  ``0.1.33-1``,  ``0.1.33-0``,  ``0.1.31-2``,  ``0.1.31-1``,  ``0.1.31-0``,  ``0.1.30-1``,  ``0.1.30-0``,  ``0.1.29-1``,  ``0.1.29-0``,  ``0.1.28-1``,  ``0.1.28-0``,  ``0.1.27-1``,  ``0.1.27-0``,  ``0.1.26-1``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install rustybam

to add into an existing workspace instead, run::

    pixi add rustybam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rustybam

Alternatively, to install into a new environment, run::

    conda create -n envname rustybam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rustybam:<tag>

(see `rustybam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rustybam| image:: https://img.shields.io/conda/dn/bioconda/rustybam.svg?style=flat
   :target: https://anaconda.org/bioconda/rustybam
   :alt:   (downloads)
.. |docker_rustybam| image:: https://quay.io/repository/biocontainers/rustybam/status
   :target: https://quay.io/repository/biocontainers/rustybam
.. _`rustybam/tags`: https://quay.io/repository/biocontainers/rustybam?tab=tags


.. raw:: html

    <script>
        var package = "rustybam";
        var versions = ["0.2.0","0.1.34","0.1.33","0.1.33","0.1.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustybam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustybam/README.html