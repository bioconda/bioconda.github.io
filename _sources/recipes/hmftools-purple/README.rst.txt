:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-purple'
.. highlight: bash

hmftools-purple
===============

.. conda:recipe:: hmftools-purple
   :replaces_section_title:
   :noindex:

   PURPLE is a purity ploidy estimator for tumor samples.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/purple
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-purple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple/meta.yaml>`_

   


.. conda:package:: hmftools-purple

   |downloads_hmftools-purple| |docker_hmftools-purple|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1_beta-3</code>,  <code>4.1_beta-2</code>,  <code>4.1_beta-1</code>,  <code>4.1_beta-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0-0</code>,  <code>3.7.1-0</code>,  <code>3.6-0</code>,  </span></summary>
      

      ``4.1_beta-3``,  ``4.1_beta-2``,  ``4.1_beta-1``,  ``4.1_beta-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0-0``,  ``3.7.1-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.2-0``,  ``3.1-0``,  ``2.54-0``,  ``2.53-1``,  ``2.53-0``,  ``2.52-0``,  ``2.51-1``,  ``2.51-0``,  ``2.50-0``,  ``2.48-0``,  ``2.47-1``,  ``2.47-0``,  ``2.46-0``,  ``2.45-0``,  ``2.44-0``,  ``2.43-0``,  ``2.41-0``,  ``2.40-0``,  ``2.39-0``,  ``2.38-0``,  ``2.37-0``,  ``2.36-0``,  ``2.35-0``,  ``2.34-0``,  ``2.32-0``,  ``2.31-0``,  ``2.25-1``,  ``2.17-1``,  ``2.16-1``,  ``2.16-0``,  ``2.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-variantannotation: 
   :depends circos: ``>=0.69.6``
   :depends openjdk: ``>=8,<=21``
   :depends perl-gd: ``>=2.76``
   :depends r-cairo: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-tidyr: 
   :depends xorg-libxtst: 
   :depends zlib: 
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

      mamba install hmftools-purple

   and update with::

      mamba update hmftools-purple

  To create a new environment, run::

      mamba create --name myenvname hmftools-purple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-purple:<tag>

   (see `hmftools-purple/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-purple| image:: https://img.shields.io/conda/dn/bioconda/hmftools-purple.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-purple
   :alt:   (downloads)
.. |docker_hmftools-purple| image:: https://quay.io/repository/biocontainers/hmftools-purple/status
   :target: https://quay.io/repository/biocontainers/hmftools-purple
.. _`hmftools-purple/tags`: https://quay.io/repository/biocontainers/hmftools-purple?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-purple";
        var versions = ["4.1_beta","4.1_beta","4.1_beta","4.1_beta","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-purple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-purple/README.html