:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hivclustering'
.. highlight: bash

python-hivclustering
====================

.. conda:recipe:: python-hivclustering
   :replaces_section_title:
   :noindex:

   A Python 3 library that makes inferences on HIV\-1 transmission networks.

   :homepage: https://github.com/veg/hivclustering
   :license: MIT / MIT
   :recipe: /`python-hivclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering/meta.yaml>`_

   


.. conda:package:: python-hivclustering

   |downloads_python-hivclustering| |docker_python-hivclustering|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.6.8-0</code>,  <code>1.6.7-0</code>,  <code>1.6.5-0</code>,  <code>1.5.6-0</code>,  <code>1.5.3-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.6.8-0``,  ``1.6.7-0``,  ``1.6.5-0``,  ``1.5.6-0``,  ``1.5.3-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3``
   :depends on python-bioext: ``>=0.19.0``
   :depends on python-hppy: ``>=0.9.9``
   :depends on python-hyphy-python: ``>=0.1.11``

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

    pixi global install python-hivclustering

to add into an existing workspace instead, run::

    pixi add python-hivclustering

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-hivclustering

Alternatively, to install into a new environment, run::

    conda create -n envname python-hivclustering

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-hivclustering:<tag>

(see `python-hivclustering/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-hivclustering| image:: https://img.shields.io/conda/dn/bioconda/python-hivclustering.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hivclustering
   :alt:   (downloads)
.. |docker_python-hivclustering| image:: https://quay.io/repository/biocontainers/python-hivclustering/status
   :target: https://quay.io/repository/biocontainers/python-hivclustering
.. _`python-hivclustering/tags`: https://quay.io/repository/biocontainers/python-hivclustering?tab=tags


.. raw:: html

    <script>
        var package = "python-hivclustering";
        var versions = ["1.8.0","1.6.8","1.6.7","1.6.5","1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hivclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hivclustering/README.html