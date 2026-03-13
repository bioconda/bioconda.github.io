:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codoff'
.. highlight: bash

codoff
======

.. conda:recipe:: codoff
   :replaces_section_title:
   :noindex:

   codoff\: program to measure the irregularity of the codon usage for a single genomic region \(e.g. a BGC\, phage\, etc.\) relative to the full genome.

   :homepage: https://github.com/Kalan-Lab/codoff
   :documentation: https://github.com/Kalan-Lab/codoff/blob/v1.2.3/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`codoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codoff/meta.yaml>`_

   


.. conda:package:: codoff

   |downloads_codoff| |docker_codoff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.8-0</code>,  <code>1.1.5-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on pyrodigal: 
   :depends on python: ``>=3.10``
   :depends on scipy: 
   :depends on seaborn-base: 
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

    pixi global install codoff

to add into an existing workspace instead, run::

    pixi add codoff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install codoff

Alternatively, to install into a new environment, run::

    conda create -n envname codoff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/codoff:<tag>

(see `codoff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_codoff| image:: https://img.shields.io/conda/dn/bioconda/codoff.svg?style=flat
   :target: https://anaconda.org/bioconda/codoff
   :alt:   (downloads)
.. |docker_codoff| image:: https://quay.io/repository/biocontainers/codoff/status
   :target: https://quay.io/repository/biocontainers/codoff
.. _`codoff/tags`: https://quay.io/repository/biocontainers/codoff?tab=tags


.. raw:: html

    <script>
        var package = "codoff";
        var versions = ["1.2.3","1.2.2","1.2.1","1.2.0","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codoff/README.html