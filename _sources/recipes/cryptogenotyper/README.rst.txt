:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryptogenotyper'
.. highlight: bash

cryptogenotyper
===============

.. conda:recipe:: cryptogenotyper
   :replaces_section_title:
   :noindex:

   This package crypto\_typer\: tool to subtype the parasite\, Cryptosporidium\, based on the 18S and gp60 markers.

   :homepage: https://github.com/phac-nml/CryptoGenotyper
   :license: APACHE / Apache-2.0
   :recipe: /`cryptogenotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptogenotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryptogenotyper/meta.yaml>`_

   A comprehensive tool for subtyping the parasite Cryptosporidium based on two key genetic markers\: 18S and gp60.
   The tool provides a streamlined workflow for analyzing sequencing data and assigning species and subtypes\,
   making it a valuable resource for research and public health surveillance.



.. conda:package:: cryptogenotyper

   |downloads_cryptogenotyper| |docker_cryptogenotyper|

   :versions:
      
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on biopython: ``>=1.70,<1.78``
   :depends on blast: ``>=2.9.0``
   :depends on clustalw: ``>=2.1``
   :depends on numpy: ``>=1.15.4``
   :depends on python: ``>=3.6``

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

    pixi global install cryptogenotyper

to add into an existing workspace instead, run::

    pixi add cryptogenotyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cryptogenotyper

Alternatively, to install into a new environment, run::

    conda create -n envname cryptogenotyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cryptogenotyper:<tag>

(see `cryptogenotyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cryptogenotyper| image:: https://img.shields.io/conda/dn/bioconda/cryptogenotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/cryptogenotyper
   :alt:   (downloads)
.. |docker_cryptogenotyper| image:: https://quay.io/repository/biocontainers/cryptogenotyper/status
   :target: https://quay.io/repository/biocontainers/cryptogenotyper
.. _`cryptogenotyper/tags`: https://quay.io/repository/biocontainers/cryptogenotyper?tab=tags


.. raw:: html

    <script>
        var package = "cryptogenotyper";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryptogenotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryptogenotyper/README.html