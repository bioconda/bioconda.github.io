:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afpdb'
.. highlight: bash

afpdb
=====

.. conda:recipe:: afpdb
   :replaces_section_title:
   :noindex:

   A Numpy\-based PDB structure manipulation package

   :homepage: https://github.com/data2code/afpdb
   :documentation: https://github.com/data2code/afpdb/blob/main/tutorial
   
   :license: MIT / MIT
   :recipe: /`afpdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afpdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afpdb/meta.yaml>`_

   


.. conda:package:: afpdb

   |downloads_afpdb| |docker_afpdb|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends biopython: 
   :depends dm-tree: 
   :depends numpy: 
   :depends pandas: 
   :depends py3dmol: 
   :depends python: 
   :depends requests: 
   :depends scipy: 
   :depends tabulate: 
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

      mamba install afpdb

   and update with::

      mamba update afpdb

  To create a new environment, run::

      mamba create --name myenvname afpdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/afpdb:<tag>

   (see `afpdb/tags`_ for valid values for ``<tag>``)


.. |downloads_afpdb| image:: https://img.shields.io/conda/dn/bioconda/afpdb.svg?style=flat
   :target: https://anaconda.org/bioconda/afpdb
   :alt:   (downloads)
.. |docker_afpdb| image:: https://quay.io/repository/biocontainers/afpdb/status
   :target: https://quay.io/repository/biocontainers/afpdb
.. _`afpdb/tags`: https://quay.io/repository/biocontainers/afpdb?tab=tags


.. raw:: html

    <script>
        var package = "afpdb";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afpdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afpdb/README.html