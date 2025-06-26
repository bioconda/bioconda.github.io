:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metadmg'
.. highlight: bash

metadmg
=======

.. conda:recipe:: metadmg
   :replaces_section_title:
   :noindex:

   metaDMG\-cpp\: fast and efficient method for estimating mutation and damage rates in ancient DNA data.

   :homepage: https://github.com/metaDMG-dev/metaDMG-cpp
   :documentation: https://github.com/metaDMG-dev/metaDMG-cpp/blob/v0.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later, MIT
   :recipe: /`metadmg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metadmg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metadmg/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.06.519264`

   


.. conda:package:: metadmg

   |downloads_metadmg| |docker_metadmg|

   :versions:
      
      

      ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends eigen: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.0,<4.0a0``
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

      mamba install metadmg

   and update with::

      mamba update metadmg

  To create a new environment, run::

      mamba create --name myenvname metadmg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metadmg:<tag>

   (see `metadmg/tags`_ for valid values for ``<tag>``)


.. |downloads_metadmg| image:: https://img.shields.io/conda/dn/bioconda/metadmg.svg?style=flat
   :target: https://anaconda.org/bioconda/metadmg
   :alt:   (downloads)
.. |docker_metadmg| image:: https://quay.io/repository/biocontainers/metadmg/status
   :target: https://quay.io/repository/biocontainers/metadmg
.. _`metadmg/tags`: https://quay.io/repository/biocontainers/metadmg?tab=tags


.. raw:: html

    <script>
        var package = "metadmg";
        var versions = ["0.4","0.4","0.4","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metadmg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metadmg/README.html