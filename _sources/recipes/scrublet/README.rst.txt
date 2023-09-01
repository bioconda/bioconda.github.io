:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrublet'
.. highlight: bash

scrublet
========

.. conda:recipe:: scrublet
   :replaces_section_title:
   :noindex:

   Doublet prediction in single\-cell RNA\-sequencing data

   :homepage: https://github.com/allonkleinlab/scrublet
   :license: MIT / MIT License
   :recipe: /`scrublet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrublet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrublet/meta.yaml>`_

   


.. conda:package:: scrublet

   |downloads_scrublet| |docker_scrublet|

   :versions:
      
      

      ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends python-annoy: 
   :depends scikit-image: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends umap-learn: 
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

      mamba install scrublet

   and update with::

      mamba update scrublet

  To create a new environment, run::

      mamba create --name myenvname scrublet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scrublet:<tag>

   (see `scrublet/tags`_ for valid values for ``<tag>``)


.. |downloads_scrublet| image:: https://img.shields.io/conda/dn/bioconda/scrublet.svg?style=flat
   :target: https://anaconda.org/bioconda/scrublet
   :alt:   (downloads)
.. |docker_scrublet| image:: https://quay.io/repository/biocontainers/scrublet/status
   :target: https://quay.io/repository/biocontainers/scrublet
.. _`scrublet/tags`: https://quay.io/repository/biocontainers/scrublet?tab=tags


.. raw:: html

    <script>
        var package = "scrublet";
        var versions = ["0.2.3","0.2.3","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrublet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrublet/README.html