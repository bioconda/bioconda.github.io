:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-msgpack'
.. highlight: bash

python-msgpack
==============

.. conda:recipe:: python-msgpack
   :replaces_section_title:
   :noindex:

   It\'s like JSON. But fast and small.

   :homepage: https://github.com/msgpack/msgpack-python
   :documentation: https://msgpack.org
   
   :license: APACHE / Apache-2.0
   :recipe: /`python-msgpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack/meta.yaml>`_

   


.. conda:package:: python-msgpack

   |downloads_python-msgpack| |docker_python-msgpack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>0.6.1-11</code>,  <code>0.6.1-10</code>,  <code>0.6.1-9</code>,  <code>0.6.1-8</code>,  <code>0.6.1-6</code>,  <code>0.6.1-5</code>,  <code>0.6.1-4</code>,  </span></summary>
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``0.6.1-11``,  ``0.6.1-10``,  ``0.6.1-9``,  ``0.6.1-8``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install python-msgpack

to add into an existing workspace instead, run::

    pixi add python-msgpack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-msgpack

Alternatively, to install into a new environment, run::

    conda create -n envname python-msgpack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-msgpack:<tag>

(see `python-msgpack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-msgpack| image:: https://img.shields.io/conda/dn/bioconda/python-msgpack.svg?style=flat
   :target: https://anaconda.org/bioconda/python-msgpack
   :alt:   (downloads)
.. |docker_python-msgpack| image:: https://quay.io/repository/biocontainers/python-msgpack/status
   :target: https://quay.io/repository/biocontainers/python-msgpack
.. _`python-msgpack/tags`: https://quay.io/repository/biocontainers/python-msgpack?tab=tags


.. raw:: html

    <script>
        var package = "python-msgpack";
        var versions = ["1.1.2","1.1.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-msgpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-msgpack/README.html