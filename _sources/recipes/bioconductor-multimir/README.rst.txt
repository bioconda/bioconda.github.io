:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimir'
.. highlight: bash

bioconductor-multimir
=====================

.. conda:recipe:: bioconductor-multimir
   :replaces_section_title:
   :noindex:

   Integration of multiple microRNA\-target databases with their disease and drug associations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multiMiR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-multimir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimir/meta.yaml>`_

   A collection of microRNAs\/targets from external resources\, including validated microRNA\-target databases \(miRecords\, miRTarBase and TarBase\)\, predicted microRNA\-target databases \(DIANA\-microT\, ElMMo\, MicroCosm\, miRanda\, miRDB\, PicTar\, PITA and TargetScan\) and microRNA\-disease\/drug databases \(miR2Disease\, Pharmaco\-miR VerSe and PhenomiR\).


.. conda:package:: bioconductor-multimir

   |downloads_bioconductor-multimir| |docker_bioconductor-multimir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-purrr: ``>=0.2.2``
   :depends r-rcurl: 
   :depends r-tibble: ``>=2.0``
   :depends r-xml: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-multimir

   and update with::

      mamba update bioconductor-multimir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multimir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multimir:<tag>

   (see `bioconductor-multimir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multimir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimir
   :alt:   (downloads)
.. |docker_bioconductor-multimir| image:: https://quay.io/repository/biocontainers/bioconductor-multimir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimir
.. _`bioconductor-multimir/tags`: https://quay.io/repository/biocontainers/bioconductor-multimir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimir";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimir/README.html