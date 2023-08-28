:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geco2'
.. highlight: bash

geco2
=====

.. conda:recipe:: geco2
   :replaces_section_title:
   :noindex:

   A fast tool to compress DNA sequences

   :homepage: https://github.com/cobilab/geco2
   :license: GPL / GPL3
   :recipe: /`geco2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco2/meta.yaml>`_

   


.. conda:package:: geco2

   |downloads_geco2| |docker_geco2|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install geco2

   and update with::

      mamba update geco2

  To create a new environment, run::

      mamba create --name myenvname geco2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geco2:<tag>

   (see `geco2/tags`_ for valid values for ``<tag>``)


.. |downloads_geco2| image:: https://img.shields.io/conda/dn/bioconda/geco2.svg?style=flat
   :target: https://anaconda.org/bioconda/geco2
   :alt:   (downloads)
.. |docker_geco2| image:: https://quay.io/repository/biocontainers/geco2/status
   :target: https://quay.io/repository/biocontainers/geco2
.. _`geco2/tags`: https://quay.io/repository/biocontainers/geco2?tab=tags


.. raw:: html

    <script>
        var package = "geco2";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geco2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geco2/README.html