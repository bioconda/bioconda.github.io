:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation450kprobe'
.. highlight: bash

bioconductor-illuminahumanmethylation450kprobe
==============================================

.. conda:recipe:: bioconductor-illuminahumanmethylation450kprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type IlluminaHumanMethylation450k

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/IlluminaHumanMethylation450kprobe.html
   :license: LGPL
   :recipe: /`bioconductor-illuminahumanmethylation450kprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kprobe/meta.yaml>`_

   Probe sequences from Illumina \(ftp.illumina.com\) for hm450 probes


.. conda:package:: bioconductor-illuminahumanmethylation450kprobe

   |downloads_bioconductor-illuminahumanmethylation450kprobe| |docker_bioconductor-illuminahumanmethylation450kprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.6-14</code>,  <code>2.0.6-13</code>,  <code>2.0.6-12</code>,  <code>2.0.6-11</code>,  <code>2.0.6-10</code>,  <code>2.0.6-9</code>,  <code>2.0.6-8</code>,  <code>2.0.6-7</code>,  <code>2.0.6-6</code>,  </span></summary>
      

      ``2.0.6-14``,  ``2.0.6-13``,  ``2.0.6-12``,  ``2.0.6-11``,  ``2.0.6-10``,  ``2.0.6-9``,  ``2.0.6-8``,  ``2.0.6-7``,  ``2.0.6-6``,  ``2.0.6-5``,  ``2.0.6-4``,  ``2.0.6-3``,  ``2.0.6-2``,  ``2.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
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

    pixi global install bioconductor-illuminahumanmethylation450kprobe

to add into an existing workspace instead, run::

    pixi add bioconductor-illuminahumanmethylation450kprobe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-illuminahumanmethylation450kprobe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-illuminahumanmethylation450kprobe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation450kprobe:<tag>

(see `bioconductor-illuminahumanmethylation450kprobe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-illuminahumanmethylation450kprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation450kprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation450kprobe
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation450kprobe| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe
.. _`bioconductor-illuminahumanmethylation450kprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation450kprobe";
        var versions = ["2.0.6","2.0.6","2.0.6","2.0.6","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kprobe/README.html