:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vamos'
.. highlight: bash

vamos
=====

.. conda:recipe:: vamos
   :replaces_section_title:
   :noindex:

   VNTR annotation using efficient motif selection

   :homepage: https://github.com/ChaissonLab/vamos
   :license: USC-RL v1.0
   :recipe: /`vamos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamos/meta.yaml>`_

   


.. conda:package:: vamos

   |downloads_vamos| |docker_vamos|

   :versions:
      
      

      ``1.2.6-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install vamos

   and update with::

      mamba update vamos

  To create a new environment, run::

      mamba create --name myenvname vamos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vamos:<tag>

   (see `vamos/tags`_ for valid values for ``<tag>``)


.. |downloads_vamos| image:: https://img.shields.io/conda/dn/bioconda/vamos.svg?style=flat
   :target: https://anaconda.org/bioconda/vamos
   :alt:   (downloads)
.. |docker_vamos| image:: https://quay.io/repository/biocontainers/vamos/status
   :target: https://quay.io/repository/biocontainers/vamos
.. _`vamos/tags`: https://quay.io/repository/biocontainers/vamos?tab=tags


.. raw:: html

    <script>
        var package = "vamos";
        var versions = ["1.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vamos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vamos/README.html