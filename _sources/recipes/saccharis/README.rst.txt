:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saccharis'
.. highlight: bash

saccharis
=========

.. conda:recipe:: saccharis
   :replaces_section_title:
   :noindex:

   A CAZyme discovery tool. Easily create phylogenetic trees from FASTA files and CAZyme families.

   :homepage: https://github.com/saccharis/SACCHARIS_2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`saccharis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis/meta.yaml>`_

   Bioinformatics pipeline to automate phylogenetic analysis of CAZyme families in FASTA sequences via creation of phylogenetic trees.


.. conda:package:: saccharis

   |downloads_saccharis| |docker_saccharis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.1.dev21-9</code>,  <code>2.0.1.dev21-8</code>,  </span></summary>
      

      ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.1.dev21-9``,  ``2.0.1.dev21-8``,  ``2.0.1.dev21-7``,  ``2.0.1.dev21-6``,  ``2.0.1.dev21-5``,  ``2.0.1.dev21-4``,  ``2.0.1.dev21-3``,  ``2.0.1.dev21-2``,  ``2.0.1.dev21-0``,  ``2.0.0.dev21-2``,  ``2.0.0.dev21-0``,  ``2.0.0.dev20-0``,  ``2.0.0.dev19-7``,  ``2.0.0.dev19-0``,  ``2.0.0.dev18-0``

      
      .. raw:: html

         </details>
      

   
   :depends on beautifulsoup4: ``>=4.11.1``
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.*``
   :depends on dbcan: ``<4``
   :depends on diamond: ``>=2.0.15``
   :depends on fasttree: ``>=2.1.11``
   :depends on hmmer: ``>=3.3``
   :depends on lxml: ``>=4.9.0``
   :depends on modeltest-ng: ``>=0.1.7``
   :depends on muscle: ``>=3.8``
   :depends on ncbi-datasets-pylib: ``>=14.*``
   :depends on psutil: 
   :depends on pyqt: ``>=5,<6``
   :depends on pyqt5-sip: ``>=12.11``
   :depends on python: ``>=3.11``
   :depends on python-dotenv: ``>=0.20.0``
   :depends on raxml: ``>=8.2.12``
   :depends on raxml-ng: ``>=1.2``
   :depends on requests: ``>=2.28.0``

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

    pixi global install saccharis

to add into an existing workspace instead, run::

    pixi add saccharis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install saccharis

Alternatively, to install into a new environment, run::

    conda create -n envname saccharis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/saccharis:<tag>

(see `saccharis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_saccharis| image:: https://img.shields.io/conda/dn/bioconda/saccharis.svg?style=flat
   :target: https://anaconda.org/bioconda/saccharis
   :alt:   (downloads)
.. |docker_saccharis| image:: https://quay.io/repository/biocontainers/saccharis/status
   :target: https://quay.io/repository/biocontainers/saccharis
.. _`saccharis/tags`: https://quay.io/repository/biocontainers/saccharis?tab=tags


.. raw:: html

    <script>
        var package = "saccharis";
        var versions = ["2.0.5","2.0.4","2.0.3","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saccharis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saccharis/README.html