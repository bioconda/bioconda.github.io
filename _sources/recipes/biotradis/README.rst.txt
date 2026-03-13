:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biotradis'
.. highlight: bash

biotradis
=========

.. conda:recipe:: biotradis
   :replaces_section_title:
   :noindex:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/sanger-pathogens/Bio-Tradis
   :license: GPL3 / GPL-3.0-only
   :recipe: /`biotradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biotradis/meta.yaml>`_

   


.. conda:package:: biotradis

   |downloads_biotradis| |docker_biotradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.5-5</code>,  <code>1.4.5-4</code>,  <code>1.4.5-3</code>,  <code>1.4.5-2</code>,  <code>1.4.5-1</code>,  <code>1.4.5-0</code>,  <code>1.4.1-0</code>,  <code>1.4.1.dev-4</code>,  <code>1.4.1.dev-3</code>,  </span></summary>
      

      ``1.4.5-5``,  ``1.4.5-4``,  ``1.4.5-3``,  ``1.4.5-2``,  ``1.4.5-1``,  ``1.4.5-0``,  ``1.4.1-0``,  ``1.4.1.dev-4``,  ``1.4.1.dev-3``,  ``1.4.1.dev-2``,  ``1.4.1.dev-1``,  ``1.4.1.dev-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: 
   :depends on bwa: 
   :depends on htslib: 
   :depends on perl: 
   :depends on perl-app-cpanminus: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-exception-class: 
   :depends on perl-local-lib: 
   :depends on perl-moose: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-pathtools: 
   :depends on perl-scalar-util-numeric: 
   :depends on perl-text-csv: 
   :depends on r-base: 
   :depends on r-getopt: 
   :depends on r-mass: 
   :depends on samtools: 
   :depends on smalt: 

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

    pixi global install biotradis

to add into an existing workspace instead, run::

    pixi add biotradis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biotradis

Alternatively, to install into a new environment, run::

    conda create -n envname biotradis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biotradis:<tag>

(see `biotradis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biotradis| image:: https://img.shields.io/conda/dn/bioconda/biotradis.svg?style=flat
   :target: https://anaconda.org/bioconda/biotradis
   :alt:   (downloads)
.. |docker_biotradis| image:: https://quay.io/repository/biocontainers/biotradis/status
   :target: https://quay.io/repository/biocontainers/biotradis
.. _`biotradis/tags`: https://quay.io/repository/biocontainers/biotradis?tab=tags


.. raw:: html

    <script>
        var package = "biotradis";
        var versions = ["1.4.5","1.4.5","1.4.5","1.4.5","1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biotradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biotradis/README.html