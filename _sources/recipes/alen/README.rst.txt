:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alen'
.. highlight: bash

alen
====

.. conda:recipe:: alen
   :replaces_section_title:
   :noindex:

   Simple terminal sequence alignment viewer

   :homepage: https://github.com/jakobnissen/alen
   :license: MIT
   :recipe: /`alen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alen/meta.yaml>`_

   


.. conda:package:: alen

   |downloads_alen| |docker_alen|

   :versions:
      
      

      ``0.3.1-0``

      

   
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

      mamba install alen

   and update with::

      mamba update alen

  To create a new environment, run::

      mamba create --name myenvname alen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alen:<tag>

   (see `alen/tags`_ for valid values for ``<tag>``)


.. |downloads_alen| image:: https://img.shields.io/conda/dn/bioconda/alen.svg?style=flat
   :target: https://anaconda.org/bioconda/alen
   :alt:   (downloads)
.. |docker_alen| image:: https://quay.io/repository/biocontainers/alen/status
   :target: https://quay.io/repository/biocontainers/alen
.. _`alen/tags`: https://quay.io/repository/biocontainers/alen?tab=tags


.. raw:: html

    <script>
        var package = "alen";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alen/README.html