:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ichorcna'
.. highlight: bash

r-ichorcna
==========

.. conda:recipe:: r-ichorcna
   :replaces_section_title:
   :noindex:

   Estimating tumor fraction in cell\-free DNA from ultra\-low\-pass whole genome sequencing.

   :homepage: https://github.com/GavinHaLab/ichorCNA
   :license: GPL-3.0-only
   :recipe: /`r-ichorcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ichorcna/meta.yaml>`_

   


.. conda:package:: r-ichorcna

   |downloads_r-ichorcna| |docker_r-ichorcna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.3.2-2</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.2.0-3</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0.20180710-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.3,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.4,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.7``
   :depends bioconductor-genomicranges: ``>=1.42.0``
   :depends bioconductor-hmmcopy: ``>=1.32.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-domc: ``>=1.3.6``
   :depends r-foreach: ``>=1.5.0``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-stringr: ``>=1.4.0``
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

      mamba install r-ichorcna

   and update with::

      mamba update r-ichorcna

  To create a new environment, run::

      mamba create --name myenvname r-ichorcna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ichorcna:<tag>

   (see `r-ichorcna/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ichorcna| image:: https://img.shields.io/conda/dn/bioconda/r-ichorcna.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ichorcna
   :alt:   (downloads)
.. |docker_r-ichorcna| image:: https://quay.io/repository/biocontainers/r-ichorcna/status
   :target: https://quay.io/repository/biocontainers/r-ichorcna
.. _`r-ichorcna/tags`: https://quay.io/repository/biocontainers/r-ichorcna?tab=tags


.. raw:: html

    <script>
        var package = "r-ichorcna";
        var versions = ["0.5.0","0.5.0","0.3.2","0.3.2","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ichorcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ichorcna/README.html