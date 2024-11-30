:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcgtree'
.. highlight: bash

bcgtree
=======

.. conda:recipe:: bcgtree
   :replaces_section_title:
   :noindex:

   Automatized phylogenetic tree building from bacterial core genomes

   :homepage: https://github.com/molbiodiv/bcgtree
   :license: MIT / MIT
   :recipe: /`bcgtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcgtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcgtree/meta.yaml>`_

   


.. conda:package:: bcgtree

   |downloads_bcgtree| |docker_bcgtree|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends bash: 
   :depends gblocks: 
   :depends hmmer: 
   :depends muscle: ``3.8.1551.*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends prodigal: 
   :depends python: 
   :depends raxml: 
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

      mamba install bcgtree

   and update with::

      mamba update bcgtree

  To create a new environment, run::

      mamba create --name myenvname bcgtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcgtree:<tag>

   (see `bcgtree/tags`_ for valid values for ``<tag>``)


.. |downloads_bcgtree| image:: https://img.shields.io/conda/dn/bioconda/bcgtree.svg?style=flat
   :target: https://anaconda.org/bioconda/bcgtree
   :alt:   (downloads)
.. |docker_bcgtree| image:: https://quay.io/repository/biocontainers/bcgtree/status
   :target: https://quay.io/repository/biocontainers/bcgtree
.. _`bcgtree/tags`: https://quay.io/repository/biocontainers/bcgtree?tab=tags


.. raw:: html

    <script>
        var package = "bcgtree";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcgtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcgtree/README.html