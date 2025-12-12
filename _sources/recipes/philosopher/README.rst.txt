:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'philosopher'
.. highlight: bash

philosopher
===========

.. conda:recipe:: philosopher
   :replaces_section_title:
   :noindex:

   Philosopher is a versatile toolkit for deep proteomics data analysis \(PSI\-MS pipelines\)

   :homepage: https://github.com/Nesvilab/philosopher
   :license: GPL-3.0-only
   :recipe: /`philosopher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/philosopher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/philosopher/meta.yaml>`_

   


.. conda:package:: philosopher

   |downloads_philosopher| |docker_philosopher|

   :versions:
      
      

      ``5.1.2-0``,  ``5.1.0-0``

      

   
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

      mamba install philosopher

   and update with::

      mamba update philosopher

  To create a new environment, run::

      mamba create --name myenvname philosopher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/philosopher:<tag>

   (see `philosopher/tags`_ for valid values for ``<tag>``)


.. |downloads_philosopher| image:: https://img.shields.io/conda/dn/bioconda/philosopher.svg?style=flat
   :target: https://anaconda.org/bioconda/philosopher
   :alt:   (downloads)
.. |docker_philosopher| image:: https://quay.io/repository/biocontainers/philosopher/status
   :target: https://quay.io/repository/biocontainers/philosopher
.. _`philosopher/tags`: https://quay.io/repository/biocontainers/philosopher?tab=tags


.. raw:: html

    <script>
        var package = "philosopher";
        var versions = ["5.1.2","5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/philosopher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/philosopher/README.html