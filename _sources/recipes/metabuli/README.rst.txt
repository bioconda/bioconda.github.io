:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabuli'
.. highlight: bash

metabuli
========

.. conda:recipe:: metabuli
   :replaces_section_title:
   :noindex:

   Metabuli\: specific and sensitive metagenomic classification via joint analysis of DNA and amino acid

   :homepage: https://github.com/steineggerlab/Metabuli
   :license: GPLv3
   :recipe: /`metabuli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabuli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabuli/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-024-02273-y`, biotools: :biotools:`metabuli`

   


.. conda:package:: metabuli

   |downloads_metabuli| |docker_metabuli|

   :versions:
      
      

      ``1.0.8-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metabuli

   and update with::

      mamba update metabuli

  To create a new environment, run::

      mamba create --name myenvname metabuli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabuli:<tag>

   (see `metabuli/tags`_ for valid values for ``<tag>``)


.. |downloads_metabuli| image:: https://img.shields.io/conda/dn/bioconda/metabuli.svg?style=flat
   :target: https://anaconda.org/bioconda/metabuli
   :alt:   (downloads)
.. |docker_metabuli| image:: https://quay.io/repository/biocontainers/metabuli/status
   :target: https://quay.io/repository/biocontainers/metabuli
.. _`metabuli/tags`: https://quay.io/repository/biocontainers/metabuli?tab=tags


.. raw:: html

    <script>
        var package = "metabuli";
        var versions = ["1.0.8","1.0.5","1.0.5","1.0.5","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabuli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabuli/README.html