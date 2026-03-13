:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutalyzer_hgvs_parser'
.. highlight: bash

mutalyzer_hgvs_parser
=====================

.. conda:recipe:: mutalyzer_hgvs_parser
   :replaces_section_title:
   :noindex:

   Mutalyzer HGVS variant description parser

   :homepage: The package home page
   :documentation: https://mutalyzer-hgvs-parser.readthedocs.io
   
   :developer docs: https://github.com/mutalyzer/hgvs-parser
   :license: MIT / MIT
   :recipe: /`mutalyzer_hgvs_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutalyzer_hgvs_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutalyzer_hgvs_parser/meta.yaml>`_

   


.. conda:package:: mutalyzer_hgvs_parser

   |downloads_mutalyzer_hgvs_parser| |docker_mutalyzer_hgvs_parser|

   :versions:
      
      

      ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``

      

   
   :depends on lark: ``>=1.0.0``
   :depends on python: 

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

    pixi global install mutalyzer_hgvs_parser

to add into an existing workspace instead, run::

    pixi add mutalyzer_hgvs_parser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mutalyzer_hgvs_parser

Alternatively, to install into a new environment, run::

    conda create -n envname mutalyzer_hgvs_parser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mutalyzer_hgvs_parser:<tag>

(see `mutalyzer_hgvs_parser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mutalyzer_hgvs_parser| image:: https://img.shields.io/conda/dn/bioconda/mutalyzer_hgvs_parser.svg?style=flat
   :target: https://anaconda.org/bioconda/mutalyzer_hgvs_parser
   :alt:   (downloads)
.. |docker_mutalyzer_hgvs_parser| image:: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser/status
   :target: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser
.. _`mutalyzer_hgvs_parser/tags`: https://quay.io/repository/biocontainers/mutalyzer_hgvs_parser?tab=tags


.. raw:: html

    <script>
        var package = "mutalyzer_hgvs_parser";
        var versions = ["0.3.9","0.3.8","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutalyzer_hgvs_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutalyzer_hgvs_parser/README.html