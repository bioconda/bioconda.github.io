:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kinswingr'
.. highlight: bash

bioconductor-kinswingr
======================

.. conda:recipe:: bioconductor-kinswingr
   :replaces_section_title:
   :noindex:

   KinSwingR\: network\-based kinase activity prediction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/KinSwingR.html
   :license: GPL-3
   :recipe: /`bioconductor-kinswingr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kinswingr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kinswingr/meta.yaml>`_

   KinSwingR integrates phosphosite data derived from mass\-spectrometry data and kinase\-substrate predictions to predict kinase activity. Several functions allow the user to build PWM models of kinase\-subtrates\, statistically infer PWM\:substrate matches\, and integrate these data to infer kinase activity.


.. conda:package:: bioconductor-kinswingr

   |downloads_bioconductor-kinswingr| |docker_bioconductor-kinswingr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-sqldf: 

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

    pixi global install bioconductor-kinswingr

to add into an existing workspace instead, run::

    pixi add bioconductor-kinswingr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-kinswingr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-kinswingr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-kinswingr:<tag>

(see `bioconductor-kinswingr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-kinswingr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kinswingr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kinswingr
   :alt:   (downloads)
.. |docker_bioconductor-kinswingr| image:: https://quay.io/repository/biocontainers/bioconductor-kinswingr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kinswingr
.. _`bioconductor-kinswingr/tags`: https://quay.io/repository/biocontainers/bioconductor-kinswingr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kinswingr";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kinswingr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kinswingr/README.html