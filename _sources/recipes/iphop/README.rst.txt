:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iphop'
.. highlight: bash

iphop
=====

.. conda:recipe:: iphop
   :replaces_section_title:
   :noindex:

   Predict host genus from genomes of uncultivated phages.

   :homepage: https://bitbucket.org/srouxjgi/iphop/
   :license: GPL3 / Modified GPL v3
   :recipe: /`iphop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iphop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iphop/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pbio.3002083`

   


.. conda:package:: iphop

   |downloads_iphop| |docker_iphop|

   :versions:
      
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``1.79.*``
   :depends blast: ``2.12.*``
   :depends click: ``8.0.*``
   :depends crisper_recognition_tool: ``1.2.*``
   :depends diamond: ``2.0.*``
   :depends hmmer: ``3.3.2.*``
   :depends joblib: ``1.0.*``
   :depends numpy: ``1.23.*``
   :depends pandas: ``1.3.*``
   :depends perl: ``<6``
   :depends perl-bioperl: 
   :depends piler-cr: ``1.06.*``
   :depends prodigal: ``2.6.*``
   :depends python: ``3.8.*``
   :depends r-base: ``4.0.*``
   :depends r-ranger: ``0.13.*``
   :depends scikit-learn: ``0.22.*``
   :depends tensorflow: ``2.7.*``
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

      mamba install iphop

   and update with::

      mamba update iphop

  To create a new environment, run::

      mamba create --name myenvname iphop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iphop:<tag>

   (see `iphop/tags`_ for valid values for ``<tag>``)


.. |downloads_iphop| image:: https://img.shields.io/conda/dn/bioconda/iphop.svg?style=flat
   :target: https://anaconda.org/bioconda/iphop
   :alt:   (downloads)
.. |docker_iphop| image:: https://quay.io/repository/biocontainers/iphop/status
   :target: https://quay.io/repository/biocontainers/iphop
.. _`iphop/tags`: https://quay.io/repository/biocontainers/iphop?tab=tags


.. raw:: html

    <script>
        var package = "iphop";
        var versions = ["1.3.3","1.3.2","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iphop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iphop/README.html