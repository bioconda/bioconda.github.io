:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesimulator'
.. highlight: bash

treesimulator
=============

.. conda:recipe:: treesimulator
   :replaces_section_title:
   :noindex:

   Simulation of rooted phylogenetic trees under a given Multitype Birth–Death \(MTBD\) model.

   :homepage: https://github.com/evolbioinfo/treesimulator
   :documentation: https://github.com/evolbioinfo/treesimulator/blob/0.2.27/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treesimulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesimulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesimulator/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.09.09.24313296`, biotools: :biotools:`treesimulator`

   Treesimulator provides fast methods for simulation of rooted phylogenetic trees under 
   Multitype Birth–Death \(MTBD\) models\, in particular the classical BD model\, 
   the BD Exposed\-Infectious \(BDEI\) model\, and BD with superspreading \(BDSS\).



.. conda:package:: treesimulator

   |downloads_treesimulator| |docker_treesimulator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.27-0</code>,  <code>0.2.26-0</code>,  <code>0.2.25-0</code>,  <code>0.2.24-0</code>,  <code>0.2.20-0</code>,  <code>0.2.19-0</code>,  <code>0.2.18-0</code>,  <code>0.2.17-0</code>,  <code>0.2.15-0</code>,  </span></summary>
      

      ``0.2.27-0``,  ``0.2.26-0``,  ``0.2.25-0``,  ``0.2.24-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.15-0``,  ``0.2.8-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ete3: 
   :depends on legacy-cgi: 
   :depends on lifelines: 
   :depends on numpy: 
   :depends on python: ``>=3.9``
   :depends on python-build: 
   :depends on scipy: 
   :depends on six: 
   :depends on sympy: 

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

    pixi global install treesimulator

to add into an existing workspace instead, run::

    pixi add treesimulator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treesimulator

Alternatively, to install into a new environment, run::

    conda create -n envname treesimulator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treesimulator:<tag>

(see `treesimulator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treesimulator| image:: https://img.shields.io/conda/dn/bioconda/treesimulator.svg?style=flat
   :target: https://anaconda.org/bioconda/treesimulator
   :alt:   (downloads)
.. |docker_treesimulator| image:: https://quay.io/repository/biocontainers/treesimulator/status
   :target: https://quay.io/repository/biocontainers/treesimulator
.. _`treesimulator/tags`: https://quay.io/repository/biocontainers/treesimulator?tab=tags


.. raw:: html

    <script>
        var package = "treesimulator";
        var versions = ["0.2.27","0.2.26","0.2.25","0.2.24","0.2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesimulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesimulator/README.html