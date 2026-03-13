:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vvv2_display'
.. highlight: bash

vvv2_display
============

.. conda:recipe:: vvv2_display
   :replaces_section_title:
   :noindex:

   Creates png image file with all \[vardict\] variants proportions alongside genome\/assembly with annotations from \[vadr\].

   :homepage: https://github.com/ANSES-Ploufragan/vvv2_display/
   :license: GPL / GPL-3.0-only
   :recipe: /`vvv2_display <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vvv2_display/meta.yaml>`_

   


.. conda:package:: vvv2_display

   |downloads_vvv2_display| |docker_vvv2_display|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5.0-0</code>,  <code>0.2.4.0-0</code>,  <code>0.2.3.9-0</code>,  <code>0.2.3.8-0</code>,  <code>0.2.3.7-0</code>,  <code>0.2.3.6-0</code>,  <code>0.2.3.5-0</code>,  <code>0.2.3.4-0</code>,  <code>0.2.3.3-0</code>,  </span></summary>
      

      ``0.2.5.0-0``,  ``0.2.4.0-0``,  ``0.2.3.9-0``,  ``0.2.3.8-0``,  ``0.2.3.7-0``,  ``0.2.3.6-0``,  ``0.2.3.5-0``,  ``0.2.3.4-0``,  ``0.2.3.3-0``,  ``0.2.3.2-0``,  ``0.2.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=1.23.3``
   :depends on pip: 
   :depends on pysam: ``>=0.19.1``
   :depends on python: ``>=3.9``
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-ggplot2: ``>=3.4.4``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-jsonlite: ``>=1.8.8``
   :depends on r-stringr: ``>=1.5.1``

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

    pixi global install vvv2_display

to add into an existing workspace instead, run::

    pixi add vvv2_display

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vvv2_display

Alternatively, to install into a new environment, run::

    conda create -n envname vvv2_display

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vvv2_display:<tag>

(see `vvv2_display/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vvv2_display| image:: https://img.shields.io/conda/dn/bioconda/vvv2_display.svg?style=flat
   :target: https://anaconda.org/bioconda/vvv2_display
   :alt:   (downloads)
.. |docker_vvv2_display| image:: https://quay.io/repository/biocontainers/vvv2_display/status
   :target: https://quay.io/repository/biocontainers/vvv2_display
.. _`vvv2_display/tags`: https://quay.io/repository/biocontainers/vvv2_display?tab=tags


.. raw:: html

    <script>
        var package = "vvv2_display";
        var versions = ["0.2.5.0","0.2.4.0","0.2.3.9","0.2.3.8","0.2.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vvv2_display/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vvv2_display/README.html