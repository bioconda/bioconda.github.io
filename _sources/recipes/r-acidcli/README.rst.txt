:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidcli'
.. highlight: bash

r-acidcli
=========

.. conda:recipe:: r-acidcli
   :replaces_section_title:
   :noindex:

   Interative R command line interface toolkit for Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidcli/
   :developer docs: https://github.com/acidgenomics/r-acidcli
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidcli/meta.yaml>`_

   


.. conda:package:: r-acidcli

   |downloads_r-acidcli| |docker_r-acidcli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-2</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.6-0</code>,  </span></summary>
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: ``>=3.6.1``
   :depends on r-crayon: ``>=1.5.2``
   :depends on r-goalie: ``>=0.7.0``
   :depends on r-rlang: ``>=1.1.1``

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

    pixi global install r-acidcli

to add into an existing workspace instead, run::

    pixi add r-acidcli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidcli

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidcli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidcli:<tag>

(see `r-acidcli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidcli| image:: https://img.shields.io/conda/dn/bioconda/r-acidcli.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidcli
   :alt:   (downloads)
.. |docker_r-acidcli| image:: https://quay.io/repository/biocontainers/r-acidcli/status
   :target: https://quay.io/repository/biocontainers/r-acidcli
.. _`r-acidcli/tags`: https://quay.io/repository/biocontainers/r-acidcli?tab=tags


.. raw:: html

    <script>
        var package = "r-acidcli";
        var versions = ["0.3.2","0.3.1","0.3.0","0.3.0","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidcli/README.html