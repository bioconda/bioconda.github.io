:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyroe'
.. highlight: bash

pyroe
=====

.. conda:recipe:: pyroe
   :replaces_section_title:
   :noindex:

   A python toolkit to aid with scRNA\-seq analysis workflows using alevin\-fry

   :homepage: https://github.com/COMBINE-lab/pyroe
   :license: BSD-3-Clause
   :recipe: /`pyroe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyroe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyroe/meta.yaml>`_

   


.. conda:package:: pyroe

   |downloads_pyroe| |docker_pyroe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on biopython: ``>=1.77``
   :depends on numpy: ``1.23``
   :depends on packaging: ``>=21.0``
   :depends on pandas: ``>=1.3.0,<2.0.0``
   :depends on pyranges: ``0.0.120``
   :depends on python: ``>=3.7``
   :depends on scanpy: ``>=1.8.2``

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

    pixi global install pyroe

to add into an existing workspace instead, run::

    pixi add pyroe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyroe

Alternatively, to install into a new environment, run::

    conda create -n envname pyroe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyroe:<tag>

(see `pyroe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyroe| image:: https://img.shields.io/conda/dn/bioconda/pyroe.svg?style=flat
   :target: https://anaconda.org/bioconda/pyroe
   :alt:   (downloads)
.. |docker_pyroe| image:: https://quay.io/repository/biocontainers/pyroe/status
   :target: https://quay.io/repository/biocontainers/pyroe
.. _`pyroe/tags`: https://quay.io/repository/biocontainers/pyroe?tab=tags


.. raw:: html

    <script>
        var package = "pyroe";
        var versions = ["0.9.3","0.9.2","0.9.2","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyroe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyroe/README.html