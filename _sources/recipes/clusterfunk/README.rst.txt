:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterfunk'
.. highlight: bash

clusterfunk
===========

.. conda:recipe:: clusterfunk
   :replaces_section_title:
   :noindex:

   Miscellaneous clustering manipulation tools for phylogenetic trees

   :homepage: https://github.com/cov-ert/clusterfunk
   :license: MIT / MIT
   :recipe: /`clusterfunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterfunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterfunk/meta.yaml>`_

   


.. conda:package:: clusterfunk

   |downloads_clusterfunk| |docker_clusterfunk|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends biopython: ``>=1.70``
   :depends chardet: ``>=3.0.4``
   :depends dendropy: ``>=4.4.0``
   :depends python: 
   :depends scipy: ``>=1.4.1``
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

      mamba install clusterfunk

   and update with::

      mamba update clusterfunk

  To create a new environment, run::

      mamba create --name myenvname clusterfunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clusterfunk:<tag>

   (see `clusterfunk/tags`_ for valid values for ``<tag>``)


.. |downloads_clusterfunk| image:: https://img.shields.io/conda/dn/bioconda/clusterfunk.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterfunk
   :alt:   (downloads)
.. |docker_clusterfunk| image:: https://quay.io/repository/biocontainers/clusterfunk/status
   :target: https://quay.io/repository/biocontainers/clusterfunk
.. _`clusterfunk/tags`: https://quay.io/repository/biocontainers/clusterfunk?tab=tags


.. raw:: html

    <script>
        var package = "clusterfunk";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterfunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterfunk/README.html