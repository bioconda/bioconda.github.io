:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipits'
.. highlight: bash

pipits
======

.. conda:recipe:: pipits
   :replaces_section_title:
   :noindex:

   PIPITS\: An automated pipeline for analyses of fungal internal transcribed spacer \(ITS\) sequences from the Illumina sequencing platform.

   :homepage: https://github.com/hsgweon/pipits
   :documentation: https://github.com/hsgweon/pipits/blob/4.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pipits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits/meta.yaml>`_
   :links: doi: :doi:`10.1111/2041-210X.12399`

   


.. conda:package:: pipits

   |downloads_pipits| |docker_pipits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0-1</code>,  <code>4.0-0</code>,  <code>3.1-0</code>,  <code>3.0-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6-0</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  </span></summary>
      

      ``4.0-1``,  ``4.0-0``,  ``3.1-0``,  ``3.0-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-4``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2-2``,  ``2.2-1``,  ``2.1-5``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biom-format: 
   :depends on fastx_toolkit: 
   :depends on hmmer: 
   :depends on itsx: 
   :depends on numpy: 
   :depends on progressbar2: 
   :depends on python: ``>=3.10``
   :depends on rdptools: 
   :depends on requests: 
   :depends on seqkit: 
   :depends on vsearch: 

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

    pixi global install pipits

to add into an existing workspace instead, run::

    pixi add pipits

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pipits

Alternatively, to install into a new environment, run::

    conda create -n envname pipits

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pipits:<tag>

(see `pipits/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pipits| image:: https://img.shields.io/conda/dn/bioconda/pipits.svg?style=flat
   :target: https://anaconda.org/bioconda/pipits
   :alt:   (downloads)
.. |docker_pipits| image:: https://quay.io/repository/biocontainers/pipits/status
   :target: https://quay.io/repository/biocontainers/pipits
.. _`pipits/tags`: https://quay.io/repository/biocontainers/pipits?tab=tags


.. raw:: html

    <script>
        var package = "pipits";
        var versions = ["4.0","4.0","3.1","3.0","2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipits/README.html