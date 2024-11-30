:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jali'
.. highlight: bash

jali
====

.. conda:recipe:: jali
   :replaces_section_title:
   :noindex:

   Alignment method for comparing a protein sequence to a protein family\, represented by a multiple alignment. It can also be used for sensitive protein database searches. The algorithm is a generalization of the Smith\-Waterman algorithm.

   :homepage: http://bibiserv.cebitec.uni-bielefeld.de/jali
   :license: file
   :recipe: /`jali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali/meta.yaml>`_
   :links: biotools: :biotools:`jali`, doi: :doi:`10.1089/106652702761034172`

   


.. conda:package:: jali

   |downloads_jali| |docker_jali|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
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

      mamba install jali

   and update with::

      mamba update jali

  To create a new environment, run::

      mamba create --name myenvname jali

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jali:<tag>

   (see `jali/tags`_ for valid values for ``<tag>``)


.. |downloads_jali| image:: https://img.shields.io/conda/dn/bioconda/jali.svg?style=flat
   :target: https://anaconda.org/bioconda/jali
   :alt:   (downloads)
.. |docker_jali| image:: https://quay.io/repository/biocontainers/jali/status
   :target: https://quay.io/repository/biocontainers/jali
.. _`jali/tags`: https://quay.io/repository/biocontainers/jali?tab=tags


.. raw:: html

    <script>
        var package = "jali";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jali/README.html