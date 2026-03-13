:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mir-prefer'
.. highlight: bash

mir-prefer
==========

.. conda:recipe:: mir-prefer
   :replaces_section_title:
   :noindex:

   microRNA PREdiction From small RNA\-seq data

   :homepage: https://github.com/hangelwen/miR-PREFeR
   :license: GPL
   :recipe: /`mir-prefer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer/meta.yaml>`_

   microRNA PREdiction From small RNA\-seq data


.. conda:package:: mir-prefer

   |downloads_mir-prefer| |docker_mir-prefer|

   :versions:
      
      

      ``0.24-4``,  ``0.24-3``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``

      

   
   :depends on bowtie: ``>=1.2.0``
   :depends on python: ``<3``
   :depends on samtools: ``>=0.1.15``
   :depends on viennarna: ``>=1.8.5``

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

    pixi global install mir-prefer

to add into an existing workspace instead, run::

    pixi add mir-prefer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mir-prefer

Alternatively, to install into a new environment, run::

    conda create -n envname mir-prefer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mir-prefer:<tag>

(see `mir-prefer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mir-prefer| image:: https://img.shields.io/conda/dn/bioconda/mir-prefer.svg?style=flat
   :target: https://anaconda.org/bioconda/mir-prefer
   :alt:   (downloads)
.. |docker_mir-prefer| image:: https://quay.io/repository/biocontainers/mir-prefer/status
   :target: https://quay.io/repository/biocontainers/mir-prefer
.. _`mir-prefer/tags`: https://quay.io/repository/biocontainers/mir-prefer?tab=tags


.. raw:: html

    <script>
        var package = "mir-prefer";
        var versions = ["0.24","0.24","0.24","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mir-prefer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mir-prefer/README.html