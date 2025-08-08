:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crazydoc'
.. highlight: bash

crazydoc
========

.. conda:recipe:: crazydoc
   :replaces_section_title:
   :noindex:

   Read genetic sequences from stylized docx files

   :homepage: https://github.com/Edinburgh-Genome-Foundry/crazydoc
   :license: MIT
   :recipe: /`crazydoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crazydoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crazydoc/meta.yaml>`_

   


.. conda:package:: crazydoc

   |downloads_crazydoc| |docker_crazydoc|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends biopython: 
   :depends dna_features_viewer: 
   :depends python: ``>=3.9``
   :depends python-docx: 
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

      mamba install crazydoc

   and update with::

      mamba update crazydoc

  To create a new environment, run::

      mamba create --name myenvname crazydoc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crazydoc:<tag>

   (see `crazydoc/tags`_ for valid values for ``<tag>``)


.. |downloads_crazydoc| image:: https://img.shields.io/conda/dn/bioconda/crazydoc.svg?style=flat
   :target: https://anaconda.org/bioconda/crazydoc
   :alt:   (downloads)
.. |docker_crazydoc| image:: https://quay.io/repository/biocontainers/crazydoc/status
   :target: https://quay.io/repository/biocontainers/crazydoc
.. _`crazydoc/tags`: https://quay.io/repository/biocontainers/crazydoc?tab=tags


.. raw:: html

    <script>
        var package = "crazydoc";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crazydoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crazydoc/README.html