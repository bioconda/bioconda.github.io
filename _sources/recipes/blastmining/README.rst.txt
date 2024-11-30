:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastmining'
.. highlight: bash

blastmining
===========

.. conda:recipe:: blastmining
   :replaces_section_title:
   :noindex:

   blastMining\: Mining NCBI BLAST outputs

   :homepage: https://github.com/NuruddinKhoiry/blastMining
   :documentation: https://github.com/NuruddinKhoiry/blastMining/blob/master/README.md
   
   :license: GPL3 / GNU GENERAL PUBLIC V3
   :recipe: /`blastmining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining/meta.yaml>`_
   :links: biotools: :biotools:`blastMining`, doi: :doi:`10.5281/zenodo.7431488`

   


.. conda:package:: blastmining

   |downloads_blastmining| |docker_blastmining|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends blast: ``>=2.12.0``
   :depends csvtk: 
   :depends fastnumbers: 
   :depends krona: 
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends python: ``>=3.6``
   :depends taxonkit: 
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

      mamba install blastmining

   and update with::

      mamba update blastmining

  To create a new environment, run::

      mamba create --name myenvname blastmining

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blastmining:<tag>

   (see `blastmining/tags`_ for valid values for ``<tag>``)


.. |downloads_blastmining| image:: https://img.shields.io/conda/dn/bioconda/blastmining.svg?style=flat
   :target: https://anaconda.org/bioconda/blastmining
   :alt:   (downloads)
.. |docker_blastmining| image:: https://quay.io/repository/biocontainers/blastmining/status
   :target: https://quay.io/repository/biocontainers/blastmining
.. _`blastmining/tags`: https://quay.io/repository/biocontainers/blastmining?tab=tags


.. raw:: html

    <script>
        var package = "blastmining";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastmining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastmining/README.html