:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poa'
.. highlight: bash

poa
===

.. conda:recipe:: poa
   :replaces_section_title:
   :noindex:

   POA is Partial Order Alignment\, a fast program for multiple sequence alignment in bioinformatics. Its advantages are speed\, scalability\, sensitivity\, and the superior ability to handle branching \/ indels in the alignment.

   :homepage: https://sourceforge.net/projects/poamsa
   :license: GPL / GPL-2.0-or-later
   :recipe: /`poa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa/meta.yaml>`_

   


.. conda:package:: poa

   |downloads_poa| |docker_poa|

   :versions:
      
      

      ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends on blast-legacy: 
   :depends on libgcc: ``>=13``

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

    pixi global install poa

to add into an existing workspace instead, run::

    pixi add poa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poa

Alternatively, to install into a new environment, run::

    conda create -n envname poa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poa:<tag>

(see `poa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poa| image:: https://img.shields.io/conda/dn/bioconda/poa.svg?style=flat
   :target: https://anaconda.org/bioconda/poa
   :alt:   (downloads)
.. |docker_poa| image:: https://quay.io/repository/biocontainers/poa/status
   :target: https://quay.io/repository/biocontainers/poa
.. _`poa/tags`: https://quay.io/repository/biocontainers/poa?tab=tags


.. raw:: html

    <script>
        var package = "poa";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poa/README.html