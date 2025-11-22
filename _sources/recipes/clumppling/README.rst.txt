:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clumppling'
.. highlight: bash

clumppling
==========

.. conda:recipe:: clumppling
   :replaces_section_title:
   :noindex:

   Cluster matching and permutation program with integer linear programming.

   :homepage: https://pypi.org/project/clumppling
   :documentation: https://github.com/PopGenClustering/Clumppling/blob/master/Clumppling_Manual.pdf
   
   :developer docs: https://github.com/PopGenClustering/Clumppling
   :license: MIT / MIT
   :recipe: /`clumppling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clumppling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clumppling/meta.yaml>`_

   Clumppling \(CLUster Matching and Permutation Program that uses integer Linear programmING\) is a framework for aligning clustering results of population structure analysis.



.. conda:package:: clumppling

   |downloads_clumppling| |docker_clumppling|

   :versions:
      
      

      ``2.0.0-0``,  ``1.5.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.2-0``

      

   
   :depends cvxpy: ``1.3.1.*``
   :depends matplotlib-base: ``>=3.7.0,<4.0.0``
   :depends networkx: ``<3.0``
   :depends numpy: ``1.24.0.*``
   :depends pandas: ``>=2.0.0,<3.0.0``
   :depends python: ``>=3.8,<3.12``
   :depends python-louvain: ``0.16.*``
   :depends scipy: ``1.10.0.*``
   :depends tracywidom: ``0.3.0.*``
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

      mamba install clumppling

   and update with::

      mamba update clumppling

  To create a new environment, run::

      mamba create --name myenvname clumppling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clumppling:<tag>

   (see `clumppling/tags`_ for valid values for ``<tag>``)


.. |downloads_clumppling| image:: https://img.shields.io/conda/dn/bioconda/clumppling.svg?style=flat
   :target: https://anaconda.org/bioconda/clumppling
   :alt:   (downloads)
.. |docker_clumppling| image:: https://quay.io/repository/biocontainers/clumppling/status
   :target: https://quay.io/repository/biocontainers/clumppling
.. _`clumppling/tags`: https://quay.io/repository/biocontainers/clumppling?tab=tags


.. raw:: html

    <script>
        var package = "clumppling";
        var versions = ["2.0.0","1.5.0","1.3.0","1.2.0","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clumppling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clumppling/README.html