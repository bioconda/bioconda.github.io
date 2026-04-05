:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ropebwt2'
.. highlight: bash

ropebwt2
========

.. conda:recipe:: ropebwt2
   :replaces_section_title:
   :noindex:

   Incremental construction of FM\-index for DNA sequences.

   :homepage: https://github.com/lh3/ropebwt2
   :license: MIT / MIT
   :recipe: /`ropebwt2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2/meta.yaml>`_

   


.. conda:package:: ropebwt2

   |downloads_ropebwt2| |docker_ropebwt2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r187-11</code>,  <code>r187-10</code>,  <code>r187-9</code>,  <code>r187-8</code>,  <code>r187-7</code>,  <code>r187-6</code>,  <code>r187-5</code>,  <code>r187-4</code>,  <code>r187-3</code>,  </span></summary>
      

      ``r187-11``,  ``r187-10``,  ``r187-9``,  ``r187-8``,  ``r187-7``,  ``r187-6``,  ``r187-5``,  ``r187-4``,  ``r187-3``,  ``r187-2``,  ``r187-1``,  ``r187-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install ropebwt2

to add into an existing workspace instead, run::

    pixi add ropebwt2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ropebwt2

Alternatively, to install into a new environment, run::

    conda create -n envname ropebwt2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ropebwt2:<tag>

(see `ropebwt2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ropebwt2| image:: https://img.shields.io/conda/dn/bioconda/ropebwt2.svg?style=flat
   :target: https://anaconda.org/bioconda/ropebwt2
   :alt:   (downloads)
.. |docker_ropebwt2| image:: https://quay.io/repository/biocontainers/ropebwt2/status
   :target: https://quay.io/repository/biocontainers/ropebwt2
.. _`ropebwt2/tags`: https://quay.io/repository/biocontainers/ropebwt2?tab=tags


.. raw:: html

    <script>
        var package = "ropebwt2";
        var versions = ["r187","r187","r187","r187","r187"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ropebwt2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ropebwt2/README.html