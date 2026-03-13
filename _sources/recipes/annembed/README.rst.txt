:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annembed'
.. highlight: bash

annembed
========

.. conda:recipe:: annembed
   :replaces_section_title:
   :noindex:

   annembed is an ultra\-fast and scalable non\-linear dimension reduction\/embedding algorithm \(similar to UMAP or t\-SNE\) for large\-scale biological data

   :homepage: https://github.com/jianshu93/annembed
   :license: MIT
   :recipe: /`annembed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annembed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annembed/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqae172`

   


.. conda:package:: annembed

   |downloads_annembed| |docker_annembed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  </span></summary>
      

      ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openssl: ``>=3.5.4,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install annembed

to add into an existing workspace instead, run::

    pixi add annembed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annembed

Alternatively, to install into a new environment, run::

    conda create -n envname annembed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annembed:<tag>

(see `annembed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annembed| image:: https://img.shields.io/conda/dn/bioconda/annembed.svg?style=flat
   :target: https://anaconda.org/bioconda/annembed
   :alt:   (downloads)
.. |docker_annembed| image:: https://quay.io/repository/biocontainers/annembed/status
   :target: https://quay.io/repository/biocontainers/annembed
.. _`annembed/tags`: https://quay.io/repository/biocontainers/annembed?tab=tags


.. raw:: html

    <script>
        var package = "annembed";
        var versions = ["0.2.6","0.2.5","0.2.4","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annembed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annembed/README.html