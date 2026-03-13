:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'newick_utils'
.. highlight: bash

newick_utils
============

.. conda:recipe:: newick_utils
   :replaces_section_title:
   :noindex:

   The Newick Utilities are a suite of Unix shell tools for processing phylogenetic trees. We distribute the package under the BSD License. Functions include re\-rooting\, extracting subtrees\, trimming\, pruning\, condensing\, drawing \(ASCII graphics or SVG\).

   :homepage: http://cegg.unige.ch/newick_utils
   :license: BSD License
   :recipe: /`newick_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils/meta.yaml>`_

   


.. conda:package:: newick_utils

   |downloads_newick_utils| |docker_newick_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-9</code>,  <code>1.6-8</code>,  <code>1.6-7</code>,  <code>1.6-6</code>,  <code>1.6-5</code>,  <code>1.6-4</code>,  <code>1.6-3</code>,  <code>1.6-2</code>,  <code>1.6-1</code>,  </span></summary>
      

      ``1.6-9``,  ``1.6-8``,  ``1.6-7``,  ``1.6-6``,  ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libxml2: ``>=2.13.5,<3.0a0``

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

    pixi global install newick_utils

to add into an existing workspace instead, run::

    pixi add newick_utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install newick_utils

Alternatively, to install into a new environment, run::

    conda create -n envname newick_utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/newick_utils:<tag>

(see `newick_utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_newick_utils| image:: https://img.shields.io/conda/dn/bioconda/newick_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/newick_utils
   :alt:   (downloads)
.. |docker_newick_utils| image:: https://quay.io/repository/biocontainers/newick_utils/status
   :target: https://quay.io/repository/biocontainers/newick_utils
.. _`newick_utils/tags`: https://quay.io/repository/biocontainers/newick_utils?tab=tags


.. raw:: html

    <script>
        var package = "newick_utils";
        var versions = ["1.6","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/newick_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/newick_utils/README.html