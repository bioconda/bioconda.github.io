:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcore'
.. highlight: bash

pbcore
======

.. conda:recipe:: pbcore
   :replaces_section_title:
   :noindex:

   A Python library for reading and writing PacBio data files

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore/meta.yaml>`_

   


.. conda:package:: pbcore

   |downloads_pbcore| |docker_pbcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-2</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>1.7.1-0</code>,  <code>1.6.5-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.2.10-2</code>,  </span></summary>
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``1.7.1-0``,  ``1.6.5-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.7-1``,  ``1.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.74``
   :depends on numpy: ``>=1.17``
   :depends on pysam: ``>=0.15.1``
   :depends on python: ``>=3.7,<3.8``
   :depends on setuptools: 

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

    pixi global install pbcore

to add into an existing workspace instead, run::

    pixi add pbcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbcore

Alternatively, to install into a new environment, run::

    conda create -n envname pbcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbcore:<tag>

(see `pbcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbcore| image:: https://img.shields.io/conda/dn/bioconda/pbcore.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcore
   :alt:   (downloads)
.. |docker_pbcore| image:: https://quay.io/repository/biocontainers/pbcore/status
   :target: https://quay.io/repository/biocontainers/pbcore
.. _`pbcore/tags`: https://quay.io/repository/biocontainers/pbcore?tab=tags


.. raw:: html

    <script>
        var package = "pbcore";
        var versions = ["2.1.2","2.1.2","2.1.2","1.7.1","1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcore/README.html