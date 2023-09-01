:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'counterr'
.. highlight: bash

counterr
========

.. conda:recipe:: counterr
   :replaces_section_title:
   :noindex:

   Counterr is a light\-weight command line tool that computes errors in sequencing data by comparing the reads to a reference genome.

   :homepage: https://github.com/dayzerodx/counterr
   :license: GPL-3.0
   :recipe: /`counterr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/counterr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/counterr/meta.yaml>`_

   


.. conda:package:: counterr

   |downloads_counterr| |docker_counterr|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends matplotlib: ``>=2.2.3``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=0.23.4``
   :depends pysam: ``>=0.14.1``
   :depends python: 
   :depends seaborn: ``>=0.9.0``
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

      mamba install counterr

   and update with::

      mamba update counterr

  To create a new environment, run::

      mamba create --name myenvname counterr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/counterr:<tag>

   (see `counterr/tags`_ for valid values for ``<tag>``)


.. |downloads_counterr| image:: https://img.shields.io/conda/dn/bioconda/counterr.svg?style=flat
   :target: https://anaconda.org/bioconda/counterr
   :alt:   (downloads)
.. |docker_counterr| image:: https://quay.io/repository/biocontainers/counterr/status
   :target: https://quay.io/repository/biocontainers/counterr
.. _`counterr/tags`: https://quay.io/repository/biocontainers/counterr?tab=tags


.. raw:: html

    <script>
        var package = "counterr";
        var versions = ["0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/counterr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/counterr/README.html