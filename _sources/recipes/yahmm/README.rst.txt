:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yahmm'
.. highlight: bash

yahmm
=====

.. conda:recipe:: yahmm
   :replaces_section_title:
   :noindex:

   YAHMM is a HMM package for Python\, implemented in Cython for speed.

   :homepage: https://pypi.org/project/yahmm
   :license: MIT / MIT
   :recipe: /`yahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm/meta.yaml>`_

   


.. conda:package:: yahmm

   |downloads_yahmm| |docker_yahmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-12</code>,  <code>1.1.3-11</code>,  <code>1.1.3-9</code>,  <code>1.1.3-8</code>,  <code>1.1.3-7</code>,  <code>1.1.3-6</code>,  <code>1.1.3-5</code>,  <code>1.1.3-4</code>,  <code>1.1.3-3</code>,  </span></summary>
      

      ``1.1.3-12``,  ``1.1.3-11``,  ``1.1.3-9``,  ``1.1.3-8``,  ``1.1.3-7``,  ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-1``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cython: ``>=0.20.1,<3``
   :depends on libgcc: ``>=14``
   :depends on matplotlib-base: ``>=1.3.1``
   :depends on networkx: ``>=1.8.1``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.8.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=0.13.3``

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

    pixi global install yahmm

to add into an existing workspace instead, run::

    pixi add yahmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install yahmm

Alternatively, to install into a new environment, run::

    conda create -n envname yahmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/yahmm:<tag>

(see `yahmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_yahmm| image:: https://img.shields.io/conda/dn/bioconda/yahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/yahmm
   :alt:   (downloads)
.. |docker_yahmm| image:: https://quay.io/repository/biocontainers/yahmm/status
   :target: https://quay.io/repository/biocontainers/yahmm
.. _`yahmm/tags`: https://quay.io/repository/biocontainers/yahmm?tab=tags


.. raw:: html

    <script>
        var package = "yahmm";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahmm/README.html