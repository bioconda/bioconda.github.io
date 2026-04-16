:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnu-wget'
.. highlight: bash

gnu-wget
========

.. conda:recipe:: gnu-wget
   :replaces_section_title:
   :noindex:

   Retrieve files using HTTP\, HTTPS and FTP

   :homepage: http://www.gnu.org/software/wget/
   :license: GPLv3
   :recipe: /`gnu-wget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-wget/meta.yaml>`_

   


.. conda:package:: gnu-wget

   |downloads_gnu-wget| |docker_gnu-wget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18-10</code>,  <code>1.18-9</code>,  <code>1.18-8</code>,  <code>1.18-7</code>,  <code>1.18-6</code>,  <code>1.18-5</code>,  <code>1.18-4</code>,  <code>1.18-3</code>,  <code>1.18-2</code>,  </span></summary>
      

      ``1.18-10``,  ``1.18-9``,  ``1.18-8``,  ``1.18-7``,  ``1.18-6``,  ``1.18-5``,  ``1.18-4``,  ``1.18-3``,  ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libidn2: ``>=2,<3.0a0``
   :depends on libunistring: ``>=0,<1.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``1.0.2n.*``
   :depends on zlib: 

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

    pixi global install gnu-wget

to add into an existing workspace instead, run::

    pixi add gnu-wget

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gnu-wget

Alternatively, to install into a new environment, run::

    conda create -n envname gnu-wget

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gnu-wget:<tag>

(see `gnu-wget/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gnu-wget| image:: https://img.shields.io/conda/dn/bioconda/gnu-wget.svg?style=flat
   :target: https://anaconda.org/bioconda/gnu-wget
   :alt:   (downloads)
.. |docker_gnu-wget| image:: https://quay.io/repository/biocontainers/gnu-wget/status
   :target: https://quay.io/repository/biocontainers/gnu-wget
.. _`gnu-wget/tags`: https://quay.io/repository/biocontainers/gnu-wget?tab=tags


.. raw:: html

    <script>
        var package = "gnu-wget";
        var versions = ["1.18","1.18","1.18","1.18","1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-wget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-wget/README.html