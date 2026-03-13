:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiobase'
.. highlight: bash

r-bcbiobase
===========

.. conda:recipe:: r-bcbiobase
   :replaces_section_title:
   :noindex:

   Base functions and generics for bcbio R packages.

   :homepage: https://r.acidgenomics.com/packages/bcbiobase/
   :developer docs: https://github.com/hbc/bcbioBase
   :license: GPL / GPL-3.0
   :recipe: /`r-bcbiobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiobase/meta.yaml>`_

   


.. conda:package:: r-bcbiobase

   |downloads_r-bcbiobase| |docker_r-bcbiobase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-2</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.22-0</code>,  <code>0.6.21-1</code>,  </span></summary>
      

      ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.22-0``,  ``0.6.21-1``,  ``0.6.21-0``,  ``0.6.16-1``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.13-1``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.2.15-1``,  ``0.2.15-0``,  ``0.2.12-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidexperiment: ``>=0.5.0``
   :depends on r-acidplyr: ``>=0.5.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.1``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-syntactic: ``>=0.7.0``

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

    pixi global install r-bcbiobase

to add into an existing workspace instead, run::

    pixi add r-bcbiobase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bcbiobase

Alternatively, to install into a new environment, run::

    conda create -n envname r-bcbiobase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bcbiobase:<tag>

(see `r-bcbiobase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bcbiobase| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiobase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiobase
   :alt:   (downloads)
.. |docker_r-bcbiobase| image:: https://quay.io/repository/biocontainers/r-bcbiobase/status
   :target: https://quay.io/repository/biocontainers/r-bcbiobase
.. _`r-bcbiobase/tags`: https://quay.io/repository/biocontainers/r-bcbiobase?tab=tags


.. raw:: html

    <script>
        var package = "r-bcbiobase";
        var versions = ["0.9.0","0.9.0","0.8.2","0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiobase/README.html