:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'earlgrey'
.. highlight: bash

earlgrey
========

.. conda:recipe:: earlgrey
   :replaces_section_title:
   :noindex:

   Earl Grey\: A fully automated TE curation and annotation pipeline

   :homepage: https://github.com/TobyBaril/EarlGrey
   :documentation: https://github.com/TobyBaril/EarlGrey/blob/main/README.md
   
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

         <details><summary><span class="truncated-version-list"><code>4.4.5-0</code>,  <code>4.4.4-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.0-0</code>,  <code>4.2.4-1</code>,  <code>4.2.4-0</code>,  <code>4.2.3-0</code>,  <code>4.1.1-1</code>,  </span></summary>
      

      ``4.4.5-0``,  ``4.4.4-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.4-1``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.8-0``,  ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0-1``,  ``4.0-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomeinfodbdata: 
   :depends bioconductor-plyranges: 
   :depends cd-hit: 
   :depends emboss: 
   :depends genometools-genometools: 
   :depends hmmer: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends ltr_retriever: 
   :depends mafft: 
   :depends mreps: 
   :depends ncls: ``0.0.64.*``
   :depends ninja-nj: 
   :depends pandas: 
   :depends parallel: 
   :depends pybedtools: 
   :depends pyfaidx: 
   :depends pyranges: 
   :depends python: ``3.9.*``
   :depends r-ape: 
   :depends r-cowplot: 
   :depends r-ggtext: 
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-tidyverse: 
   :depends r-viridis: 
   :depends recon: 
   :depends repeatmasker: ``4.1.5.*``
   :depends repeatmodeler: ``>=2.0.4``
   :depends repeatscout: 
   :depends trf: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install earlgrey

   and update with::

      mamba update earlgrey

  To create a new environment, run::

      mamba create --name myenvname earlgrey

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/earlgrey:<tag>

   (see `earlgrey/tags`_ for valid values for ``<tag>``)


.. |downloads_earlgrey| image:: https://img.shields.io/conda/dn/bioconda/earlgrey.svg?style=flat
   :target: https://anaconda.org/bioconda/earlgrey
   :alt:   (downloads)
.. |docker_earlgrey| image:: https://quay.io/repository/biocontainers/earlgrey/status
   :target: https://quay.io/repository/biocontainers/earlgrey
.. _`earlgrey/tags`: https://quay.io/repository/biocontainers/earlgrey?tab=tags


.. raw:: html

    <script>
        var package = "earlgrey";
        var versions = ["4.4.5","4.4.4","4.4.1","4.4.0","4.3.0"];
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