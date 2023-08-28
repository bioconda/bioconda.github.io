:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bialign'
.. highlight: bash

bialign
=======

.. conda:recipe:: bialign
   :replaces_section_title:
   :noindex:

   Bialignment of RNAs and proteins

   :homepage: https://github.com/s-will/BiAlign
   :documentation: https://pypi.org/project/bialign/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`bialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bialign/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-030-63061-4_15`

   


.. conda:package:: bialign

   |downloads_bialign| |docker_bialign|

   :versions:
      
      

      ``0.3-0``,  ``0.3b5-0``,  ``0.3b4-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install bialign

   and update with::

      mamba update bialign

  To create a new environment, run::

      mamba create --name myenvname bialign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bialign:<tag>

   (see `bialign/tags`_ for valid values for ``<tag>``)


.. |downloads_bialign| image:: https://img.shields.io/conda/dn/bioconda/bialign.svg?style=flat
   :target: https://anaconda.org/bioconda/bialign
   :alt:   (downloads)
.. |docker_bialign| image:: https://quay.io/repository/biocontainers/bialign/status
   :target: https://quay.io/repository/biocontainers/bialign
.. _`bialign/tags`: https://quay.io/repository/biocontainers/bialign?tab=tags


.. raw:: html

    <script>
        var package = "bialign";
        var versions = ["0.3","0.3b5","0.3b4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bialign/README.html