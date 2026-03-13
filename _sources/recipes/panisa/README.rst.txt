:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panisa'
.. highlight: bash

panisa
======

.. conda:recipe:: panisa
   :replaces_section_title:
   :noindex:

   panISa is a software to search insertion sequence \(IS\) on resequencing data \(bam file\)

   :homepage: https://github.com/bvalot/panISa
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`panisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa/meta.yaml>`_

   


.. conda:package:: panisa

   |downloads_panisa| |docker_panisa|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends on pysam: ``>=0.9``
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.12``

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

    pixi global install panisa

to add into an existing workspace instead, run::

    pixi add panisa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panisa

Alternatively, to install into a new environment, run::

    conda create -n envname panisa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panisa:<tag>

(see `panisa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panisa| image:: https://img.shields.io/conda/dn/bioconda/panisa.svg?style=flat
   :target: https://anaconda.org/bioconda/panisa
   :alt:   (downloads)
.. |docker_panisa| image:: https://quay.io/repository/biocontainers/panisa/status
   :target: https://quay.io/repository/biocontainers/panisa
.. _`panisa/tags`: https://quay.io/repository/biocontainers/panisa?tab=tags


.. raw:: html

    <script>
        var package = "panisa";
        var versions = ["0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panisa/README.html