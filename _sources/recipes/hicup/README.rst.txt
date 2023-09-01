:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicup'
.. highlight: bash

hicup
=====

.. conda:recipe:: hicup
   :replaces_section_title:
   :noindex:

   A tool for mapping and performing quality control on Hi\-C data

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/hicup/
   :license: GPLv3
   :recipe: /`hicup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup/meta.yaml>`_
   :links: biotools: :biotools:`hicup`, doi: :doi:`10.12688/f1000research.7334.1`

   


.. conda:package:: hicup

   |downloads_hicup| |docker_hicup|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  </span></summary>
      

      ``0.9.2-1``,  ``0.9.2-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.10-0``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie: 
   :depends bowtie2: 
   :depends pandoc: 
   :depends perl: 
   :depends perl-bioperl: 
   :depends r-base: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-stringi: ``>=1.7.8``
   :depends r-tidyverse: 
   :depends samtools: 
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

      mamba install hicup

   and update with::

      mamba update hicup

  To create a new environment, run::

      mamba create --name myenvname hicup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicup:<tag>

   (see `hicup/tags`_ for valid values for ``<tag>``)


.. |downloads_hicup| image:: https://img.shields.io/conda/dn/bioconda/hicup.svg?style=flat
   :target: https://anaconda.org/bioconda/hicup
   :alt:   (downloads)
.. |docker_hicup| image:: https://quay.io/repository/biocontainers/hicup/status
   :target: https://quay.io/repository/biocontainers/hicup
.. _`hicup/tags`: https://quay.io/repository/biocontainers/hicup?tab=tags


.. raw:: html

    <script>
        var package = "hicup";
        var versions = ["0.9.2","0.9.2","0.8.3","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicup/README.html