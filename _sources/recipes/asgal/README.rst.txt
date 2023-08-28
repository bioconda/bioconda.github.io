:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asgal'
.. highlight: bash

asgal
=====

.. conda:recipe:: asgal
   :replaces_section_title:
   :noindex:

   A graph aligner

   :homepage: https://asgal.algolab.eu/
   :license: GPL-3.0-or-later
   :recipe: /`asgal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asgal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asgal/meta.yaml>`_
   :links: biotools: :biotools:`asgal`

   


.. conda:package:: asgal

   |downloads_asgal| |docker_asgal|

   :versions:
      
      

      ``1.1.8-1``,  ``1.1.8-0``

      

   
   :depends biopython: 
   :depends gffutils: 
   :depends lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pandas: 
   :depends pysam: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends salmon: ``>=1.9.0``
   :depends samtools: 
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

      mamba install asgal

   and update with::

      mamba update asgal

  To create a new environment, run::

      mamba create --name myenvname asgal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/asgal:<tag>

   (see `asgal/tags`_ for valid values for ``<tag>``)


.. |downloads_asgal| image:: https://img.shields.io/conda/dn/bioconda/asgal.svg?style=flat
   :target: https://anaconda.org/bioconda/asgal
   :alt:   (downloads)
.. |docker_asgal| image:: https://quay.io/repository/biocontainers/asgal/status
   :target: https://quay.io/repository/biocontainers/asgal
.. _`asgal/tags`: https://quay.io/repository/biocontainers/asgal?tab=tags


.. raw:: html

    <script>
        var package = "asgal";
        var versions = ["1.1.8","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asgal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asgal/README.html