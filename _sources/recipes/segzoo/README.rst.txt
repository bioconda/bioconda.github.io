:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segzoo'
.. highlight: bash

segzoo
======

.. conda:recipe:: segzoo
   :replaces_section_title:
   :noindex:

   System for turnkey analysis of semi\-automated genome annotations

   :homepage: https://github.com/hoffmangroup/segzoo
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`segzoo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segzoo/meta.yaml>`_

   


.. conda:package:: segzoo

   |downloads_segzoo| |docker_segzoo|

   :versions:
      
      

      ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.7-0``

      

   
   :depends ggd: 
   :depends pybedtools: 
   :depends python: ``>=3.7``
   :depends seaborn: 
   :depends segtools: 
   :depends snakemake-minimal: 
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

      mamba install segzoo

   and update with::

      mamba update segzoo

  To create a new environment, run::

      mamba create --name myenvname segzoo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segzoo:<tag>

   (see `segzoo/tags`_ for valid values for ``<tag>``)


.. |downloads_segzoo| image:: https://img.shields.io/conda/dn/bioconda/segzoo.svg?style=flat
   :target: https://anaconda.org/bioconda/segzoo
   :alt:   (downloads)
.. |docker_segzoo| image:: https://quay.io/repository/biocontainers/segzoo/status
   :target: https://quay.io/repository/biocontainers/segzoo
.. _`segzoo/tags`: https://quay.io/repository/biocontainers/segzoo?tab=tags


.. raw:: html

    <script>
        var package = "segzoo";
        var versions = ["1.0.13","1.0.12","1.0.11","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segzoo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segzoo/README.html