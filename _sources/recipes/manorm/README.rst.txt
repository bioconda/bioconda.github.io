:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'manorm'
.. highlight: bash

manorm
======

.. conda:recipe:: manorm
   :replaces_section_title:
   :noindex:

   A robust model for quantitative comparison of ChIP\-Seq data sets.

   :homepage: https://github.com/shao-lab/MAnorm
   :license: BSD / BSD License
   :recipe: /`manorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manorm/meta.yaml>`_

   


.. conda:package:: manorm

   |downloads_manorm| |docker_manorm|

   :versions:
      
      

      ``1.3.0-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends matplotlib-base: ``>=3.0.0``
   :depends numpy: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.21.0``
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

      mamba install manorm

   and update with::

      mamba update manorm

  To create a new environment, run::

      mamba create --name myenvname manorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/manorm:<tag>

   (see `manorm/tags`_ for valid values for ``<tag>``)


.. |downloads_manorm| image:: https://img.shields.io/conda/dn/bioconda/manorm.svg?style=flat
   :target: https://anaconda.org/bioconda/manorm
   :alt:   (downloads)
.. |docker_manorm| image:: https://quay.io/repository/biocontainers/manorm/status
   :target: https://quay.io/repository/biocontainers/manorm
.. _`manorm/tags`: https://quay.io/repository/biocontainers/manorm?tab=tags


.. raw:: html

    <script>
        var package = "manorm";
        var versions = ["1.3.0","1.1.4","1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/manorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/manorm/README.html