:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'earlgrey'
.. highlight: bash

earlgrey
========

.. conda:recipe:: earlgrey
   :replaces_section_title:
   :noindex:

   Earl Grey\: A fully automated TE curation and annotation pipeline.

   :homepage: https://github.com/TobyBaril/EarlGrey
   :documentation: https://github.com/TobyBaril/EarlGrey/blob/v7.1.0/README.md
   
   :license: OSL-2.1
   :recipe: /`earlgrey <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/earlgrey>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/earlgrey/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msae068`

   Earl Grey is a full\-automated transposable element \(TE\) annotation pipeline\,
   leveraging the most widely\-used tools and combining these with a consensus
   elongation process \(BEAT\) to better define de novo consensus sequences when
   annotating new genome assemblies.



.. conda:package:: earlgrey

   |downloads_earlgrey| |docker_earlgrey|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.1.0-0</code>,  <code>7.0.3-0</code>,  <code>7.0.2-0</code>,  <code>7.0.1-1</code>,  <code>7.0.1-0</code>,  <code>7.0.0-0</code>,  <code>6.3.6-0</code>,  <code>6.3.5-0</code>,  <code>6.3.4-0</code>,  </span></summary>
      

      ``7.1.0-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-1``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.3.6-0``,  ``6.3.5-0``,  ``6.3.4-0``,  ``6.3.3-0``,  ``6.3.2-0``,  ``6.3.1-0``,  ``6.3.0-0``,  ``6.2.0-1``,  ``6.2.0-0``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.3-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.1.1-0``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.3-0``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.5.0-2``,  ``4.5.0-1``,  ``4.5.0-0``,  ``4.4.5-1``,  ``4.4.5-0``,  ``4.4.4-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.4-1``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.8-0``,  ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0-1``,  ``4.0-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-genomeinfodb: 
   :depends on bioconductor-genomeinfodbdata: 
   :depends on bioconductor-plyranges: 
   :depends on cd-hit: 
   :depends on emboss: 
   :depends on genometools-genometools: 
   :depends on heliano: 
   :depends on hmmer: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on ltr_retriever: 
   :depends on mafft: 
   :depends on mreps: 
   :depends on ncls: 
   :depends on ninja-nj: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on pybedtools: 
   :depends on pyfaidx: 
   :depends on pyranges: 
   :depends on python: 
   :depends on r-ape: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-ggtext: 
   :depends on r-kableextra: 
   :depends on r-magrittr: 
   :depends on r-optparse: 
   :depends on r-plyr: 
   :depends on r-tidyverse: 
   :depends on r-viridis: 
   :depends on recon: 
   :depends on repeatmasker: ``4.2.2.*``
   :depends on repeatmodeler: ``>=2.0.4``
   :depends on repeatscout: 
   :depends on samtools: 
   :depends on trf: 

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

    pixi global install earlgrey

to add into an existing workspace instead, run::

    pixi add earlgrey

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install earlgrey

Alternatively, to install into a new environment, run::

    conda create -n envname earlgrey

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/earlgrey:<tag>

(see `earlgrey/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_earlgrey| image:: https://img.shields.io/conda/dn/bioconda/earlgrey.svg?style=flat
   :target: https://anaconda.org/bioconda/earlgrey
   :alt:   (downloads)
.. |docker_earlgrey| image:: https://quay.io/repository/biocontainers/earlgrey/status
   :target: https://quay.io/repository/biocontainers/earlgrey
.. _`earlgrey/tags`: https://quay.io/repository/biocontainers/earlgrey?tab=tags


.. raw:: html

    <script>
        var package = "earlgrey";
        var versions = ["7.1.0","7.0.3","7.0.2","7.0.1","7.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/earlgrey/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/earlgrey/README.html