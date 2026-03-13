:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sevenbridges-python'
.. highlight: bash

sevenbridges-python
===================

.. conda:recipe:: sevenbridges-python
   :replaces_section_title:
   :noindex:

   SBG API python client bindings

   :homepage: https://github.com/sbg/sevenbridges-python
   :license: APACHE / Apache-2.0
   :recipe: /`sevenbridges-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python/meta.yaml>`_

   sevenbridges\-python is a Python library that provides an interface for the Seven Bridges Platform the Cancer Genomics Cloud and Cavatica public APIs. It works with Python versions 2.6\+ and supports Python 3.


.. conda:package:: sevenbridges-python

   |downloads_sevenbridges-python| |docker_sevenbridges-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.2-0</code>,  <code>2.11.1-0</code>,  <code>2.11.0-0</code>,  <code>2.10.3-0</code>,  <code>2.10.2-0</code>,  <code>2.10.1-0</code>,  <code>2.10.0-0</code>,  <code>2.9.2-0</code>,  <code>2.9.1-0</code>,  </span></summary>
      

      ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.1-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.0-0``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.3-0``,  ``0.20.2-0``,  ``0.20.0-0``,  ``0.18.2-1``,  ``0.18.2-0``,  ``0.17.7-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.2-0``,  ``0.15.0-0``,  ``0.7.2-1``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3``
   :depends on requests: ``>=2.25.1``

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

    pixi global install sevenbridges-python

to add into an existing workspace instead, run::

    pixi add sevenbridges-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sevenbridges-python

Alternatively, to install into a new environment, run::

    conda create -n envname sevenbridges-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sevenbridges-python:<tag>

(see `sevenbridges-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sevenbridges-python| image:: https://img.shields.io/conda/dn/bioconda/sevenbridges-python.svg?style=flat
   :target: https://anaconda.org/bioconda/sevenbridges-python
   :alt:   (downloads)
.. |docker_sevenbridges-python| image:: https://quay.io/repository/biocontainers/sevenbridges-python/status
   :target: https://quay.io/repository/biocontainers/sevenbridges-python
.. _`sevenbridges-python/tags`: https://quay.io/repository/biocontainers/sevenbridges-python?tab=tags


.. raw:: html

    <script>
        var package = "sevenbridges-python";
        var versions = ["2.11.2","2.11.1","2.11.0","2.10.3","2.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sevenbridges-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sevenbridges-python/README.html