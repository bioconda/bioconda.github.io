:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextgraph'
.. highlight: bash

pretextgraph
============

.. conda:recipe:: pretextgraph
   :replaces_section_title:
   :noindex:

   Embeds bedgraph data into Pretext contact maps.

   :homepage: https://github.com/sanger-tol/PretextGraph
   :documentation: https://github.com/sanger-tol/PretextGraph/blob/0.0.9/README.md
   
   :license: MIT / MIT
   :recipe: /`pretextgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextgraph/meta.yaml>`_

   This is a tool for converting data from a bedgraph format and embedding into a Hi\-C contact map in the Pretext format. The graph data can then be displayed alongside the contact map using the PretextView desktop software \(https\:\/\/github.com\/sanger\-tol\/PretextView\). See https\:\/\/github.com\/sanger\-tol\/PretextMap for how to generate Pretext contact maps\, or search for pretextmap on bioconda.



.. conda:package:: pretextgraph

   |downloads_pretextgraph| |docker_pretextgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  <code>0.0.6-3</code>,  <code>0.0.6-2</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-3``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install pretextgraph

to add into an existing workspace instead, run::

    pixi add pretextgraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pretextgraph

Alternatively, to install into a new environment, run::

    conda create -n envname pretextgraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pretextgraph:<tag>

(see `pretextgraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pretextgraph| image:: https://img.shields.io/conda/dn/bioconda/pretextgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextgraph
   :alt:   (downloads)
.. |docker_pretextgraph| image:: https://quay.io/repository/biocontainers/pretextgraph/status
   :target: https://quay.io/repository/biocontainers/pretextgraph
.. _`pretextgraph/tags`: https://quay.io/repository/biocontainers/pretextgraph?tab=tags


.. raw:: html

    <script>
        var package = "pretextgraph";
        var versions = ["0.0.9","0.0.9","0.0.8","0.0.7","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextgraph/README.html