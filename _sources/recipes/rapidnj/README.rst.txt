:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapidnj'
.. highlight: bash

rapidnj
=======

.. conda:recipe:: rapidnj
   :replaces_section_title:
   :noindex:

   RapidNJ is an algorithmic engineered implementation of canonical neighbour\-joining. It uses an efficient search heuristic to speed\-up the core computations of the neighbour\-joining method that enables RapidNJ to outperform other state\-of\-the\-art neighbour\-joining implementations.

   :homepage: http://birc.au.dk/software/rapidnj/
   :developer docs: https://github.com/johnlees/rapidnj
   :license: GPL / GPL-2-only
   :recipe: /`rapidnj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidnj/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-540-87361-7_10`

   


.. conda:package:: rapidnj

   |downloads_rapidnj| |docker_rapidnj|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-6</code>,  <code>2.3.2-5</code>,  <code>2.3.2-4</code>,  <code>2.3.2-3</code>,  <code>2.3.2-2</code>,  <code>2.3.2-1</code>,  <code>2.3.2-0</code>,  <code>v2.3.2-2</code>,  <code>v2.3.2-1</code>,  </span></summary>
      

      ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``v2.3.2-2``,  ``v2.3.2-1``,  ``v2.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install rapidnj

to add into an existing workspace instead, run::

    pixi add rapidnj

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rapidnj

Alternatively, to install into a new environment, run::

    conda create -n envname rapidnj

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rapidnj:<tag>

(see `rapidnj/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rapidnj| image:: https://img.shields.io/conda/dn/bioconda/rapidnj.svg?style=flat
   :target: https://anaconda.org/bioconda/rapidnj
   :alt:   (downloads)
.. |docker_rapidnj| image:: https://quay.io/repository/biocontainers/rapidnj/status
   :target: https://quay.io/repository/biocontainers/rapidnj
.. _`rapidnj/tags`: https://quay.io/repository/biocontainers/rapidnj?tab=tags


.. raw:: html

    <script>
        var package = "rapidnj";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapidnj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapidnj/README.html