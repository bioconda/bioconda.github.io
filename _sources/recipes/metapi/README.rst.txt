:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapi'
.. highlight: bash

metapi
======

.. conda:recipe:: metapi
   :replaces_section_title:
   :noindex:

   A general metagenomics data mining system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/metapi
   :license: GPL3 / GPL-3.0-only
   :recipe: /`metapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi/meta.yaml>`_
   :links: biotools: :biotools:`metapi`

   


.. conda:package:: metapi

   |downloads_metapi| |docker_metapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.73``
   :depends on executor: 
   :depends on fd-find: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pigz: 
   :depends on python: ``>=3.7``
   :depends on ruamel.yaml: 
   :depends on seaborn: 
   :depends on seqkit: 
   :depends on seqtk: 
   :depends on snakemake-minimal: ``>=7.0``
   :depends on sra-tools: ``>=2.11.0``

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

    pixi global install metapi

to add into an existing workspace instead, run::

    pixi add metapi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metapi

Alternatively, to install into a new environment, run::

    conda create -n envname metapi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metapi:<tag>

(see `metapi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metapi| image:: https://img.shields.io/conda/dn/bioconda/metapi.svg?style=flat
   :target: https://anaconda.org/bioconda/metapi
   :alt:   (downloads)
.. |docker_metapi| image:: https://quay.io/repository/biocontainers/metapi/status
   :target: https://quay.io/repository/biocontainers/metapi
.. _`metapi/tags`: https://quay.io/repository/biocontainers/metapi?tab=tags


.. raw:: html

    <script>
        var package = "metapi";
        var versions = ["3.0.0","2.5.0","2.4.0","2.3.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapi/README.html