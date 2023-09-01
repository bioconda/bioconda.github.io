:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drprg'
.. highlight: bash

drprg
=====

.. conda:recipe:: drprg
   :replaces_section_title:
   :noindex:

   Drug resistance prediction with reference graphs

   :homepage: https://github.com/mbhall88/drprg
   :license: MIT
   :recipe: /`drprg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drprg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drprg/meta.yaml>`_

   


.. conda:package:: drprg

   |downloads_drprg| |docker_drprg|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bcftools: 
   :depends libgcc-ng: ``>=12``
   :depends mafft: ``7.505.*``
   :depends make_prg: ``0.4.*``
   :depends openssl: ``>=3.1.0,<4.0a0``
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

      mamba install drprg

   and update with::

      mamba update drprg

  To create a new environment, run::

      mamba create --name myenvname drprg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drprg:<tag>

   (see `drprg/tags`_ for valid values for ``<tag>``)


.. |downloads_drprg| image:: https://img.shields.io/conda/dn/bioconda/drprg.svg?style=flat
   :target: https://anaconda.org/bioconda/drprg
   :alt:   (downloads)
.. |docker_drprg| image:: https://quay.io/repository/biocontainers/drprg/status
   :target: https://quay.io/repository/biocontainers/drprg
.. _`drprg/tags`: https://quay.io/repository/biocontainers/drprg?tab=tags


.. raw:: html

    <script>
        var package = "drprg";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drprg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drprg/README.html