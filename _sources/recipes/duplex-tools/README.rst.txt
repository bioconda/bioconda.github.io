:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplex-tools'
.. highlight: bash

duplex-tools
============

.. conda:recipe:: duplex-tools
   :replaces_section_title:
   :noindex:

   Duplex Tools contains a set of utilities for dealing with ONT Duplex sequencing data.

   :homepage: https://github.com/nanoporetech/duplex-tools
   :documentation: https://github.com/nanoporetech/duplex-tools/blob/v0.3.3/README.md
   
   :license: OTHER / MPL-2.0
   :recipe: /`duplex-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools/meta.yaml>`_

   


.. conda:package:: duplex-tools

   |downloads_duplex-tools| |docker_duplex-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3-0</code>,  <code>0.2.17-0</code>,  <code>0.2.15-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  <code>0.2.9-0</code>,  </span></summary>
      

      ``0.3.3-0``,  ``0.2.17-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on mappy: 
   :depends on matplotlib-base: 
   :depends on more-itertools: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on parasail-python: 
   :depends on pod5: 
   :depends on pyfastx: ``>=0.9.0``
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on python-edlib: 
   :depends on tqdm: 

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

    pixi global install duplex-tools

to add into an existing workspace instead, run::

    pixi add duplex-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install duplex-tools

Alternatively, to install into a new environment, run::

    conda create -n envname duplex-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/duplex-tools:<tag>

(see `duplex-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_duplex-tools| image:: https://img.shields.io/conda/dn/bioconda/duplex-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/duplex-tools
   :alt:   (downloads)
.. |docker_duplex-tools| image:: https://quay.io/repository/biocontainers/duplex-tools/status
   :target: https://quay.io/repository/biocontainers/duplex-tools
.. _`duplex-tools/tags`: https://quay.io/repository/biocontainers/duplex-tools?tab=tags


.. raw:: html

    <script>
        var package = "duplex-tools";
        var versions = ["0.3.3","0.2.17","0.2.15","0.2.14","0.2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplex-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplex-tools/README.html