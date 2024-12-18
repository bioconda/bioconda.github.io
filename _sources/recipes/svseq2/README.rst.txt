:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svseq2'
.. highlight: bash

svseq2
======

.. conda:recipe:: svseq2
   :replaces_section_title:
   :noindex:

   An improved approach for accurate and efficient calling of structural variations with low\-coverage sequence data

   :homepage: https://sourceforge.net/projects/svseq2/
   :documentation: https://sites.google.com/site/jinzhangwebsite/svseq2
   
   :license: PUBLIC-DOMAIN / CC-PDDC
   :recipe: /`svseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svseq2/meta.yaml>`_

   


.. conda:package:: svseq2

   |downloads_svseq2| |docker_svseq2|

   :versions:
      
      

      ``2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends samtools: ``>=0.1.19,<1.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install svseq2

   and update with::

      mamba update svseq2

  To create a new environment, run::

      mamba create --name myenvname svseq2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svseq2:<tag>

   (see `svseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_svseq2| image:: https://img.shields.io/conda/dn/bioconda/svseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/svseq2
   :alt:   (downloads)
.. |docker_svseq2| image:: https://quay.io/repository/biocontainers/svseq2/status
   :target: https://quay.io/repository/biocontainers/svseq2
.. _`svseq2/tags`: https://quay.io/repository/biocontainers/svseq2?tab=tags


.. raw:: html

    <script>
        var package = "svseq2";
        var versions = ["2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svseq2/README.html