:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytaxonkit'
.. highlight: bash

pytaxonkit
==========

.. conda:recipe:: pytaxonkit
   :replaces_section_title:
   :noindex:

   Python bindings for the TaxonKit library.

   :homepage: https://github.com/bioforensics/pytaxonkit/
   :license: BSD / BSD-3-Clause
   :recipe: /`pytaxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit/meta.yaml>`_

   


.. conda:package:: pytaxonkit

   |downloads_pytaxonkit| |docker_pytaxonkit|

   :versions:
      
      

      ``0.9-0``,  ``0.8-0``,  ``0.7.2-0``,  ``0.6.1-0``,  ``0.6-0``

      

   
   :depends pandas: ``>=1.0``
   :depends pytest: ``>=5.4``
   :depends python: ``>=3,<3.12``
   :depends taxonkit: ``>=0.16``
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

      mamba install pytaxonkit

   and update with::

      mamba update pytaxonkit

  To create a new environment, run::

      mamba create --name myenvname pytaxonkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytaxonkit:<tag>

   (see `pytaxonkit/tags`_ for valid values for ``<tag>``)


.. |downloads_pytaxonkit| image:: https://img.shields.io/conda/dn/bioconda/pytaxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/pytaxonkit
   :alt:   (downloads)
.. |docker_pytaxonkit| image:: https://quay.io/repository/biocontainers/pytaxonkit/status
   :target: https://quay.io/repository/biocontainers/pytaxonkit
.. _`pytaxonkit/tags`: https://quay.io/repository/biocontainers/pytaxonkit?tab=tags


.. raw:: html

    <script>
        var package = "pytaxonkit";
        var versions = ["0.9","0.8","0.7.2","0.6.1","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytaxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytaxonkit/README.html