:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corneto'
.. highlight: bash

corneto
=======

.. conda:recipe:: corneto
   :replaces_section_title:
   :noindex:

   CORNETO\: A Unified Framework for Omics\-Driven Network Inference

   :homepage: https://github.com/saezlab/corneto/
   :license: GPL-3.0-or-later
   :recipe: /`corneto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corneto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corneto/meta.yaml>`_

   


.. conda:package:: corneto

   |downloads_corneto| |docker_corneto|

   :versions:
      
      

      ``1.0.0a0-0``

      

   
   :depends cvxpy-base: ``>=1.5.0,<2.0.0``
   :depends numpy: ``>=1.15,<2.0.0``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.11.0,<2.0.0``
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

      mamba install corneto

   and update with::

      mamba update corneto

  To create a new environment, run::

      mamba create --name myenvname corneto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corneto:<tag>

   (see `corneto/tags`_ for valid values for ``<tag>``)


.. |downloads_corneto| image:: https://img.shields.io/conda/dn/bioconda/corneto.svg?style=flat
   :target: https://anaconda.org/bioconda/corneto
   :alt:   (downloads)
.. |docker_corneto| image:: https://quay.io/repository/biocontainers/corneto/status
   :target: https://quay.io/repository/biocontainers/corneto
.. _`corneto/tags`: https://quay.io/repository/biocontainers/corneto?tab=tags


.. raw:: html

    <script>
        var package = "corneto";
        var versions = ["1.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corneto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corneto/README.html