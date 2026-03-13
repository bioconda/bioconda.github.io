:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-italicsdata'
.. highlight: bash

bioconductor-italicsdata
========================

.. conda:recipe:: bioconductor-italicsdata
   :replaces_section_title:
   :noindex:

   ITALICSData

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ITALICSData.html
   :license: GPL
   :recipe: /`bioconductor-italicsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italicsdata/meta.yaml>`_

   Data needed to use the ITALICS package


.. conda:package:: bioconductor-italicsdata

   |downloads_bioconductor-italicsdata| |docker_bioconductor-italicsdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.44.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-italicsdata

to add into an existing workspace instead, run::

    pixi add bioconductor-italicsdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-italicsdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-italicsdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-italicsdata:<tag>

(see `bioconductor-italicsdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-italicsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italicsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-italicsdata
   :alt:   (downloads)
.. |docker_bioconductor-italicsdata| image:: https://quay.io/repository/biocontainers/bioconductor-italicsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italicsdata
.. _`bioconductor-italicsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-italicsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-italicsdata";
        var versions = ["2.48.0","2.44.0","2.40.0","2.38.0","2.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italicsdata/README.html