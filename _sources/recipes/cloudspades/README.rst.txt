:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cloudspades'
.. highlight: bash

cloudspades
===========

.. conda:recipe:: cloudspades
   :replaces_section_title:
   :noindex:

   A module of the SPAdes assembler aimed at genome assembly from linked read technologies \(10x\, Tellseq\, Haplotagging\).

   :homepage: https://github.com/ablab/spades
   :documentation: https://github.com/ablab/spades/tree/cloudspades-ismb
   
   :developer docs: https://github.com/ablab/spades/tree/cloudspades-0.1
   :license: GPL / GPL-2.0-only
   :recipe: /`cloudspades <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cloudspades>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cloudspades/meta.yaml>`_

   


.. conda:package:: cloudspades

   |downloads_cloudspades| |docker_cloudspades|

   :versions:
      
      

      ``3.16.0-2``,  ``3.16.0-1``,  ``3.16.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.8``
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

      mamba install cloudspades

   and update with::

      mamba update cloudspades

  To create a new environment, run::

      mamba create --name myenvname cloudspades

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cloudspades:<tag>

   (see `cloudspades/tags`_ for valid values for ``<tag>``)


.. |downloads_cloudspades| image:: https://img.shields.io/conda/dn/bioconda/cloudspades.svg?style=flat
   :target: https://anaconda.org/bioconda/cloudspades
   :alt:   (downloads)
.. |docker_cloudspades| image:: https://quay.io/repository/biocontainers/cloudspades/status
   :target: https://quay.io/repository/biocontainers/cloudspades
.. _`cloudspades/tags`: https://quay.io/repository/biocontainers/cloudspades?tab=tags


.. raw:: html

    <script>
        var package = "cloudspades";
        var versions = ["3.16.0","3.16.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cloudspades/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cloudspades/README.html