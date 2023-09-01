:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aptardi'
.. highlight: bash

aptardi
=======

.. conda:recipe:: aptardi
   :replaces_section_title:
   :noindex:

   aptardi is a tool that predicts polyA sites from RNA\-Seq data and DNA sequence

   :homepage: https://github.com/luskry/aptardi
   :license: MIT
   :recipe: /`aptardi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aptardi/meta.yaml>`_

   


.. conda:package:: aptardi

   |downloads_aptardi| |docker_aptardi|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends h5py: ``<=2.10.0``
   :depends numpy: ``<=1.19.5``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.7,<3.8``
   :depends scikit-learn: ``>=0.24``
   :depends tensorflow: ``2.0.0``
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

      mamba install aptardi

   and update with::

      mamba update aptardi

  To create a new environment, run::

      mamba create --name myenvname aptardi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aptardi:<tag>

   (see `aptardi/tags`_ for valid values for ``<tag>``)


.. |downloads_aptardi| image:: https://img.shields.io/conda/dn/bioconda/aptardi.svg?style=flat
   :target: https://anaconda.org/bioconda/aptardi
   :alt:   (downloads)
.. |docker_aptardi| image:: https://quay.io/repository/biocontainers/aptardi/status
   :target: https://quay.io/repository/biocontainers/aptardi
.. _`aptardi/tags`: https://quay.io/repository/biocontainers/aptardi?tab=tags


.. raw:: html

    <script>
        var package = "aptardi";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aptardi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aptardi/README.html