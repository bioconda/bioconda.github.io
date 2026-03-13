:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stjudem'
.. highlight: bash

bioconductor-stjudem
====================

.. conda:recipe:: bioconductor-stjudem
   :replaces_section_title:
   :noindex:

   Microarray Data from Yeoh et al. in MACAT format

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/stjudem.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-stjudem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjudem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stjudem/meta.yaml>`_

   This is a microarray data set on acute lymphoblastic leukemia\, published in 2002 \(Yeoh et al.Cancer Cell 2002\). The experiments were conducted in the St.Jude Children\'s Research Hospital\, Memphis\, Tenessee\, USA. The raw data was preprocessed by variance stabilizing normalization \(Huber et al.\) on probe and subsequent summarization of probe expression values into probe set expression values using median polish.


.. conda:package:: bioconductor-stjudem

   |downloads_bioconductor-stjudem| |docker_bioconductor-stjudem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.37.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.29.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.37.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-stjudem

to add into an existing workspace instead, run::

    pixi add bioconductor-stjudem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-stjudem

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-stjudem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-stjudem:<tag>

(see `bioconductor-stjudem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-stjudem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stjudem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stjudem
   :alt:   (downloads)
.. |docker_bioconductor-stjudem| image:: https://quay.io/repository/biocontainers/bioconductor-stjudem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stjudem
.. _`bioconductor-stjudem/tags`: https://quay.io/repository/biocontainers/bioconductor-stjudem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stjudem";
        var versions = ["1.42.0","1.40.0","1.37.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stjudem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stjudem/README.html