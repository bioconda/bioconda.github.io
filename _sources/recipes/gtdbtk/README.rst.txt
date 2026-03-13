:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtdbtk'
.. highlight: bash

gtdbtk
======

.. conda:recipe:: gtdbtk
   :replaces_section_title:
   :noindex:

   A toolkit for assigning objective taxonomic classifications to bacterial and archaeal genomes.

   :homepage: https://github.com/Ecogenomics/GTDBTk
   :documentation: https://ecogenomics.github.io/GTDBTk
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gtdbtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdbtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdbtk/meta.yaml>`_
   :links: biotools: :biotools:`GTDB-Tk`, usegalaxy-eu: :usegalaxy-eu:`gtdbtk_classify_wf`, doi: :doi:`10.1093/bioinformatics/btz848`

   


.. conda:package:: gtdbtk

   |downloads_gtdbtk| |docker_gtdbtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-2</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.1-1</code>,  </span></summary>
      

      ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-5``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dendropy: ``>=4.1.0``
   :depends on fastani: ``>=1.32``
   :depends on fasttree: ``>=2.1.9``
   :depends on hmmer: ``3.*``
   :depends on numpy: ``>=1.9.0``
   :depends on pplacer: ``1.1.alpha19.*``
   :depends on prodigal: ``>=2.6.2``
   :depends on pydantic: ``>=1.9.2,<2``
   :depends on python: ``>=3.6,<3.14``
   :depends on skani: ``>=0.3.0``
   :depends on tqdm: ``>=4.35.0``

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

    pixi global install gtdbtk

to add into an existing workspace instead, run::

    pixi add gtdbtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gtdbtk

Alternatively, to install into a new environment, run::

    conda create -n envname gtdbtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gtdbtk:<tag>

(see `gtdbtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gtdbtk| image:: https://img.shields.io/conda/dn/bioconda/gtdbtk.svg?style=flat
   :target: https://anaconda.org/bioconda/gtdbtk
   :alt:   (downloads)
.. |docker_gtdbtk| image:: https://quay.io/repository/biocontainers/gtdbtk/status
   :target: https://quay.io/repository/biocontainers/gtdbtk
.. _`gtdbtk/tags`: https://quay.io/repository/biocontainers/gtdbtk?tab=tags


.. raw:: html

    <script>
        var package = "gtdbtk";
        var versions = ["2.6.1","2.6.1","2.6.1","2.6.0","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtdbtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtdbtk/README.html