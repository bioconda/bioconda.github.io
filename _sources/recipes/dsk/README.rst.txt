:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsk'
.. highlight: bash

dsk
===

.. conda:recipe:: dsk
   :replaces_section_title:
   :noindex:

   DSK is a k\-mer counter for reads or genomes.

   :homepage: https://github.com/GATB/dsk/
   :license: AGPL-3.0
   :recipe: /`dsk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsk/meta.yaml>`_
   :links: biotools: :biotools:`dsk`, doi: :doi:`10.1093/bioinformatics/btt020`

   


.. conda:package:: dsk

   |downloads_dsk| |docker_dsk|

   :versions:
      
      

      ``2.3.3-4``,  ``2.3.3-3``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install dsk

   and update with::

      mamba update dsk

  To create a new environment, run::

      mamba create --name myenvname dsk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dsk:<tag>

   (see `dsk/tags`_ for valid values for ``<tag>``)


.. |downloads_dsk| image:: https://img.shields.io/conda/dn/bioconda/dsk.svg?style=flat
   :target: https://anaconda.org/bioconda/dsk
   :alt:   (downloads)
.. |docker_dsk| image:: https://quay.io/repository/biocontainers/dsk/status
   :target: https://quay.io/repository/biocontainers/dsk
.. _`dsk/tags`: https://quay.io/repository/biocontainers/dsk?tab=tags


.. raw:: html

    <script>
        var package = "dsk";
        var versions = ["2.3.3","2.3.3","2.3.3","2.3.3","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsk/README.html