:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recycler'
.. highlight: bash

recycler
========

.. conda:recipe:: recycler
   :replaces_section_title:
   :noindex:

   Recycler is a tool designed for extracting circular sequences from de novo assembly graphs

   :homepage: https://github.com/Shamir-Lab/Recycler
   :license: BSD / BSD-3-Clause
   :recipe: /`recycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler/meta.yaml>`_

   


.. conda:package:: recycler

   |downloads_recycler| |docker_recycler|

   :versions:
      
      

      ``0.7-3``,  ``0.7-2``,  ``0.7-0``,  ``0.6.2-0``,  ``0.6-0``,  ``0.6p1-0``

      

   
   :depends networkx: 
   :depends nose: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
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

      mamba install recycler

   and update with::

      mamba update recycler

  To create a new environment, run::

      mamba create --name myenvname recycler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recycler:<tag>

   (see `recycler/tags`_ for valid values for ``<tag>``)


.. |downloads_recycler| image:: https://img.shields.io/conda/dn/bioconda/recycler.svg?style=flat
   :target: https://anaconda.org/bioconda/recycler
   :alt:   (downloads)
.. |docker_recycler| image:: https://quay.io/repository/biocontainers/recycler/status
   :target: https://quay.io/repository/biocontainers/recycler
.. _`recycler/tags`: https://quay.io/repository/biocontainers/recycler?tab=tags


.. raw:: html

    <script>
        var package = "recycler";
        var versions = ["0.7","0.7","0.7","0.6.2","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recycler/README.html