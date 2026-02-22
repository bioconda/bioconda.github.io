:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-fastalign'
.. highlight: bash

bwa-fastalign
=============

.. conda:recipe:: bwa-fastalign
   :replaces_section_title:
   :noindex:

   Faster and Cheaper Sequence Alignment on Commercial CPUs \(A faster version of bwa\-mem with identical outputs\).

   :homepage: https://github.com/zzhofict/BWA-FastAlign
   :license: MIT / MIT
   :recipe: /`bwa-fastalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-fastalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-fastalign/meta.yaml>`_
   :links: doi: :doi:`10.1145/3774934.3786421`, biotools: :biotools:`bwa-fastalign`, usegalaxy-eu: :usegalaxy-eu:`bwa-fastalign`

   


.. conda:package:: bwa-fastalign

   |downloads_bwa-fastalign| |docker_bwa-fastalign|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bwa-fastalign

   and update with::

      mamba update bwa-fastalign

  To create a new environment, run::

      mamba create --name myenvname bwa-fastalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwa-fastalign:<tag>

   (see `bwa-fastalign/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa-fastalign| image:: https://img.shields.io/conda/dn/bioconda/bwa-fastalign.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-fastalign
   :alt:   (downloads)
.. |docker_bwa-fastalign| image:: https://quay.io/repository/biocontainers/bwa-fastalign/status
   :target: https://quay.io/repository/biocontainers/bwa-fastalign
.. _`bwa-fastalign/tags`: https://quay.io/repository/biocontainers/bwa-fastalign?tab=tags


.. raw:: html

    <script>
        var package = "bwa-fastalign";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-fastalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-fastalign/README.html