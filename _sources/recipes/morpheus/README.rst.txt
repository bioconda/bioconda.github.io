:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'morpheus'
.. highlight: bash

morpheus
========

.. conda:recipe:: morpheus
   :replaces_section_title:
   :noindex:

   mass spectrometry–based proteomics database search algorithm

   :homepage: https://github.com/cwenger/Morpheus/
   :license: MIT / MIT
   :recipe: /`morpheus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/morpheus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/morpheus/meta.yaml>`_
   :links: doi: :doi:`10.1021/pr301024c`

   


.. conda:package:: morpheus

   |downloads_morpheus| |docker_morpheus|

   :versions:
      
      

      ``287-1``,  ``287-0``,  ``272-1``,  ``272-0``,  ``255-0``

      

   
   :depends mono: ``>=4.0.0``
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

      mamba install morpheus

   and update with::

      mamba update morpheus

  To create a new environment, run::

      mamba create --name myenvname morpheus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/morpheus:<tag>

   (see `morpheus/tags`_ for valid values for ``<tag>``)


.. |downloads_morpheus| image:: https://img.shields.io/conda/dn/bioconda/morpheus.svg?style=flat
   :target: https://anaconda.org/bioconda/morpheus
   :alt:   (downloads)
.. |docker_morpheus| image:: https://quay.io/repository/biocontainers/morpheus/status
   :target: https://quay.io/repository/biocontainers/morpheus
.. _`morpheus/tags`: https://quay.io/repository/biocontainers/morpheus?tab=tags


.. raw:: html

    <script>
        var package = "morpheus";
        var versions = ["287","287","272","272","255"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/morpheus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/morpheus/README.html