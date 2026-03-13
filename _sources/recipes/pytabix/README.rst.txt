:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytabix'
.. highlight: bash

pytabix
=======

.. conda:recipe:: pytabix
   :replaces_section_title:
   :noindex:

   Fast random access to sorted files compressed with bgzip and indexed by tabix.

   :homepage: https://github.com/slowkow/pytabix
   :license: MIT
   :recipe: /`pytabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytabix/meta.yaml>`_

   


.. conda:package:: pytabix

   |downloads_pytabix| |docker_pytabix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1-7</code>,  <code>0.1-6</code>,  <code>0.1-5</code>,  <code>0.1-4</code>,  <code>0.1-3</code>,  <code>0.1-2</code>,  <code>0.1-1</code>,  <code>0.1-0</code>,  <code>0.0.2-8</code>,  </span></summary>
      

      ``0.1-7``,  ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``,  ``0.0.2-8``,  ``0.0.2-7``,  ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install pytabix

to add into an existing workspace instead, run::

    pixi add pytabix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytabix

Alternatively, to install into a new environment, run::

    conda create -n envname pytabix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytabix:<tag>

(see `pytabix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytabix| image:: https://img.shields.io/conda/dn/bioconda/pytabix.svg?style=flat
   :target: https://anaconda.org/bioconda/pytabix
   :alt:   (downloads)
.. |docker_pytabix| image:: https://quay.io/repository/biocontainers/pytabix/status
   :target: https://quay.io/repository/biocontainers/pytabix
.. _`pytabix/tags`: https://quay.io/repository/biocontainers/pytabix?tab=tags


.. raw:: html

    <script>
        var package = "pytabix";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytabix/README.html