:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squid'
.. highlight: bash

squid
=====

.. conda:recipe:: squid
   :replaces_section_title:
   :noindex:

   Detector for fusion\-gene and non\-fusion\-gene transcriptomic structural variations from RNA\-seq data

   :homepage: https://github.com/Kingsford-Group/squid
   :license: BSD 3
   :recipe: /`squid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squid/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1421-5`

   


.. conda:package:: squid

   |downloads_squid| |docker_squid|

   :versions:
      
      

      ``1.5-7``,  ``1.5-6``,  ``1.5-5``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-0``

      

   
   :depends glpk: ``>=5.0,<6.0a0``
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

      mamba install squid

   and update with::

      mamba update squid

  To create a new environment, run::

      mamba create --name myenvname squid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squid:<tag>

   (see `squid/tags`_ for valid values for ``<tag>``)


.. |downloads_squid| image:: https://img.shields.io/conda/dn/bioconda/squid.svg?style=flat
   :target: https://anaconda.org/bioconda/squid
   :alt:   (downloads)
.. |docker_squid| image:: https://quay.io/repository/biocontainers/squid/status
   :target: https://quay.io/repository/biocontainers/squid
.. _`squid/tags`: https://quay.io/repository/biocontainers/squid?tab=tags


.. raw:: html

    <script>
        var package = "squid";
        var versions = ["1.5","1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squid/README.html