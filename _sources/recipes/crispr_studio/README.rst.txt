:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispr_studio'
.. highlight: bash

crispr_studio
=============

.. conda:recipe:: crispr_studio
   :replaces_section_title:
   :noindex:

   CRISPRStudio is a program developed to facilitate and accelerate CRISPR array visualization

   :homepage: https://github.com/moineaulab/CRISPRStudio
   :license: GPL-3.0
   :recipe: /`crispr_studio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispr_studio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispr_studio/meta.yaml>`_

   


.. conda:package:: crispr_studio

   |downloads_crispr_studio| |docker_crispr_studio|

   :versions:
      
      

      ``1-2``,  ``1-1``,  ``1-0``

      

   
   :depends fasta3: 
   :depends numpy: ``<=1.16.2``
   :depends pandas: ``>=0.24.1``
   :depends python: ``>=3.6,<3.7``
   :depends scikit-bio: ``>=0.4.2``
   :depends scipy: ``<=1.2.1``
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

      mamba install crispr_studio

   and update with::

      mamba update crispr_studio

  To create a new environment, run::

      mamba create --name myenvname crispr_studio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispr_studio:<tag>

   (see `crispr_studio/tags`_ for valid values for ``<tag>``)


.. |downloads_crispr_studio| image:: https://img.shields.io/conda/dn/bioconda/crispr_studio.svg?style=flat
   :target: https://anaconda.org/bioconda/crispr_studio
   :alt:   (downloads)
.. |docker_crispr_studio| image:: https://quay.io/repository/biocontainers/crispr_studio/status
   :target: https://quay.io/repository/biocontainers/crispr_studio
.. _`crispr_studio/tags`: https://quay.io/repository/biocontainers/crispr_studio?tab=tags


.. raw:: html

    <script>
        var package = "crispr_studio";
        var versions = ["1","1","1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispr_studio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispr_studio/README.html