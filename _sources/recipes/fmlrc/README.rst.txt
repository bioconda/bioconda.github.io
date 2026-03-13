:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fmlrc'
.. highlight: bash

fmlrc
=====

.. conda:recipe:: fmlrc
   :replaces_section_title:
   :noindex:

   A long\-read error correction tool using the multi\-string Burrows Wheeler Transform

   :homepage: https://github.com/holtjma/fmlrc
   :license: MIT / MIT
   :recipe: /`fmlrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fmlrc/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2051-3`

   


.. conda:package:: fmlrc

   |downloads_fmlrc| |docker_fmlrc|

   :versions:
      
      

      ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.2-0``

      

   
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

    pixi global install fmlrc

to add into an existing workspace instead, run::

    pixi add fmlrc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fmlrc

Alternatively, to install into a new environment, run::

    conda create -n envname fmlrc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fmlrc:<tag>

(see `fmlrc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fmlrc| image:: https://img.shields.io/conda/dn/bioconda/fmlrc.svg?style=flat
   :target: https://anaconda.org/bioconda/fmlrc
   :alt:   (downloads)
.. |docker_fmlrc| image:: https://quay.io/repository/biocontainers/fmlrc/status
   :target: https://quay.io/repository/biocontainers/fmlrc
.. _`fmlrc/tags`: https://quay.io/repository/biocontainers/fmlrc?tab=tags


.. raw:: html

    <script>
        var package = "fmlrc";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fmlrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fmlrc/README.html