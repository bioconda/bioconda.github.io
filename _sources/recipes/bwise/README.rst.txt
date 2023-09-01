:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwise'
.. highlight: bash

bwise
=====

.. conda:recipe:: bwise
   :replaces_section_title:
   :noindex:

   BWISE is a de Bruijn assembly Workflow using Integral information of Short paired\-End reads

   :homepage: https://github.com/Malfoy/BWISE
   :license: AGPL-3.0
   :recipe: /`bwise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise/meta.yaml>`_

   


.. conda:package:: bwise

   |downloads_bwise| |docker_bwise|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bcalm: 
   :depends bgreat: 
   :depends btrim: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3``
   :depends zlib: 
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

      mamba install bwise

   and update with::

      mamba update bwise

  To create a new environment, run::

      mamba create --name myenvname bwise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwise:<tag>

   (see `bwise/tags`_ for valid values for ``<tag>``)


.. |downloads_bwise| image:: https://img.shields.io/conda/dn/bioconda/bwise.svg?style=flat
   :target: https://anaconda.org/bioconda/bwise
   :alt:   (downloads)
.. |docker_bwise| image:: https://quay.io/repository/biocontainers/bwise/status
   :target: https://quay.io/repository/biocontainers/bwise
.. _`bwise/tags`: https://quay.io/repository/biocontainers/bwise?tab=tags


.. raw:: html

    <script>
        var package = "bwise";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwise/README.html