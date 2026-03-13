:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-qc-annotation'
.. highlight: bash

atol-qc-annotation
==================

.. conda:recipe:: atol-qc-annotation
   :replaces_section_title:
   :noindex:

   Run QC on GTF and GFF files.

   :homepage: https://github.com/TomHarrop/atol-qc-annotation
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-qc-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-annotation/meta.yaml>`_

   


.. conda:package:: atol-qc-annotation

   |downloads_atol-qc-annotation| |docker_atol-qc-annotation|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on agat: ``>=1.5.1``
   :depends on bbmap: ``>=39.52``
   :depends on busco: ``>=5.8.3,<6``
   :depends on omark: ``>=0.3.1``
   :depends on pytables: ``>=3.10.2``
   :depends on python: ``>=3.12,<3.13``
   :depends on snakemake: ``>=9.11.6,<10``

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

    pixi global install atol-qc-annotation

to add into an existing workspace instead, run::

    pixi add atol-qc-annotation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atol-qc-annotation

Alternatively, to install into a new environment, run::

    conda create -n envname atol-qc-annotation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atol-qc-annotation:<tag>

(see `atol-qc-annotation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atol-qc-annotation| image:: https://img.shields.io/conda/dn/bioconda/atol-qc-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-qc-annotation
   :alt:   (downloads)
.. |docker_atol-qc-annotation| image:: https://quay.io/repository/biocontainers/atol-qc-annotation/status
   :target: https://quay.io/repository/biocontainers/atol-qc-annotation
.. _`atol-qc-annotation/tags`: https://quay.io/repository/biocontainers/atol-qc-annotation?tab=tags


.. raw:: html

    <script>
        var package = "atol-qc-annotation";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-qc-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-qc-annotation/README.html