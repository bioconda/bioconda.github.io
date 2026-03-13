:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparem2'
.. highlight: bash

comparem2
=========

.. conda:recipe:: comparem2
   :replaces_section_title:
   :noindex:

   CompareM2 genomes\-to\-report pipeline

   :homepage: https://github.com/cmkobel/comparem2
   :documentation: https://comparem2.readthedocs.io
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`comparem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem2/meta.yaml>`_

   


.. conda:package:: comparem2

   |downloads_comparem2| |docker_comparem2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.2-0</code>,  <code>2.16.1-0</code>,  <code>2.15.3-0</code>,  <code>2.15.2-0</code>,  <code>2.15.1-0</code>,  <code>2.14.1-0</code>,  <code>2.13.1-0</code>,  <code>2.12.1-0</code>,  <code>2.11.2-1</code>,  </span></summary>
      

      ``2.16.2-0``,  ``2.16.1-0``,  ``2.15.3-0``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.14.1-0``,  ``2.13.1-0``,  ``2.12.1-0``,  ``2.11.2-1``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.10.1-0``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.2-0``,  ``2.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on mamba: ``<2``
   :depends on pandas: 
   :depends on pulp: ``<2.8``
   :depends on python: ``<3.12``
   :depends on snakemake-minimal: ``<8``

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

    pixi global install comparem2

to add into an existing workspace instead, run::

    pixi add comparem2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install comparem2

Alternatively, to install into a new environment, run::

    conda create -n envname comparem2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/comparem2:<tag>

(see `comparem2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_comparem2| image:: https://img.shields.io/conda/dn/bioconda/comparem2.svg?style=flat
   :target: https://anaconda.org/bioconda/comparem2
   :alt:   (downloads)
.. |docker_comparem2| image:: https://quay.io/repository/biocontainers/comparem2/status
   :target: https://quay.io/repository/biocontainers/comparem2
.. _`comparem2/tags`: https://quay.io/repository/biocontainers/comparem2?tab=tags


.. raw:: html

    <script>
        var package = "comparem2";
        var versions = ["2.16.2","2.16.1","2.15.3","2.15.2","2.15.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparem2/README.html