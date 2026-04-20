:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromap'
.. highlight: bash

chromap
=======

.. conda:recipe:: chromap
   :replaces_section_title:
   :noindex:

   Fast alignment and preprocessing of chromatin profiles

   :homepage: https://github.com/haowenz/chromap
   :documentation: https://zhanghaowen.com/chromap/
   
   :license: MIT / MIT
   :recipe: /`chromap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromap/meta.yaml>`_

   


.. conda:package:: chromap

   |downloads_chromap| |docker_chromap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.5-2</code>,  <code>0.2.5-0</code>,  </span></summary>
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install chromap

to add into an existing workspace instead, run::

    pixi add chromap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chromap

Alternatively, to install into a new environment, run::

    conda create -n envname chromap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chromap:<tag>

(see `chromap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chromap| image:: https://img.shields.io/conda/dn/bioconda/chromap.svg?style=flat
   :target: https://anaconda.org/bioconda/chromap
   :alt:   (downloads)
.. |docker_chromap| image:: https://quay.io/repository/biocontainers/chromap/status
   :target: https://quay.io/repository/biocontainers/chromap
.. _`chromap/tags`: https://quay.io/repository/biocontainers/chromap?tab=tags


.. raw:: html

    <script>
        var package = "chromap";
        var versions = ["0.3.2","0.3.1","0.3.0","0.2.7","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromap/README.html