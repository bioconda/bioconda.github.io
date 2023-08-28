:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'springsuite'
.. highlight: bash

springsuite
===========

.. conda:recipe:: springsuite
   :replaces_section_title:
   :noindex:

   The Spring Suite contains tools to predict and model protein\-protein interactions from FASTA sequences and HHsearch threading results.

   :homepage: https://github.com/guerler/springsuite
   :license: GPL / GPL-2.0-only
   :recipe: /`springsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/springsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/springsuite/meta.yaml>`_

   


.. conda:package:: springsuite

   |downloads_springsuite| |docker_springsuite|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pulchra: 
   :depends python: 
   :depends tmalign: 
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

      mamba install springsuite

   and update with::

      mamba update springsuite

  To create a new environment, run::

      mamba create --name myenvname springsuite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/springsuite:<tag>

   (see `springsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_springsuite| image:: https://img.shields.io/conda/dn/bioconda/springsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/springsuite
   :alt:   (downloads)
.. |docker_springsuite| image:: https://quay.io/repository/biocontainers/springsuite/status
   :target: https://quay.io/repository/biocontainers/springsuite
.. _`springsuite/tags`: https://quay.io/repository/biocontainers/springsuite?tab=tags


.. raw:: html

    <script>
        var package = "springsuite";
        var versions = ["0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/springsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/springsuite/README.html