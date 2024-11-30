:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codingorf'
.. highlight: bash

codingorf
=========

.. conda:recipe:: codingorf
   :replaces_section_title:
   :noindex:

   codingorf\: The codingorf finds translatable ORFs from an input sequence

   :homepage: https://github.com/Woosub-Kim/codingorf
   :license: AGPL-3.0
   :recipe: /`codingorf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingorf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingorf/meta.yaml>`_

   


.. conda:package:: codingorf

   |downloads_codingorf| |docker_codingorf|

   :versions:
      
      

      ``1.0.0-0``,  ``v1.0.0-0``

      

   
   :depends biopython: 
   :depends python: 
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

      mamba install codingorf

   and update with::

      mamba update codingorf

  To create a new environment, run::

      mamba create --name myenvname codingorf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/codingorf:<tag>

   (see `codingorf/tags`_ for valid values for ``<tag>``)


.. |downloads_codingorf| image:: https://img.shields.io/conda/dn/bioconda/codingorf.svg?style=flat
   :target: https://anaconda.org/bioconda/codingorf
   :alt:   (downloads)
.. |docker_codingorf| image:: https://quay.io/repository/biocontainers/codingorf/status
   :target: https://quay.io/repository/biocontainers/codingorf
.. _`codingorf/tags`: https://quay.io/repository/biocontainers/codingorf?tab=tags


.. raw:: html

    <script>
        var package = "codingorf";
        var versions = ["1.0.0","v1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codingorf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codingorf/README.html