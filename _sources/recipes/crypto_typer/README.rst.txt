:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crypto_typer'
.. highlight: bash

crypto_typer
============

.. conda:recipe:: crypto_typer
   :replaces_section_title:
   :noindex:

   This package crypto\_typer\: tool to subtype the parasite\, Cryptosporidium\, based on the 18S and gp60 markers.

   :homepage: https://github.com/christineyanta/crypto_typer
   :license: Apache License, Version 2.0
   :recipe: /`crypto_typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crypto_typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crypto_typer/meta.yaml>`_

   


.. conda:package:: crypto_typer

   |downloads_crypto_typer| |docker_crypto_typer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on blast: ``2.9.0``
   :depends on numpy: ``>=1.15.4``
   :depends on python: ``>=3.4``

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

    pixi global install crypto_typer

to add into an existing workspace instead, run::

    pixi add crypto_typer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crypto_typer

Alternatively, to install into a new environment, run::

    conda create -n envname crypto_typer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crypto_typer:<tag>

(see `crypto_typer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crypto_typer| image:: https://img.shields.io/conda/dn/bioconda/crypto_typer.svg?style=flat
   :target: https://anaconda.org/bioconda/crypto_typer
   :alt:   (downloads)
.. |docker_crypto_typer| image:: https://quay.io/repository/biocontainers/crypto_typer/status
   :target: https://quay.io/repository/biocontainers/crypto_typer
.. _`crypto_typer/tags`: https://quay.io/repository/biocontainers/crypto_typer?tab=tags


.. raw:: html

    <script>
        var package = "crypto_typer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crypto_typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crypto_typer/README.html