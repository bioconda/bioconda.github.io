:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magpurify'
.. highlight: bash

magpurify
=========

.. conda:recipe:: magpurify
   :replaces_section_title:
   :noindex:

   Identify and remove incorrectly binned contigs from metagenome\-assembled genomes.

   :homepage: https://github.com/snayfach/MAGpurify
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`magpurify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify/meta.yaml>`_

   


.. conda:package:: magpurify

   |downloads_magpurify| |docker_magpurify|

   :versions:
      
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends biopython: 
   :depends blast: 
   :depends coverm: 
   :depends hmmer: 
   :depends last: 
   :depends mash: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>=3.6,<=3.12``
   :depends scikit-learn: 
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

      mamba install magpurify

   and update with::

      mamba update magpurify

  To create a new environment, run::

      mamba create --name myenvname magpurify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magpurify:<tag>

   (see `magpurify/tags`_ for valid values for ``<tag>``)


.. |downloads_magpurify| image:: https://img.shields.io/conda/dn/bioconda/magpurify.svg?style=flat
   :target: https://anaconda.org/bioconda/magpurify
   :alt:   (downloads)
.. |docker_magpurify| image:: https://quay.io/repository/biocontainers/magpurify/status
   :target: https://quay.io/repository/biocontainers/magpurify
.. _`magpurify/tags`: https://quay.io/repository/biocontainers/magpurify?tab=tags


.. raw:: html

    <script>
        var package = "magpurify";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magpurify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magpurify/README.html