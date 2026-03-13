:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rd-analyzer'
.. highlight: bash

rd-analyzer
===========

.. conda:recipe:: rd-analyzer
   :replaces_section_title:
   :noindex:

   In silico region of difference \(RD\) analysis of Mycobacterium tuberculosis complex from sequence reads

   :homepage: https://github.com/xiaeryu/RD-Analyzer
   :license: GPL / GPL-3
   :recipe: /`rd-analyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rd-analyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rd-analyzer/meta.yaml>`_

   


.. conda:package:: rd-analyzer

   |downloads_rd-analyzer| |docker_rd-analyzer|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends on bwa: ``0.7.17``
   :depends on python: ``<3``
   :depends on samtools: ``0.1.19``

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

    pixi global install rd-analyzer

to add into an existing workspace instead, run::

    pixi add rd-analyzer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rd-analyzer

Alternatively, to install into a new environment, run::

    conda create -n envname rd-analyzer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rd-analyzer:<tag>

(see `rd-analyzer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rd-analyzer| image:: https://img.shields.io/conda/dn/bioconda/rd-analyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/rd-analyzer
   :alt:   (downloads)
.. |docker_rd-analyzer| image:: https://quay.io/repository/biocontainers/rd-analyzer/status
   :target: https://quay.io/repository/biocontainers/rd-analyzer
.. _`rd-analyzer/tags`: https://quay.io/repository/biocontainers/rd-analyzer?tab=tags


.. raw:: html

    <script>
        var package = "rd-analyzer";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rd-analyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rd-analyzer/README.html