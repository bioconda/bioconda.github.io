:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimmomatic'
.. highlight: bash

trimmomatic
===========

.. conda:recipe:: trimmomatic
   :replaces_section_title:
   :noindex:

   A flexible read trimming tool for Illumina NGS data.

   :homepage: https://www.plabipd.de/trimmomatic_main.html
   :developer docs: https://github.com/usadellab/Trimmomatic
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`trimmomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic/meta.yaml>`_
   :links: biotools: :biotools:`trimmomatic`, usegalaxy-eu: :usegalaxy-eu:`trimmomatic`, doi: :doi:`10.1093/bioinformatics/btu170`

   


.. conda:package:: trimmomatic

   |downloads_trimmomatic| |docker_trimmomatic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40-0</code>,  <code>0.39-2</code>,  <code>0.39-1</code>,  <code>0.39-0</code>,  <code>0.38-1</code>,  <code>0.36-6</code>,  <code>0.36-5</code>,  <code>0.36-4</code>,  <code>0.36-3</code>,  </span></summary>
      

      ``0.40-0``,  ``0.39-2``,  ``0.39-1``,  ``0.39-0``,  ``0.38-1``,  ``0.36-6``,  ``0.36-5``,  ``0.36-4``,  ``0.36-3``,  ``0.36-1``,  ``0.35-7``,  ``0.35-6``,  ``0.35-4``,  ``0.35-3``,  ``0.35-2``,  ``0.35-1``,  ``0.33-3``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.32-4``,  ``0.32-3``,  ``0.32-2``,  ``0.32-1``,  ``0.32-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 
   :depends on python: 

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

    pixi global install trimmomatic

to add into an existing workspace instead, run::

    pixi add trimmomatic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trimmomatic

Alternatively, to install into a new environment, run::

    conda create -n envname trimmomatic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trimmomatic:<tag>

(see `trimmomatic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trimmomatic| image:: https://img.shields.io/conda/dn/bioconda/trimmomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/trimmomatic
   :alt:   (downloads)
.. |docker_trimmomatic| image:: https://quay.io/repository/biocontainers/trimmomatic/status
   :target: https://quay.io/repository/biocontainers/trimmomatic
.. _`trimmomatic/tags`: https://quay.io/repository/biocontainers/trimmomatic?tab=tags


.. raw:: html

    <script>
        var package = "trimmomatic";
        var versions = ["0.40","0.39","0.39","0.39","0.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimmomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimmomatic/README.html