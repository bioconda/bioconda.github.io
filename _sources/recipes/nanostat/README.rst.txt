:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanostat'
.. highlight: bash

nanostat
========

.. conda:recipe:: nanostat
   :replaces_section_title:
   :noindex:

   Calculate statistics for Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/nanostat
   :license: MIT / MIT License
   :recipe: /`nanostat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat/meta.yaml>`_

   


.. conda:package:: nanostat

   |downloads_nanostat| |docker_nanostat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.8.1-0``,  ``0.7.1-0``,  ``0.2.0-0``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on nanoget: ``>=0.15.0``
   :depends on nanomath: ``>=0.19.0``
   :depends on pysam: ``>=0.16.0``
   :depends on python: ``>=3``

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

    pixi global install nanostat

to add into an existing workspace instead, run::

    pixi add nanostat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanostat

Alternatively, to install into a new environment, run::

    conda create -n envname nanostat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanostat:<tag>

(see `nanostat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanostat| image:: https://img.shields.io/conda/dn/bioconda/nanostat.svg?style=flat
   :target: https://anaconda.org/bioconda/nanostat
   :alt:   (downloads)
.. |docker_nanostat| image:: https://quay.io/repository/biocontainers/nanostat/status
   :target: https://quay.io/repository/biocontainers/nanostat
.. _`nanostat/tags`: https://quay.io/repository/biocontainers/nanostat?tab=tags


.. raw:: html

    <script>
        var package = "nanostat";
        var versions = ["1.6.0","1.5.0","1.4.0","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanostat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanostat/README.html