:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hostile'
.. highlight: bash

hostile
=======

.. conda:recipe:: hostile
   :replaces_section_title:
   :noindex:

   Hostile\: accurate host decontamination

   :homepage: https://github.com/bede/hostile
   :license: MIT / MIT
   :recipe: /`hostile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad728`

   


.. conda:package:: hostile

   |downloads_hostile| |docker_hostile|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.31.1``
   :depends bowtie2: ``2.5.4``
   :depends defopt: ``>=6.4.0``
   :depends dnaio: ``>=1.2.0``
   :depends gawk: ``>=5.3.1``
   :depends httpx: ``>=0.24.1``
   :depends minimap2: ``>=2.28``
   :depends platformdirs: ``>=3.5.1``
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.17``
   :depends tqdm: ``>=4.65.0``
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

      mamba install hostile

   and update with::

      mamba update hostile

  To create a new environment, run::

      mamba create --name myenvname hostile

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hostile:<tag>

   (see `hostile/tags`_ for valid values for ``<tag>``)


.. |downloads_hostile| image:: https://img.shields.io/conda/dn/bioconda/hostile.svg?style=flat
   :target: https://anaconda.org/bioconda/hostile
   :alt:   (downloads)
.. |docker_hostile| image:: https://quay.io/repository/biocontainers/hostile/status
   :target: https://quay.io/repository/biocontainers/hostile
.. _`hostile/tags`: https://quay.io/repository/biocontainers/hostile?tab=tags


.. raw:: html

    <script>
        var package = "hostile";
        var versions = ["2.0.0","1.1.0","1.0.0","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hostile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hostile/README.html