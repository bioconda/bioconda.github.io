:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecko'
.. highlight: bash

gecko
=====

.. conda:recipe:: gecko
   :replaces_section_title:
   :noindex:

   A pairwise genome comparison software for the detection of High\-scoring Segment Pairs.

   :homepage: https://github.com/otorreno/gecko
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gecko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0679-9`

   


.. conda:package:: gecko

   |downloads_gecko| |docker_gecko|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-6</code>,  <code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  <code>1.1-0</code>,  <code>1.1.b-0</code>,  </span></summary>
      

      ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.1.b-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install gecko

to add into an existing workspace instead, run::

    pixi add gecko

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gecko

Alternatively, to install into a new environment, run::

    conda create -n envname gecko

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gecko:<tag>

(see `gecko/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gecko| image:: https://img.shields.io/conda/dn/bioconda/gecko.svg?style=flat
   :target: https://anaconda.org/bioconda/gecko
   :alt:   (downloads)
.. |docker_gecko| image:: https://quay.io/repository/biocontainers/gecko/status
   :target: https://quay.io/repository/biocontainers/gecko
.. _`gecko/tags`: https://quay.io/repository/biocontainers/gecko?tab=tags


.. raw:: html

    <script>
        var package = "gecko";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecko/README.html