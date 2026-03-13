:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-cobalt'
.. highlight: bash

hmftools-cobalt
===============

.. conda:recipe:: hmftools-cobalt
   :replaces_section_title:
   :noindex:

   Calculate read\-depth counts and GC ratios to use in PURPLE.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/cobalt/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-cobalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt/meta.yaml>`_

   


.. conda:package:: hmftools-cobalt

   |downloads_hmftools-cobalt| |docker_hmftools-cobalt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2-0</code>,  <code>2.1-1</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>2.0_beta-1</code>,  <code>2.0_beta-0</code>,  <code>1.16-0</code>,  <code>1.13-1</code>,  <code>1.13-0</code>,  </span></summary>
      

      ``2.2-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0-0``,  ``2.0_beta-1``,  ``2.0_beta-0``,  ``1.16-0``,  ``1.13-1``,  ``1.13-0``,  ``1.11-1``,  ``1.11-0``,  ``1.10-0``,  ``1.9-0``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-copynumber: 
   :depends on openjdk: ``>=8,<=21``
   :depends on r-dplyr: 

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

    pixi global install hmftools-cobalt

to add into an existing workspace instead, run::

    pixi add hmftools-cobalt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-cobalt

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-cobalt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-cobalt:<tag>

(see `hmftools-cobalt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-cobalt| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cobalt.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-cobalt
   :alt:   (downloads)
.. |docker_hmftools-cobalt| image:: https://quay.io/repository/biocontainers/hmftools-cobalt/status
   :target: https://quay.io/repository/biocontainers/hmftools-cobalt
.. _`hmftools-cobalt/tags`: https://quay.io/repository/biocontainers/hmftools-cobalt?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-cobalt";
        var versions = ["2.2","2.1","2.1","2.0","2.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cobalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cobalt/README.html