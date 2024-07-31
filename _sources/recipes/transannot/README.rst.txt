:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transannot'
.. highlight: bash

transannot
==========

.. conda:recipe:: transannot
   :replaces_section_title:
   :noindex:

   TransAnnot\: a fast transcriptome annotation pipeline

   :homepage: https://github.com/soedinglab/transannot
   :license: GPL / GPL-3.0-or-later
   :recipe: /`transannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transannot/meta.yaml>`_
   :links: biotools: :biotools:`transannot`

   


.. conda:package:: transannot

   |downloads_transannot| |docker_transannot|

   :versions:
      
      

      ``3.70b2a60-1``,  ``3.70b2a60-0``,  ``3.7f1c8e1-0``,  ``1.fa9ebab-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
   :depends zlib: 
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

      mamba install transannot

   and update with::

      mamba update transannot

  To create a new environment, run::

      mamba create --name myenvname transannot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transannot:<tag>

   (see `transannot/tags`_ for valid values for ``<tag>``)


.. |downloads_transannot| image:: https://img.shields.io/conda/dn/bioconda/transannot.svg?style=flat
   :target: https://anaconda.org/bioconda/transannot
   :alt:   (downloads)
.. |docker_transannot| image:: https://quay.io/repository/biocontainers/transannot/status
   :target: https://quay.io/repository/biocontainers/transannot
.. _`transannot/tags`: https://quay.io/repository/biocontainers/transannot?tab=tags


.. raw:: html

    <script>
        var package = "transannot";
        var versions = ["3.70b2a60","3.70b2a60","3.7f1c8e1","1.fa9ebab"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transannot/README.html