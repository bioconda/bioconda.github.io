:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a-liner'
.. highlight: bash

a-liner
=======

.. conda:recipe:: a-liner
   :replaces_section_title:
   :noindex:

   Flexible command\-line tool for linear visualization of genome\-scale sequence alignments

   :homepage: https://github.com/mokuno3430/a-liner
   :license: MIT
   :recipe: /`a-liner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a-liner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a-liner/meta.yaml>`_

   


.. conda:package:: a-liner

   |downloads_a-liner| |docker_a-liner|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.8``
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

      mamba install a-liner

   and update with::

      mamba update a-liner

  To create a new environment, run::

      mamba create --name myenvname a-liner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/a-liner:<tag>

   (see `a-liner/tags`_ for valid values for ``<tag>``)


.. |downloads_a-liner| image:: https://img.shields.io/conda/dn/bioconda/a-liner.svg?style=flat
   :target: https://anaconda.org/bioconda/a-liner
   :alt:   (downloads)
.. |docker_a-liner| image:: https://quay.io/repository/biocontainers/a-liner/status
   :target: https://quay.io/repository/biocontainers/a-liner
.. _`a-liner/tags`: https://quay.io/repository/biocontainers/a-liner?tab=tags


.. raw:: html

    <script>
        var package = "a-liner";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a-liner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a-liner/README.html