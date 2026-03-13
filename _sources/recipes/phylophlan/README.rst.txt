:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylophlan'
.. highlight: bash

phylophlan
==========

.. conda:recipe:: phylophlan
   :replaces_section_title:
   :noindex:

   Precise phylogenetic analysis of microbial isolates and genomes from metagenomes

   :homepage: https://github.com/biobakery/phylophlan
   :license: MIT / MIT License
   :recipe: /`phylophlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylophlan/meta.yaml>`_

   PhyloPhlAn 3.0 is an integrated pipeline for large\-scale phylogenetic 
   profiling of genomes and metagenomes. PhyloPhlAn 3.0 is an accurate\, rapid\,
   and easy\-to\-use method for large\-scale microbial genome characterization 
   and phylogenetic analysis at multiple levels of resolution. PhyloPhlAn 3.0 
   can assign both genomes and metagenome\-assembled genomes \(MAGs\) to 
   species\-level genome bins \(SGBs\). PhyloPhlAn 3.0 can reconstruct 
   strain\-level phylogenies using clade\-specific maximally informative 
   phylogenetic markers\, and can also scale to very\-large phylogenies 
   comprising \>17\,000 microbial species.


.. conda:package:: phylophlan

   |downloads_phylophlan| |docker_phylophlan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.1.1-0</code>,  <code>3.1-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0-7</code>,  <code>3.0-6</code>,  </span></summary>
      

      ``3.2.1-1``,  ``3.2.1-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.73``
   :depends on blast: ``>=2.6.0``
   :depends on dendropy: ``>=4.4.0``
   :depends on diamond: ``>=0.9``
   :depends on fasttree: ``>=2.1.8``
   :depends on iqtree: ``>=1.6.6``
   :depends on mafft: ``>=7.310``
   :depends on mash: 
   :depends on matplotlib-base: ``>=3.1.0``
   :depends on muscle: ``>=3.8.1551``
   :depends on numpy: ``>=1.15.4``
   :depends on pandas: ``>=0.24.2``
   :depends on python: ``>=3.9``
   :depends on raxml: ``>=8.2.10``
   :depends on requests: 
   :depends on scipy: 
   :depends on seaborn: ``>=0.9.0``
   :depends on skani: ``0.2``
   :depends on tqdm: 
   :depends on trimal: ``>=1.4.1``

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

    pixi global install phylophlan

to add into an existing workspace instead, run::

    pixi add phylophlan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylophlan

Alternatively, to install into a new environment, run::

    conda create -n envname phylophlan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylophlan:<tag>

(see `phylophlan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylophlan| image:: https://img.shields.io/conda/dn/bioconda/phylophlan.svg?style=flat
   :target: https://anaconda.org/bioconda/phylophlan
   :alt:   (downloads)
.. |docker_phylophlan| image:: https://quay.io/repository/biocontainers/phylophlan/status
   :target: https://quay.io/repository/biocontainers/phylophlan
.. _`phylophlan/tags`: https://quay.io/repository/biocontainers/phylophlan?tab=tags


.. raw:: html

    <script>
        var package = "phylophlan";
        var versions = ["3.2.1","3.2.1","3.1.1","3.1","3.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylophlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylophlan/README.html