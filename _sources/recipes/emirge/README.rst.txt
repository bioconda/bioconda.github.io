:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emirge'
.. highlight: bash

emirge
======

.. conda:recipe:: emirge
   :replaces_section_title:
   :noindex:

   EMIRGE reconstructs full length sequences from short sequencing reads

   :homepage: https://github.com/csmiller/EMIRGE
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`emirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emirge/meta.yaml>`_

   


.. conda:package:: emirge

   |downloads_emirge| |docker_emirge|

   :versions:
      
      

      ``0.61.1-7``,  ``0.61.1-6``,  ``0.61.1-5``,  ``0.61.1-4``,  ``0.61.1-3``,  ``0.61.1-2``,  ``0.61.1-1``,  ``0.61.1-0``

      

   
   :depends biopython: 
   :depends bowtie: 
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends samtools: 
   :depends scipy: 
   :depends vsearch: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install emirge

   and update with::

      mamba update emirge

  To create a new environment, run::

      mamba create --name myenvname emirge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emirge:<tag>

   (see `emirge/tags`_ for valid values for ``<tag>``)


.. |downloads_emirge| image:: https://img.shields.io/conda/dn/bioconda/emirge.svg?style=flat
   :target: https://anaconda.org/bioconda/emirge
   :alt:   (downloads)
.. |docker_emirge| image:: https://quay.io/repository/biocontainers/emirge/status
   :target: https://quay.io/repository/biocontainers/emirge
.. _`emirge/tags`: https://quay.io/repository/biocontainers/emirge?tab=tags


.. raw:: html

    <script>
        var package = "emirge";
        var versions = ["0.61.1","0.61.1","0.61.1","0.61.1","0.61.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emirge/README.html