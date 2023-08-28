:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'borf'
.. highlight: bash

borf
====

.. conda:recipe:: borf
   :replaces_section_title:
   :noindex:

   ORF predictions from .fa files

   :homepage: https://github.com/betsig/borf
   :license: MIT / MIT
   :recipe: /`borf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/borf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/borf/meta.yaml>`_

   


.. conda:package:: borf

   |downloads_borf| |docker_borf|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends scikit-bio: 
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

      mamba install borf

   and update with::

      mamba update borf

  To create a new environment, run::

      mamba create --name myenvname borf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/borf:<tag>

   (see `borf/tags`_ for valid values for ``<tag>``)


.. |downloads_borf| image:: https://img.shields.io/conda/dn/bioconda/borf.svg?style=flat
   :target: https://anaconda.org/bioconda/borf
   :alt:   (downloads)
.. |docker_borf| image:: https://quay.io/repository/biocontainers/borf/status
   :target: https://quay.io/repository/biocontainers/borf
.. _`borf/tags`: https://quay.io/repository/biocontainers/borf?tab=tags


.. raw:: html

    <script>
        var package = "borf";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/borf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/borf/README.html