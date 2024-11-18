:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvkit'
.. highlight: bash

cnvkit
======

.. conda:recipe:: cnvkit
   :replaces_section_title:
   :noindex:

   Copy number variant detection from high\-throughput sequencing.

   :homepage: https://github.com/etal/cnvkit
   :documentation: https://cnvkit.readthedocs.io/en/stable
   
   :license: APACHE / Apache-2.0
   :recipe: /`cnvkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvkit/meta.yaml>`_
   :links: biotools: :biotools:`cnvkit`, doi: :doi:`10.1371/journal.pcbi.1004873`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_access`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_antitarget`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_autobin`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_batch`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_call`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_coverage`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_diagram`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_fix`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_heatmap`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_reference`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_scatter`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_segment`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_target`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_breaks`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_genemetrics`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_segmetrics`, usegalaxy-eu: :usegalaxy-eu:`cnvkit_sex`

   


.. conda:package:: cnvkit

   |downloads_cnvkit| |docker_cnvkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.12-0</code>,  <code>0.9.11-0</code>,  <code>0.9.10-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-0</code>,  <code>0.9.7-1</code>,  <code>0.9.7-0</code>,  <code>0.9.6-2</code>,  <code>0.9.6-1</code>,  </span></summary>
      

      ``0.9.12-0``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-1``,  ``0.9.7-0``,  ``0.9.6-2``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.6a0-2``,  ``0.9.6a0-1``,  ``0.9.6a0-0``,  ``0.9.5-1``,  ``0.9.5-0``,  ``0.9.4a0-0``,  ``0.9.3-2``,  ``0.9.2-2``,  ``0.9.2a0-2``,  ``0.9.2a0-1``,  ``0.9.2a0-0``,  ``0.9.1-0``,  ``0.9.1a0-0``,  ``0.9.0-0``,  ``0.8.6a0-2``,  ``0.8.6a0-1``,  ``0.8.6a0-0``,  ``0.8.5-0``,  ``0.8.5dev0-1``,  ``0.8.5dev0-0``,  ``0.8.4-0``,  ``0.8.3a0-1``,  ``0.8.3a0-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: 
   :depends biopython: ``>=1.80``
   :depends matplotlib-base: ``>=3.5.2``
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.24.2``
   :depends pandas: ``>=1.5.3``
   :depends pomegranate: ``>=0.14.8,<=0.14.9``
   :depends pyfaidx: ``>=0.7.1``
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.8``
   :depends r-base: ``>=3.4.1``
   :depends r-cghflasso: 
   :depends reportlab: ``>=3.6.12``
   :depends scikit-learn: ``>=1.1.0``
   :depends scipy: ``>=1.10.1``
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

      mamba install cnvkit

   and update with::

      mamba update cnvkit

  To create a new environment, run::

      mamba create --name myenvname cnvkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnvkit:<tag>

   (see `cnvkit/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvkit| image:: https://img.shields.io/conda/dn/bioconda/cnvkit.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvkit
   :alt:   (downloads)
.. |docker_cnvkit| image:: https://quay.io/repository/biocontainers/cnvkit/status
   :target: https://quay.io/repository/biocontainers/cnvkit
.. _`cnvkit/tags`: https://quay.io/repository/biocontainers/cnvkit?tab=tags


.. raw:: html

    <script>
        var package = "cnvkit";
        var versions = ["0.9.12","0.9.11","0.9.10","0.9.9","0.9.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvkit/README.html