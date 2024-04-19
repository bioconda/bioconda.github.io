:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salty'
.. highlight: bash

salty
=====

.. conda:recipe:: salty
   :replaces_section_title:
   :noindex:

   SaLTy assigns a lineage to Staphylococcus aureus WGS data and is suitable for describing large\-scale S. aureus genomic epidemiology.

   :homepage: https://github.com/LanLab/salty
   :license: GPL3
   :recipe: /`salty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salty/meta.yaml>`_

   


.. conda:package:: salty

   |downloads_salty| |docker_salty|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends kma: ``>=1.4.9``
   :depends mlst: ``>=2.23.0``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.7``
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

      mamba install salty

   and update with::

      mamba update salty

  To create a new environment, run::

      mamba create --name myenvname salty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/salty:<tag>

   (see `salty/tags`_ for valid values for ``<tag>``)


.. |downloads_salty| image:: https://img.shields.io/conda/dn/bioconda/salty.svg?style=flat
   :target: https://anaconda.org/bioconda/salty
   :alt:   (downloads)
.. |docker_salty| image:: https://quay.io/repository/biocontainers/salty/status
   :target: https://quay.io/repository/biocontainers/salty
.. _`salty/tags`: https://quay.io/repository/biocontainers/salty?tab=tags


.. raw:: html

    <script>
        var package = "salty";
        var versions = ["1.0.6","1.0.5","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salty/README.html