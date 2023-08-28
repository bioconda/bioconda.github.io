:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idemuxcpp'
.. highlight: bash

idemuxcpp
=========

.. conda:recipe:: idemuxcpp
   :replaces_section_title:
   :noindex:

   A Lexogen tool for demultiplexing and index error correcting fastq files. Works with Lexogen i7\, i5 and i1 barcodes.

   :homepage: https://github.com/Lexogen-Tools/idemuxcpp
   :license: OTHER / custom
   :recipe: /`idemuxcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp/meta.yaml>`_

   


.. conda:package:: idemuxcpp

   |downloads_idemuxcpp| |docker_idemuxcpp|

   :versions:
      
      

      ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
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

      mamba install idemuxcpp

   and update with::

      mamba update idemuxcpp

  To create a new environment, run::

      mamba create --name myenvname idemuxcpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idemuxcpp:<tag>

   (see `idemuxcpp/tags`_ for valid values for ``<tag>``)


.. |downloads_idemuxcpp| image:: https://img.shields.io/conda/dn/bioconda/idemuxcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/idemuxcpp
   :alt:   (downloads)
.. |docker_idemuxcpp| image:: https://quay.io/repository/biocontainers/idemuxcpp/status
   :target: https://quay.io/repository/biocontainers/idemuxcpp
.. _`idemuxcpp/tags`: https://quay.io/repository/biocontainers/idemuxcpp?tab=tags


.. raw:: html

    <script>
        var package = "idemuxcpp";
        var versions = ["0.1.9","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idemuxcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idemuxcpp/README.html