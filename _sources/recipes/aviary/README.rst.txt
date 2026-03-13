:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aviary'
.. highlight: bash

aviary
======

.. conda:recipe:: aviary
   :replaces_section_title:
   :noindex:

   aviary \- Metagenomics pipeline using long and short reads.

   :homepage: https://github.com/rhysnewell/aviary
   :documentation: https://rhysnewell.github.io/aviary
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`aviary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aviary/meta.yaml>`_

   Aviary is an easy to use hybrid assembler and metagenomic pipeline

   For more details see documentation\: https\:\/\/rhysnewell.github.io\/aviary.


.. conda:package:: aviary

   |downloads_aviary| |docker_aviary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.5.4-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on biopython: 
   :depends on extern: 
   :depends on mamba: ``>=1.5.12``
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on pigz: 
   :depends on python: ``>=3.8,<3.12``
   :depends on ruamel.yaml: ``>=0.15.99``
   :depends on snakemake-minimal: ``>=7.0.0,<=7.32.4``

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

    pixi global install aviary

to add into an existing workspace instead, run::

    pixi add aviary

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aviary

Alternatively, to install into a new environment, run::

    conda create -n envname aviary

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aviary:<tag>

(see `aviary/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aviary| image:: https://img.shields.io/conda/dn/bioconda/aviary.svg?style=flat
   :target: https://anaconda.org/bioconda/aviary
   :alt:   (downloads)
.. |docker_aviary| image:: https://quay.io/repository/biocontainers/aviary/status
   :target: https://quay.io/repository/biocontainers/aviary
.. _`aviary/tags`: https://quay.io/repository/biocontainers/aviary?tab=tags


.. raw:: html

    <script>
        var package = "aviary";
        var versions = ["0.12.0","0.11.1","0.11.0","0.10.0","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aviary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aviary/README.html