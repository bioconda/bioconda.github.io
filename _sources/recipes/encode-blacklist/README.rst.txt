:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'encode-blacklist'
.. highlight: bash

encode-blacklist
================

.. conda:recipe:: encode-blacklist
   :replaces_section_title:
   :noindex:

   The ENCODE Blacklist\: Identification of Problematic Regions of the Genome

   :homepage: https://github.com/Boyle-Lab/Blacklist
   :license: GPL3
   :recipe: /`encode-blacklist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encode-blacklist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/encode-blacklist/meta.yaml>`_
   :links: doi: :doi:`10.7717/10.1038/s41598-019-45839-z`

   


.. conda:package:: encode-blacklist

   |downloads_encode-blacklist| |docker_encode-blacklist|

   :versions:
      
      

      ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends bamtools: ``>=2.5.2,<2.6.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install encode-blacklist

   and update with::

      mamba update encode-blacklist

  To create a new environment, run::

      mamba create --name myenvname encode-blacklist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/encode-blacklist:<tag>

   (see `encode-blacklist/tags`_ for valid values for ``<tag>``)


.. |downloads_encode-blacklist| image:: https://img.shields.io/conda/dn/bioconda/encode-blacklist.svg?style=flat
   :target: https://anaconda.org/bioconda/encode-blacklist
   :alt:   (downloads)
.. |docker_encode-blacklist| image:: https://quay.io/repository/biocontainers/encode-blacklist/status
   :target: https://quay.io/repository/biocontainers/encode-blacklist
.. _`encode-blacklist/tags`: https://quay.io/repository/biocontainers/encode-blacklist?tab=tags


.. raw:: html

    <script>
        var package = "encode-blacklist";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/encode-blacklist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/encode-blacklist/README.html