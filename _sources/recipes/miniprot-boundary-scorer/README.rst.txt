:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniprot-boundary-scorer'
.. highlight: bash

miniprot-boundary-scorer
========================

.. conda:recipe:: miniprot-boundary-scorer
   :replaces_section_title:
   :noindex:

   Miniprot boundary scorer parses introns\, starts\, stops and exons from miniprot\'s alignment output and scores them.

   :homepage: https://github.com/tomasbruna/miniprot-boundary-scorer
   :license: Artistic-1.0
   :recipe: /`miniprot-boundary-scorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot-boundary-scorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot-boundary-scorer/meta.yaml>`_

   


.. conda:package:: miniprot-boundary-scorer

   |downloads_miniprot-boundary-scorer| |docker_miniprot-boundary-scorer|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install miniprot-boundary-scorer

to add into an existing workspace instead, run::

    pixi add miniprot-boundary-scorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install miniprot-boundary-scorer

Alternatively, to install into a new environment, run::

    conda create -n envname miniprot-boundary-scorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/miniprot-boundary-scorer:<tag>

(see `miniprot-boundary-scorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_miniprot-boundary-scorer| image:: https://img.shields.io/conda/dn/bioconda/miniprot-boundary-scorer.svg?style=flat
   :target: https://anaconda.org/bioconda/miniprot-boundary-scorer
   :alt:   (downloads)
.. |docker_miniprot-boundary-scorer| image:: https://quay.io/repository/biocontainers/miniprot-boundary-scorer/status
   :target: https://quay.io/repository/biocontainers/miniprot-boundary-scorer
.. _`miniprot-boundary-scorer/tags`: https://quay.io/repository/biocontainers/miniprot-boundary-scorer?tab=tags


.. raw:: html

    <script>
        var package = "miniprot-boundary-scorer";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniprot-boundary-scorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniprot-boundary-scorer/README.html