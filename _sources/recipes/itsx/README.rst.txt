:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itsx'
.. highlight: bash

itsx
====

.. conda:recipe:: itsx
   :replaces_section_title:
   :noindex:

   ITSx is an open source software utility to extract the highly variable ITS1 and ITS2 subregions from ITS sequences\, which is commonly used as a molecular barcode for e.g. fungi.

   :homepage: http://microbiology.se/software/itsx/
   :license: GNU General Public License v3.0
   :recipe: /`itsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsx/meta.yaml>`_

   


.. conda:package:: itsx

   |downloads_itsx| |docker_itsx|

   :versions:
      
      

      ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1b-2``,  ``1.1b-1``,  ``1.1b-0``

      

   
   :depends on hmmer: ``>=3.1b2``
   :depends on perl: 

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

    pixi global install itsx

to add into an existing workspace instead, run::

    pixi add itsx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install itsx

Alternatively, to install into a new environment, run::

    conda create -n envname itsx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/itsx:<tag>

(see `itsx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_itsx| image:: https://img.shields.io/conda/dn/bioconda/itsx.svg?style=flat
   :target: https://anaconda.org/bioconda/itsx
   :alt:   (downloads)
.. |docker_itsx| image:: https://quay.io/repository/biocontainers/itsx/status
   :target: https://quay.io/repository/biocontainers/itsx
.. _`itsx/tags`: https://quay.io/repository/biocontainers/itsx?tab=tags


.. raw:: html

    <script>
        var package = "itsx";
        var versions = ["1.1.3","1.1.3","1.1.2","1.1b","1.1b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsx/README.html