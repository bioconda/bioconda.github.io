:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet'
.. highlight: bash

biopet
======

.. conda:recipe:: biopet
   :replaces_section_title:
   :noindex:

   Biopet \(Bio Pipeline Execution Toolkit\) is the main pipeline development framework of the LUMC Sequencing Analysis Support Core team.

   :homepage: https://github.com/biopet/biopet
   :license: https://github.com/biopet/biopet/blob/develop/biopet-core/src/main/resources/nl/lumc/sasc/biopet/License.txt
   :recipe: /`biopet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet/meta.yaml>`_

   


.. conda:package:: biopet

   |downloads_biopet| |docker_biopet|

   :versions:
      
      

      ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-0``

      

   
   :depends on openjdk: 
   :depends on python: 
   :depends on r-argparse: 
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-reshape: 

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

    pixi global install biopet

to add into an existing workspace instead, run::

    pixi add biopet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet

Alternatively, to install into a new environment, run::

    conda create -n envname biopet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet:<tag>

(see `biopet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet| image:: https://img.shields.io/conda/dn/bioconda/biopet.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet
   :alt:   (downloads)
.. |docker_biopet| image:: https://quay.io/repository/biocontainers/biopet/status
   :target: https://quay.io/repository/biocontainers/biopet
.. _`biopet/tags`: https://quay.io/repository/biocontainers/biopet?tab=tags


.. raw:: html

    <script>
        var package = "biopet";
        var versions = ["0.9.0","0.9.0","0.9.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet/README.html