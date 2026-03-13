:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomicconsensus'
.. highlight: bash

genomicconsensus
================

.. conda:recipe:: genomicconsensus
   :replaces_section_title:
   :noindex:

   PacBio genomic consensus and variant caller for RSII and Sequel

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`genomicconsensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicconsensus/meta.yaml>`_

   


.. conda:package:: genomicconsensus

   |downloads_genomicconsensus| |docker_genomicconsensus|

   :versions:
      
      

      ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``

      

   
   :depends on numpy: ``>=1.16.2``
   :depends on pbcommand: ``>=1.1.1``
   :depends on pbcore: ``>=1.6.5``
   :depends on python: ``<3``
   :depends on python-consensuscore: ``>=1.1.1``
   :depends on python-consensuscore2: ``>=3.4.1``

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

    pixi global install genomicconsensus

to add into an existing workspace instead, run::

    pixi add genomicconsensus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomicconsensus

Alternatively, to install into a new environment, run::

    conda create -n envname genomicconsensus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomicconsensus:<tag>

(see `genomicconsensus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomicconsensus| image:: https://img.shields.io/conda/dn/bioconda/genomicconsensus.svg?style=flat
   :target: https://anaconda.org/bioconda/genomicconsensus
   :alt:   (downloads)
.. |docker_genomicconsensus| image:: https://quay.io/repository/biocontainers/genomicconsensus/status
   :target: https://quay.io/repository/biocontainers/genomicconsensus
.. _`genomicconsensus/tags`: https://quay.io/repository/biocontainers/genomicconsensus?tab=tags


.. raw:: html

    <script>
        var package = "genomicconsensus";
        var versions = ["2.3.3","2.3.3","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicconsensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicconsensus/README.html