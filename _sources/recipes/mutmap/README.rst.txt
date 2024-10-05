:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutmap'
.. highlight: bash

mutmap
======

.. conda:recipe:: mutmap
   :replaces_section_title:
   :noindex:

   MutMap\: pipeline to identify causative mutations responsible for a phenotype

   :homepage: https://github.com/YuSugihara/MutMap
   :license: GPL / GPL-3.0-or-later
   :recipe: /`mutmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap/meta.yaml>`_
   :links: biotools: :biotools:`mutmap`, doi: :doi:`10.1038/nbt.2095`

   


.. conda:package:: mutmap

   |downloads_mutmap| |docker_mutmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.5-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-0</code>,  </span></summary>
      

      ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.7``
   :depends bwa: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends samtools: ``>=1.7``
   :depends seaborn: 
   :depends snpeff: 
   :depends trimmomatic: 
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

      mamba install mutmap

   and update with::

      mamba update mutmap

  To create a new environment, run::

      mamba create --name myenvname mutmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutmap:<tag>

   (see `mutmap/tags`_ for valid values for ``<tag>``)


.. |downloads_mutmap| image:: https://img.shields.io/conda/dn/bioconda/mutmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mutmap
   :alt:   (downloads)
.. |docker_mutmap| image:: https://quay.io/repository/biocontainers/mutmap/status
   :target: https://quay.io/repository/biocontainers/mutmap
.. _`mutmap/tags`: https://quay.io/repository/biocontainers/mutmap?tab=tags


.. raw:: html

    <script>
        var package = "mutmap";
        var versions = ["2.3.5","2.3.4","2.3.3","2.3.2","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutmap/README.html