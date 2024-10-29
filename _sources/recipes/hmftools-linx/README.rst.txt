:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-linx'
.. highlight: bash

hmftools-linx
=============

.. conda:recipe:: hmftools-linx
   :replaces_section_title:
   :noindex:

   LINX is an annotation\, interpretation and visualisation tool for structural variants.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/linx
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-linx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-linx/meta.yaml>`_

   


.. conda:package:: hmftools-linx

   |downloads_hmftools-linx| |docker_hmftools-linx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0_beta-1</code>,  <code>2.0_beta-0</code>,  <code>1.25-0</code>,  <code>1.23.6-0</code>,  <code>1.22.1-0</code>,  <code>1.22-0</code>,  <code>1.21-0</code>,  <code>1.20-0</code>,  <code>1.19-0</code>,  </span></summary>
      

      ``2.0_beta-1``,  ``2.0_beta-0``,  ``1.25-0``,  ``1.23.6-0``,  ``1.22.1-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15-0``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10-1``,  ``1.10-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gviz: 
   :depends circos: ``>=0.69.6``
   :depends openjdk: ``>=8``
   :depends perl-gd: ``>=2.76``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magick: 
   :depends r-tidyr: 
   :depends xorg-libxtst: 
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

      mamba install hmftools-linx

   and update with::

      mamba update hmftools-linx

  To create a new environment, run::

      mamba create --name myenvname hmftools-linx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-linx:<tag>

   (see `hmftools-linx/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-linx| image:: https://img.shields.io/conda/dn/bioconda/hmftools-linx.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-linx
   :alt:   (downloads)
.. |docker_hmftools-linx| image:: https://quay.io/repository/biocontainers/hmftools-linx/status
   :target: https://quay.io/repository/biocontainers/hmftools-linx
.. _`hmftools-linx/tags`: https://quay.io/repository/biocontainers/hmftools-linx?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-linx";
        var versions = ["2.0_beta","2.0_beta","1.25","1.23.6","1.22.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-linx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-linx/README.html