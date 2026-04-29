:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign-tx'
.. highlight: bash

dialign-tx
==========

.. conda:recipe:: dialign-tx
   :replaces_section_title:
   :noindex:

   DIALIGN\-TX is a greedy and progressive approaches for segment\-based multiple sequence alignment.

   :homepage: https://dialign.gobics.de
   :documentation: http://dialign-tx.gobics.de
   
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`dialign-tx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkq442`, biotools: :biotools:`dialign-tx`

   


.. conda:package:: dialign-tx

   |downloads_dialign-tx| |docker_dialign-tx|

   :versions:
      
      

      ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
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

    pixi global install dialign-tx

to add into an existing workspace instead, run::

    pixi add dialign-tx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dialign-tx

Alternatively, to install into a new environment, run::

    conda create -n envname dialign-tx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dialign-tx:<tag>

(see `dialign-tx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dialign-tx| image:: https://img.shields.io/conda/dn/bioconda/dialign-tx.svg?style=flat
   :target: https://anaconda.org/bioconda/dialign-tx
   :alt:   (downloads)
.. |docker_dialign-tx| image:: https://quay.io/repository/biocontainers/dialign-tx/status
   :target: https://quay.io/repository/biocontainers/dialign-tx
.. _`dialign-tx/tags`: https://quay.io/repository/biocontainers/dialign-tx?tab=tags


.. raw:: html

    <script>
        var package = "dialign-tx";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign-tx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign-tx/README.html