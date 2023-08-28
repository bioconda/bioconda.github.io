:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nlstradamus'
.. highlight: bash

nlstradamus
===========

.. conda:recipe:: nlstradamus
   :replaces_section_title:
   :noindex:

   NLStradamus\: a simple Hidden Markov Model for nuclear localization signal prediction.

   :homepage: http://www.moseslab.csb.utoronto.ca/NLStradamus/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`nlstradamus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nlstradamus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nlstradamus/meta.yaml>`_
   :links: biotools: :biotools:`NLStradamus`

   


.. conda:package:: nlstradamus

   |downloads_nlstradamus| |docker_nlstradamus|

   :versions:
      
      

      ``1.8-1``,  ``1.8-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install nlstradamus

   and update with::

      mamba update nlstradamus

  To create a new environment, run::

      mamba create --name myenvname nlstradamus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nlstradamus:<tag>

   (see `nlstradamus/tags`_ for valid values for ``<tag>``)


.. |downloads_nlstradamus| image:: https://img.shields.io/conda/dn/bioconda/nlstradamus.svg?style=flat
   :target: https://anaconda.org/bioconda/nlstradamus
   :alt:   (downloads)
.. |docker_nlstradamus| image:: https://quay.io/repository/biocontainers/nlstradamus/status
   :target: https://quay.io/repository/biocontainers/nlstradamus
.. _`nlstradamus/tags`: https://quay.io/repository/biocontainers/nlstradamus?tab=tags


.. raw:: html

    <script>
        var package = "nlstradamus";
        var versions = ["1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nlstradamus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nlstradamus/README.html