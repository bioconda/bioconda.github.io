:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'razers3'
.. highlight: bash

razers3
=======

.. conda:recipe:: razers3
   :replaces_section_title:
   :noindex:

   RazerS 3 \- Faster\, fully sensitive read mapping.

   :homepage: https://www.seqan.de/apps/razers3.html
   :developer docs: https://github.com/seqan/seqan/tree/main/apps/razers3
   :license: GPL3 / GPL-3.0-only
   :recipe: /`razers3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3/meta.yaml>`_

   


.. conda:package:: razers3

   |downloads_razers3| |docker_razers3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.12-0</code>,  <code>3.5.8-7</code>,  <code>3.5.8-6</code>,  <code>3.5.8-5</code>,  <code>3.5.8-4</code>,  <code>3.5.8-3</code>,  <code>3.5.8-2</code>,  <code>3.5.8-1</code>,  <code>3.5.8-0</code>,  </span></summary>
      

      ``3.5.12-0``,  ``3.5.8-7``,  ``3.5.8-6``,  ``3.5.8-5``,  ``3.5.8-4``,  ``3.5.8-3``,  ``3.5.8-2``,  ``3.5.8-1``,  ``3.5.8-0``,  ``3.5.3-3``,  ``3.5.3-2``,  ``3.5.3-1``,  ``3.5.3-0``,  ``3.5.0-1``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
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

    pixi global install razers3

to add into an existing workspace instead, run::

    pixi add razers3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install razers3

Alternatively, to install into a new environment, run::

    conda create -n envname razers3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/razers3:<tag>

(see `razers3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_razers3| image:: https://img.shields.io/conda/dn/bioconda/razers3.svg?style=flat
   :target: https://anaconda.org/bioconda/razers3
   :alt:   (downloads)
.. |docker_razers3| image:: https://quay.io/repository/biocontainers/razers3/status
   :target: https://quay.io/repository/biocontainers/razers3
.. _`razers3/tags`: https://quay.io/repository/biocontainers/razers3?tab=tags


.. raw:: html

    <script>
        var package = "razers3";
        var versions = ["3.5.12","3.5.8","3.5.8","3.5.8","3.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/razers3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/razers3/README.html