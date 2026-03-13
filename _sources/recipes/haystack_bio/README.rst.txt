:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haystack_bio'
.. highlight: bash

haystack_bio
============

.. conda:recipe:: haystack_bio
   :replaces_section_title:
   :noindex:

   Epigenetic Variability and Transcription Factor Motifs Analysis Pipeline

   :homepage: https://github.com/pinellolab/haystack_bio
   :license: GPLv3
   :recipe: /`haystack_bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio/meta.yaml>`_

   


.. conda:package:: haystack_bio

   |downloads_haystack_bio| |docker_haystack_bio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-1</code>,  <code>0.5.5-0</code>,  <code>0.5.4-1</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  <code>0.5.2-8</code>,  <code>0.5.2-7</code>,  <code>0.5.2-6</code>,  <code>0.5.2-5</code>,  </span></summary>
      

      ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-8``,  ``0.5.2-7``,  ``0.5.2-6``,  ``0.5.2-5``,  ``0.5.2-4``,  ``0.5.2-3``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``v0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on bx-python: 
   :depends on jinja2: 
   :depends on matplotlib: 
   :depends on meme: ``4.11.2.*``
   :depends on numpy: ``1.15.*``
   :depends on openjdk: 
   :depends on pandas: 
   :depends on python: ``>=2.7,<3.0a0``
   :depends on sambamba: 
   :depends on scipy: 
   :depends on tqdm: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bigwigaverageoverbed: 
   :depends on weblogo: 

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

    pixi global install haystack_bio

to add into an existing workspace instead, run::

    pixi add haystack_bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haystack_bio

Alternatively, to install into a new environment, run::

    conda create -n envname haystack_bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haystack_bio:<tag>

(see `haystack_bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haystack_bio| image:: https://img.shields.io/conda/dn/bioconda/haystack_bio.svg?style=flat
   :target: https://anaconda.org/bioconda/haystack_bio
   :alt:   (downloads)
.. |docker_haystack_bio| image:: https://quay.io/repository/biocontainers/haystack_bio/status
   :target: https://quay.io/repository/biocontainers/haystack_bio
.. _`haystack_bio/tags`: https://quay.io/repository/biocontainers/haystack_bio?tab=tags


.. raw:: html

    <script>
        var package = "haystack_bio";
        var versions = ["0.5.5","0.5.5","0.5.4","0.5.3","0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystack_bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystack_bio/README.html