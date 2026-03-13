:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-virus-interpreter'
.. highlight: bash

hmftools-virus-interpreter
==========================

.. conda:recipe:: hmftools-virus-interpreter
   :replaces_section_title:
   :noindex:

   Post\-process VIRUSBreakend summary results.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/virus-interpreter/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-virus-interpreter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-virus-interpreter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-virus-interpreter/meta.yaml>`_

   


.. conda:package:: hmftools-virus-interpreter

   |downloads_hmftools-virus-interpreter| |docker_hmftools-virus-interpreter|

   :versions:
      
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.3-0``

      

   
   :depends on openjdk: ``>=8,<=21``

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

    pixi global install hmftools-virus-interpreter

to add into an existing workspace instead, run::

    pixi add hmftools-virus-interpreter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-virus-interpreter

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-virus-interpreter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-virus-interpreter:<tag>

(see `hmftools-virus-interpreter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-virus-interpreter| image:: https://img.shields.io/conda/dn/bioconda/hmftools-virus-interpreter.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-virus-interpreter
   :alt:   (downloads)
.. |docker_hmftools-virus-interpreter| image:: https://quay.io/repository/biocontainers/hmftools-virus-interpreter/status
   :target: https://quay.io/repository/biocontainers/hmftools-virus-interpreter
.. _`hmftools-virus-interpreter/tags`: https://quay.io/repository/biocontainers/hmftools-virus-interpreter?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-virus-interpreter";
        var versions = ["1.7.2","1.7.1","1.7","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-virus-interpreter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-virus-interpreter/README.html