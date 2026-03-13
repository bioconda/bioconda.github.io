:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylorank'
.. highlight: bash

phylorank
=========

.. conda:recipe:: phylorank
   :replaces_section_title:
   :noindex:

   PhyloRank provides functionality for calculating the relative evolutionary
   divergence \(RED\) of taxa in a tree and for finding the best placement of
   taxonomic labels in a tree.


   :homepage: https://github.com/dparks1134/PhyloRank
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`phylorank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank/meta.yaml>`_

   


.. conda:package:: phylorank

   |downloads_phylorank| |docker_phylorank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.6-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.43-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biolib: ``>=0.1.0``
   :depends on dendropy: ``>=4.1.0``
   :depends on jinja2: ``>=2.7.3``
   :depends on matplotlib-base: ``<3.5.0``
   :depends on mpld3: ``>=0.5.2``
   :depends on numpy: 
   :depends on python: ``>=3.6``
   :depends on scipy: 

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

    pixi global install phylorank

to add into an existing workspace instead, run::

    pixi add phylorank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylorank

Alternatively, to install into a new environment, run::

    conda create -n envname phylorank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylorank:<tag>

(see `phylorank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylorank| image:: https://img.shields.io/conda/dn/bioconda/phylorank.svg?style=flat
   :target: https://anaconda.org/bioconda/phylorank
   :alt:   (downloads)
.. |docker_phylorank| image:: https://quay.io/repository/biocontainers/phylorank/status
   :target: https://quay.io/repository/biocontainers/phylorank
.. _`phylorank/tags`: https://quay.io/repository/biocontainers/phylorank?tab=tags


.. raw:: html

    <script>
        var package = "phylorank";
        var versions = ["0.1.12","0.1.11","0.1.10","0.1.9","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylorank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylorank/README.html