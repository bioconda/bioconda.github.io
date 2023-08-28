:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dvorfs'
.. highlight: bash

dvorfs
======

.. conda:recipe:: dvorfs
   :replaces_section_title:
   :noindex:

   DVORFS tool for mining endogenous viral elements

   :homepage: https://github.com/ilevantis/dvorfs
   :license: MIT
   :recipe: /`dvorfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dvorfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dvorfs/meta.yaml>`_

   


.. conda:package:: dvorfs

   |downloads_dvorfs| |docker_dvorfs|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends emboss: 
   :depends hmmer: 
   :depends hmmer2: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends wise2: 
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

      mamba install dvorfs

   and update with::

      mamba update dvorfs

  To create a new environment, run::

      mamba create --name myenvname dvorfs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dvorfs:<tag>

   (see `dvorfs/tags`_ for valid values for ``<tag>``)


.. |downloads_dvorfs| image:: https://img.shields.io/conda/dn/bioconda/dvorfs.svg?style=flat
   :target: https://anaconda.org/bioconda/dvorfs
   :alt:   (downloads)
.. |docker_dvorfs| image:: https://quay.io/repository/biocontainers/dvorfs/status
   :target: https://quay.io/repository/biocontainers/dvorfs
.. _`dvorfs/tags`: https://quay.io/repository/biocontainers/dvorfs?tab=tags


.. raw:: html

    <script>
        var package = "dvorfs";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dvorfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dvorfs/README.html