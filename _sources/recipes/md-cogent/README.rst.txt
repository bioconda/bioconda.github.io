:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'md-cogent'
.. highlight: bash

md-cogent
=========

.. conda:recipe:: md-cogent
   :replaces_section_title:
   :noindex:

   COding GENome reconstruction Tool using transcript sequences

   :homepage: https://github.com/Magdoll/Cogent
   :license: BSD-3-Clause-Clear
   :recipe: /`md-cogent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/md-cogent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/md-cogent/meta.yaml>`_

   


.. conda:package:: md-cogent

   |downloads_md-cogent| |docker_md-cogent|

   :versions:
      
      

      ``8.0.0-0``,  ``7.0.0-0``

      

   
   :depends biopython: 
   :depends bx-python: 
   :depends matplotlib-base: 
   :depends networkx: ``2.5.*``
   :depends numpy: 
   :depends pulp: 
   :depends python: 
   :depends scikit-image: 
   :depends scipy: 
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

      mamba install md-cogent

   and update with::

      mamba update md-cogent

  To create a new environment, run::

      mamba create --name myenvname md-cogent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/md-cogent:<tag>

   (see `md-cogent/tags`_ for valid values for ``<tag>``)


.. |downloads_md-cogent| image:: https://img.shields.io/conda/dn/bioconda/md-cogent.svg?style=flat
   :target: https://anaconda.org/bioconda/md-cogent
   :alt:   (downloads)
.. |docker_md-cogent| image:: https://quay.io/repository/biocontainers/md-cogent/status
   :target: https://quay.io/repository/biocontainers/md-cogent
.. _`md-cogent/tags`: https://quay.io/repository/biocontainers/md-cogent?tab=tags


.. raw:: html

    <script>
        var package = "md-cogent";
        var versions = ["8.0.0","7.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/md-cogent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/md-cogent/README.html