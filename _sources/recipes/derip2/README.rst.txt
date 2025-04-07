:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'derip2'
.. highlight: bash

derip2
======

.. conda:recipe:: derip2
   :replaces_section_title:
   :noindex:

   Predict ancestral sequence of fungal repeat elements by correcting for RIP\-like mutations in multi\-sequence DNA alignments.

   :homepage: https://github.com/Adamtaranto/deRIP2
   :license: MIT
   :recipe: /`derip2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derip2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derip2/meta.yaml>`_

   


.. conda:package:: derip2

   |downloads_derip2| |docker_derip2|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends biopython: ``>1.80``
   :depends click: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends tqdm: 
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

      mamba install derip2

   and update with::

      mamba update derip2

  To create a new environment, run::

      mamba create --name myenvname derip2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/derip2:<tag>

   (see `derip2/tags`_ for valid values for ``<tag>``)


.. |downloads_derip2| image:: https://img.shields.io/conda/dn/bioconda/derip2.svg?style=flat
   :target: https://anaconda.org/bioconda/derip2
   :alt:   (downloads)
.. |docker_derip2| image:: https://quay.io/repository/biocontainers/derip2/status
   :target: https://quay.io/repository/biocontainers/derip2
.. _`derip2/tags`: https://quay.io/repository/biocontainers/derip2?tab=tags


.. raw:: html

    <script>
        var package = "derip2";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/derip2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/derip2/README.html