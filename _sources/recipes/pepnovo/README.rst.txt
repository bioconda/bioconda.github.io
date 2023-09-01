:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepnovo'
.. highlight: bash

pepnovo
=======

.. conda:recipe:: pepnovo
   :replaces_section_title:
   :noindex:

   PepNovo serves as a high throughput de novo peptide sequencing tool for tandem mass spectrometry data

   :homepage: http://proteomics.ucsd.edu/Software/PepNovo/
   :license: BSD
   :recipe: /`pepnovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepnovo/meta.yaml>`_
   :links: biotools: :biotools:`pepnovo`

   


.. conda:package:: pepnovo

   |downloads_pepnovo| |docker_pepnovo|

   :versions:
      
      

      ``20101117-3``,  ``20101117-2``,  ``20101117-1``,  ``20101117-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
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

      mamba install pepnovo

   and update with::

      mamba update pepnovo

  To create a new environment, run::

      mamba create --name myenvname pepnovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pepnovo:<tag>

   (see `pepnovo/tags`_ for valid values for ``<tag>``)


.. |downloads_pepnovo| image:: https://img.shields.io/conda/dn/bioconda/pepnovo.svg?style=flat
   :target: https://anaconda.org/bioconda/pepnovo
   :alt:   (downloads)
.. |docker_pepnovo| image:: https://quay.io/repository/biocontainers/pepnovo/status
   :target: https://quay.io/repository/biocontainers/pepnovo
.. _`pepnovo/tags`: https://quay.io/repository/biocontainers/pepnovo?tab=tags


.. raw:: html

    <script>
        var package = "pepnovo";
        var versions = ["20101117","20101117","20101117","20101117"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepnovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepnovo/README.html