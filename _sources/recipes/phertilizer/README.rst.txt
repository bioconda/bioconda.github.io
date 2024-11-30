:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phertilizer'
.. highlight: bash

phertilizer
===========

.. conda:recipe:: phertilizer
   :replaces_section_title:
   :noindex:

   Phertilizer is a method to grow a clonal tree from ultra\-low coverage single\-cell DNA sequenced data

   :homepage: https://github.com/elkebir-group/phertilizer
   :license: BSD-3
   :recipe: /`phertilizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phertilizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phertilizer/meta.yaml>`_

   


.. conda:package:: phertilizer

   |downloads_phertilizer| |docker_phertilizer|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends networkx: 
   :depends numba: ``>=0.54,<0.55``
   :depends numpy: 
   :depends pandas: 
   :depends pygraphviz: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install phertilizer

   and update with::

      mamba update phertilizer

  To create a new environment, run::

      mamba create --name myenvname phertilizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phertilizer:<tag>

   (see `phertilizer/tags`_ for valid values for ``<tag>``)


.. |downloads_phertilizer| image:: https://img.shields.io/conda/dn/bioconda/phertilizer.svg?style=flat
   :target: https://anaconda.org/bioconda/phertilizer
   :alt:   (downloads)
.. |docker_phertilizer| image:: https://quay.io/repository/biocontainers/phertilizer/status
   :target: https://quay.io/repository/biocontainers/phertilizer
.. _`phertilizer/tags`: https://quay.io/repository/biocontainers/phertilizer?tab=tags


.. raw:: html

    <script>
        var package = "phertilizer";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phertilizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phertilizer/README.html