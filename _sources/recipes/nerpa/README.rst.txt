:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nerpa'
.. highlight: bash

nerpa
=====

.. conda:recipe:: nerpa
   :replaces_section_title:
   :noindex:

   A tool for discovering biosynthetic gene clusters of nonribosomal peptides.

   :homepage: https://github.com/gurevichlab/nerpa
   :documentation: https://github.com/gurevichlab/nerpa/blob/nerpa_2.1.0/README.md
   
   :license: Dual-licensed under GPLv3 or CC BY-NC-SA 4.0
   :recipe: /`nerpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nerpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nerpa/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.11.19.624380v3`, doi: :doi:`10.3390/metabo11100693`, biotools: :biotools:`nerpa`

   Nerpa is a tool for linking biosynthetic gene clusters \(BGCs\) to known nonribosomal peptides \(NRPs\). BGCs are predicted in genome sequences \(FASTA or GBK\) with antiSMASH \(Medema et al\, 2011\). Known NRPs are accepted in the SMILES format and processed with rBAN \(Ricart et al\, 2019\).


.. conda:package:: nerpa

   |downloads_nerpa| |docker_nerpa|

   :versions:
      
      

      ``2.1.0-0``,  ``1.0.0-7``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on bs4: 
   :depends on cairosvg: 
   :depends on dacite: 
   :depends on libcxx: ``>=19``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on more-itertools: 
   :depends on networkx: 
   :depends on openjdk: 
   :depends on pandas: ``>=1.5``
   :depends on parse: 
   :depends on polars: ``>=0.19``
   :depends on prettytable: 
   :depends on pulp: 
   :depends on pyarrow: 
   :depends on python: 
   :depends on python-graphviz: 
   :depends on pyyaml: 
   :depends on rdkit: 
   :depends on requests: 
   :depends on scikit-learn: ``>=1.2.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install nerpa

to add into an existing workspace instead, run::

    pixi add nerpa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nerpa

Alternatively, to install into a new environment, run::

    conda create -n envname nerpa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nerpa:<tag>

(see `nerpa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nerpa| image:: https://img.shields.io/conda/dn/bioconda/nerpa.svg?style=flat
   :target: https://anaconda.org/bioconda/nerpa
   :alt:   (downloads)
.. |docker_nerpa| image:: https://quay.io/repository/biocontainers/nerpa/status
   :target: https://quay.io/repository/biocontainers/nerpa
.. _`nerpa/tags`: https://quay.io/repository/biocontainers/nerpa?tab=tags


.. raw:: html

    <script>
        var package = "nerpa";
        var versions = ["2.1.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nerpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nerpa/README.html