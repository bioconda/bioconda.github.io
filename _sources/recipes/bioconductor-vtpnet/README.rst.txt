:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vtpnet'
.. highlight: bash

bioconductor-vtpnet
===================

.. conda:recipe:: bioconductor-vtpnet
   :replaces_section_title:
   :noindex:

   variant\-transcription factor\-phenotype networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/vtpnet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vtpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet/meta.yaml>`_

   variant\-transcription factor\-phenotype networks\, inspired by Maurano et al.\, Science \(2012\)\, PMID 22955828


.. conda:package:: bioconductor-vtpnet

   |downloads_bioconductor-vtpnet| |docker_bioconductor-vtpnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.50.0-0</code>,  <code>0.46.0-0</code>,  <code>0.42.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-1</code>,  <code>0.30.0-0</code>,  </span></summary>
      

      ``0.50.0-0``,  ``0.46.0-0``,  ``0.42.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-gwascat: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 

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

    pixi global install bioconductor-vtpnet

to add into an existing workspace instead, run::

    pixi add bioconductor-vtpnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vtpnet

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vtpnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vtpnet:<tag>

(see `bioconductor-vtpnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vtpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vtpnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vtpnet
   :alt:   (downloads)
.. |docker_bioconductor-vtpnet| image:: https://quay.io/repository/biocontainers/bioconductor-vtpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vtpnet
.. _`bioconductor-vtpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-vtpnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vtpnet";
        var versions = ["0.50.0","0.46.0","0.42.0","0.40.0","0.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html