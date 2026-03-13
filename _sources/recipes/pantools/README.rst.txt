:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pantools'
.. highlight: bash

pantools
========

.. conda:recipe:: pantools
   :replaces_section_title:
   :noindex:

   PanTools is a pangenomic toolkit for comparative analysis of large numbers of genomes.

   :homepage: https://git.wur.nl/bioinformatics/pantools
   :documentation: https://pantools.readthedocs.io/
   
   :license: GPL / GPL-3.0-only
   :recipe: /`pantools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/btw455`, doi: :doi:`https://doi.org/10.1186/s12859-018-2362-4`, doi: :doi:`https://doi.org/10.1101/813634`, doi: :doi:`https://doi.org/10.1093/bioinformatics/btac506`

   PanTools is a pangenomic toolkit for comparative analysis of large numbers
   of genomes. It is developed in the Bioinformatics Group of Wageningen
   University\, the Netherlands. Please cite the relevant publication\(s\) from
   the list of publications if you use PanTools in your research.



.. conda:package:: pantools

   |downloads_pantools| |docker_pantools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.4-0</code>,  <code>4.3.3-0</code>,  <code>4.3.2-0</code>,  <code>4.3.1-0</code>,  <code>4.3.0-0</code>,  <code>4.2.3-1</code>,  <code>4.2.3-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  </span></summary>
      

      ``4.3.4-0``,  ``4.3.3-0``,  ``4.3.2-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.3-1``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.3.3-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aster: ``1.3.*``
   :depends on bcftools: ``>=1.12``
   :depends on blast: 
   :depends on busco: ``5.*``
   :depends on fastani: 
   :depends on fasttree: 
   :depends on graphviz: 
   :depends on iqtree: 
   :depends on kmc: ``>=3.1.0``
   :depends on mafft: 
   :depends on mash: ``2.3.*``
   :depends on mcl: 
   :depends on openjdk: ``8.*``
   :depends on pal2nal: ``>=14.1``
   :depends on paml: ``>=4.10.6``
   :depends on python: ``>=3.7``
   :depends on r-ape: 
   :depends on r-base: ``>=3.5.0``
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-ggplot2: 
   :depends on tabix: 

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

    pixi global install pantools

to add into an existing workspace instead, run::

    pixi add pantools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pantools

Alternatively, to install into a new environment, run::

    conda create -n envname pantools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pantools:<tag>

(see `pantools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pantools| image:: https://img.shields.io/conda/dn/bioconda/pantools.svg?style=flat
   :target: https://anaconda.org/bioconda/pantools
   :alt:   (downloads)
.. |docker_pantools| image:: https://quay.io/repository/biocontainers/pantools/status
   :target: https://quay.io/repository/biocontainers/pantools
.. _`pantools/tags`: https://quay.io/repository/biocontainers/pantools?tab=tags


.. raw:: html

    <script>
        var package = "pantools";
        var versions = ["4.3.4","4.3.3","4.3.2","4.3.1","4.3.0"];
    </script>





Notes
-----
PanTools is Java program that comes with a custom wrapper Python script.
This wrapper is called \"pantools\" and is on \$PATH by default.
By default \"\-Xms512m \-Xmx1g\" is set in the wrapper.
If you want to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"pantools \-Xms512m \-Xmx1g\".



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantools/README.html