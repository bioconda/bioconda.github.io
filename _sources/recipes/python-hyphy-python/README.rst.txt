:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hyphy-python'
.. highlight: bash

python-hyphy-python
===================

.. conda:recipe:: python-hyphy-python
   :replaces_section_title:
   :noindex:

   HyPhy package interface library

   :homepage: https://github.com/veg/hyphy-python
   :license: MIT / MIT
   :recipe: /`python-hyphy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hyphy-python/meta.yaml>`_
   :links: biotools: :biotools:`HyPhy`

   


.. conda:package:: python-hyphy-python

   |downloads_python-hyphy-python| |docker_python-hyphy-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.12-3</code>,  <code>0.1.12-2</code>,  <code>0.1.12-1</code>,  <code>0.1.12-0</code>,  <code>0.1.11-1</code>,  <code>0.1.11-0</code>,  <code>0.1.10-5</code>,  <code>0.1.10-3</code>,  <code>0.1.10-2</code>,  </span></summary>
      

      ``0.1.12-3``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-5``,  ``0.1.10-3``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libcurl: ``>=8.10.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
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

    pixi global install python-hyphy-python

to add into an existing workspace instead, run::

    pixi add python-hyphy-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-hyphy-python

Alternatively, to install into a new environment, run::

    conda create -n envname python-hyphy-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-hyphy-python:<tag>

(see `python-hyphy-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-hyphy-python| image:: https://img.shields.io/conda/dn/bioconda/python-hyphy-python.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hyphy-python
   :alt:   (downloads)
.. |docker_python-hyphy-python| image:: https://quay.io/repository/biocontainers/python-hyphy-python/status
   :target: https://quay.io/repository/biocontainers/python-hyphy-python
.. _`python-hyphy-python/tags`: https://quay.io/repository/biocontainers/python-hyphy-python?tab=tags


.. raw:: html

    <script>
        var package = "python-hyphy-python";
        var versions = ["0.1.12","0.1.12","0.1.12","0.1.12","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hyphy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hyphy-python/README.html