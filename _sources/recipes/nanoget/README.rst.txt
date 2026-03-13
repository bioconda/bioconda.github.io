:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoget'
.. highlight: bash

nanoget
=======

.. conda:recipe:: nanoget
   :replaces_section_title:
   :noindex:

   Functions to extract information from Oxford Nanopore sequencing data and alignments.

   :homepage: https://github.com/wdecoster/nanoget
   :license: GPL / GPL-3.0-only
   :recipe: /`nanoget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget/meta.yaml>`_

   


.. conda:package:: nanoget

   |downloads_nanoget| |docker_nanoget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.19.4-0</code>,  <code>1.19.3-0</code>,  <code>1.19.1-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  </span></summary>
      

      ``1.19.4-0``,  ``1.19.3-0``,  ``1.19.1-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.7.4-0``,  ``1.5.2-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.2.2-0``,  ``1.0.2-0``,  ``1.0.0-0``,  ``0.11.7-0``,  ``0.11.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on numpy: 
   :depends on pandas: ``>=2.0.0``
   :depends on pysam: ``>0.10.0``
   :depends on python: ``>=3.0``

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

    pixi global install nanoget

to add into an existing workspace instead, run::

    pixi add nanoget

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanoget

Alternatively, to install into a new environment, run::

    conda create -n envname nanoget

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanoget:<tag>

(see `nanoget/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanoget| image:: https://img.shields.io/conda/dn/bioconda/nanoget.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoget
   :alt:   (downloads)
.. |docker_nanoget| image:: https://quay.io/repository/biocontainers/nanoget/status
   :target: https://quay.io/repository/biocontainers/nanoget
.. _`nanoget/tags`: https://quay.io/repository/biocontainers/nanoget?tab=tags


.. raw:: html

    <script>
        var package = "nanoget";
        var versions = ["1.19.4","1.19.3","1.19.1","1.18.1","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoget/README.html