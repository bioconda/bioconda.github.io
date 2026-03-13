:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicmatrix'
.. highlight: bash

hicmatrix
=========

.. conda:recipe:: hicmatrix
   :replaces_section_title:
   :noindex:

   Library to manage Hi\-C matrices for HiCExplorer and pyGenomeTracks

   :homepage: https://github.com/deeptools/HiCMatrix
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hicmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix/meta.yaml>`_

   


.. conda:package:: hicmatrix

   |downloads_hicmatrix| |docker_hicmatrix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>17.2-0</code>,  <code>17.1-1</code>,  <code>17.1-0</code>,  <code>17-0</code>,  <code>16-0</code>,  <code>15-0</code>,  <code>14-0</code>,  <code>13-0</code>,  <code>12-0</code>,  </span></summary>
      

      ``17.2-0``,  ``17.1-1``,  ``17.1-0``,  ``17-0``,  ``16-0``,  ``15-0``,  ``14-0``,  ``13-0``,  ``12-0``,  ``11-0``,  ``10-1``,  ``10-0``,  ``9-0``,  ``8-0``,  ``7-0``,  ``6-1``,  ``6-0``,  ``5-0``,  ``4-0``,  ``3-0``,  ``2.2-1``,  ``2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cooler: ``>=0.8.10``
   :depends on intervaltree: ``>=3.0.*``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=0.25.*``
   :depends on pytables: ``>=3.5.*``
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=1.2.*``

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

    pixi global install hicmatrix

to add into an existing workspace instead, run::

    pixi add hicmatrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hicmatrix

Alternatively, to install into a new environment, run::

    conda create -n envname hicmatrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hicmatrix:<tag>

(see `hicmatrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hicmatrix| image:: https://img.shields.io/conda/dn/bioconda/hicmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/hicmatrix
   :alt:   (downloads)
.. |docker_hicmatrix| image:: https://quay.io/repository/biocontainers/hicmatrix/status
   :target: https://quay.io/repository/biocontainers/hicmatrix
.. _`hicmatrix/tags`: https://quay.io/repository/biocontainers/hicmatrix?tab=tags


.. raw:: html

    <script>
        var package = "hicmatrix";
        var versions = ["17.2","17.1","17.1","17","16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicmatrix/README.html