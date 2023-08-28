:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kart'
.. highlight: bash

kart
====

.. conda:recipe:: kart
   :replaces_section_title:
   :noindex:

   Kart\: a divide\-and\-conquer algorithm for NGS read alignment

   :homepage: https://github.com/hsinnan75/Kart
   :license: MIT
   :recipe: /`kart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kart/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx189`

   An efficient short read mapper for DNA\-Seq data.


.. conda:package:: kart

   |downloads_kart| |docker_kart|

   :versions:
      
      

      ``2.5.6-4``,  ``2.5.6-3``,  ``2.5.6-2``,  ``2.5.6-1``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kart

   and update with::

      mamba update kart

  To create a new environment, run::

      mamba create --name myenvname kart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kart:<tag>

   (see `kart/tags`_ for valid values for ``<tag>``)


.. |downloads_kart| image:: https://img.shields.io/conda/dn/bioconda/kart.svg?style=flat
   :target: https://anaconda.org/bioconda/kart
   :alt:   (downloads)
.. |docker_kart| image:: https://quay.io/repository/biocontainers/kart/status
   :target: https://quay.io/repository/biocontainers/kart
.. _`kart/tags`: https://quay.io/repository/biocontainers/kart?tab=tags


.. raw:: html

    <script>
        var package = "kart";
        var versions = ["2.5.6","2.5.6","2.5.6","2.5.6","2.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kart/README.html