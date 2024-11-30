:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msa4u'
.. highlight: bash

msa4u
=====

.. conda:recipe:: msa4u
   :replaces_section_title:
   :noindex:

   A simple visualisation tool for Multiple Sequence Alignment.

   :homepage: https://github.com/GCA-VH-lab/msa4u
   :license: WTFPL
   :recipe: /`msa4u <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msa4u>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msa4u/meta.yaml>`_

   


.. conda:package:: msa4u

   |downloads_msa4u| |docker_msa4u|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends biopython: 
   :depends configs: 
   :depends pandas: 
   :depends python: 
   :depends reportlab: 
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

      mamba install msa4u

   and update with::

      mamba update msa4u

  To create a new environment, run::

      mamba create --name myenvname msa4u

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msa4u:<tag>

   (see `msa4u/tags`_ for valid values for ``<tag>``)


.. |downloads_msa4u| image:: https://img.shields.io/conda/dn/bioconda/msa4u.svg?style=flat
   :target: https://anaconda.org/bioconda/msa4u
   :alt:   (downloads)
.. |docker_msa4u| image:: https://quay.io/repository/biocontainers/msa4u/status
   :target: https://quay.io/repository/biocontainers/msa4u
.. _`msa4u/tags`: https://quay.io/repository/biocontainers/msa4u?tab=tags


.. raw:: html

    <script>
        var package = "msa4u";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msa4u/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msa4u/README.html