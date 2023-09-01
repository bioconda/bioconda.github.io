:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clearcut'
.. highlight: bash

clearcut
========

.. conda:recipe:: clearcut
   :replaces_section_title:
   :noindex:

   The reference implementation for Relaxed Neighbor Joining \(RNJ\).

   :homepage: http://www.mothur.org
   :license: BSD
   :recipe: /`clearcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcut/meta.yaml>`_

   


.. conda:package:: clearcut

   |downloads_clearcut| |docker_clearcut|

   :versions:
      
      

      ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install clearcut

   and update with::

      mamba update clearcut

  To create a new environment, run::

      mamba create --name myenvname clearcut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clearcut:<tag>

   (see `clearcut/tags`_ for valid values for ``<tag>``)


.. |downloads_clearcut| image:: https://img.shields.io/conda/dn/bioconda/clearcut.svg?style=flat
   :target: https://anaconda.org/bioconda/clearcut
   :alt:   (downloads)
.. |docker_clearcut| image:: https://quay.io/repository/biocontainers/clearcut/status
   :target: https://quay.io/repository/biocontainers/clearcut
.. _`clearcut/tags`: https://quay.io/repository/biocontainers/clearcut?tab=tags


.. raw:: html

    <script>
        var package = "clearcut";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clearcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clearcut/README.html