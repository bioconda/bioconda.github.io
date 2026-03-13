:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnachisel'
.. highlight: bash

dnachisel
=========

.. conda:recipe:: dnachisel
   :replaces_section_title:
   :noindex:

   Optimize DNA sequences under constraints.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaChisel
   :documentation: https://edinburgh-genome-foundry.github.io/DnaChisel
   
   :license: MIT / MIT
   :recipe: /`dnachisel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel/meta.yaml>`_

   


.. conda:package:: dnachisel

   |downloads_dnachisel| |docker_dnachisel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.16-0</code>,  <code>3.2.15-0</code>,  <code>3.2.13-0</code>,  <code>3.2.12-0</code>,  <code>3.2.11-0</code>,  <code>3.2.10-0</code>,  <code>3.2.9-0</code>,  <code>3.2.8-0</code>,  <code>3.2.7-0</code>,  </span></summary>
      

      ``3.2.16-0``,  ``3.2.15-0``,  ``3.2.13-0``,  ``3.2.12-0``,  ``3.2.11-0``,  ``3.2.10-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``,  ``3.2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on docopt: 
   :depends on flametree: 
   :depends on numpy: 
   :depends on proglog: 
   :depends on python: 
   :depends on python-codon-tables: 

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

    pixi global install dnachisel

to add into an existing workspace instead, run::

    pixi add dnachisel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dnachisel

Alternatively, to install into a new environment, run::

    conda create -n envname dnachisel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dnachisel:<tag>

(see `dnachisel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dnachisel| image:: https://img.shields.io/conda/dn/bioconda/dnachisel.svg?style=flat
   :target: https://anaconda.org/bioconda/dnachisel
   :alt:   (downloads)
.. |docker_dnachisel| image:: https://quay.io/repository/biocontainers/dnachisel/status
   :target: https://quay.io/repository/biocontainers/dnachisel
.. _`dnachisel/tags`: https://quay.io/repository/biocontainers/dnachisel?tab=tags


.. raw:: html

    <script>
        var package = "dnachisel";
        var versions = ["3.2.16","3.2.15","3.2.13","3.2.12","3.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnachisel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnachisel/README.html