:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytransaln'
.. highlight: bash

pytransaln
==========

.. conda:recipe:: pytransaln
   :replaces_section_title:
   :noindex:

   Translation\-guided nucleotide alignment for coding sequences

   :homepage: https://github.com/monagrland/pytransaln
   :license: MIT
   :recipe: /`pytransaln <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytransaln>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytransaln/meta.yaml>`_

   


.. conda:package:: pytransaln

   |downloads_pytransaln| |docker_pytransaln|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends biopython: ``>=1.80,<2``
   :depends matplotlib-base: ``>=3.6,<4``
   :depends pandas: ``>=1.3,<3``
   :depends pyhmmer: ``0.10``
   :depends python: 
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

      mamba install pytransaln

   and update with::

      mamba update pytransaln

  To create a new environment, run::

      mamba create --name myenvname pytransaln

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytransaln:<tag>

   (see `pytransaln/tags`_ for valid values for ``<tag>``)


.. |downloads_pytransaln| image:: https://img.shields.io/conda/dn/bioconda/pytransaln.svg?style=flat
   :target: https://anaconda.org/bioconda/pytransaln
   :alt:   (downloads)
.. |docker_pytransaln| image:: https://quay.io/repository/biocontainers/pytransaln/status
   :target: https://quay.io/repository/biocontainers/pytransaln
.. _`pytransaln/tags`: https://quay.io/repository/biocontainers/pytransaln?tab=tags


.. raw:: html

    <script>
        var package = "pytransaln";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytransaln/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytransaln/README.html