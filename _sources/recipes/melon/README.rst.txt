:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'melon'
.. highlight: bash

melon
=====

.. conda:recipe:: melon
   :replaces_section_title:
   :noindex:

   Melon\: metagenomic long\-read\-based taxonomic identification and quantification

   :homepage: https://github.com/xinehc/melon
   :license: MIT / MIT
   :recipe: /`melon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melon/meta.yaml>`_

   


.. conda:package:: melon

   |downloads_melon| |docker_melon|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      

   
   :depends diamond: ``>=2.1.8``
   :depends kraken2: 
   :depends minimap2: ``>=2.26``
   :depends numpy: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :depends seqkit: 
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

      mamba install melon

   and update with::

      mamba update melon

  To create a new environment, run::

      mamba create --name myenvname melon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/melon:<tag>

   (see `melon/tags`_ for valid values for ``<tag>``)


.. |downloads_melon| image:: https://img.shields.io/conda/dn/bioconda/melon.svg?style=flat
   :target: https://anaconda.org/bioconda/melon
   :alt:   (downloads)
.. |docker_melon| image:: https://quay.io/repository/biocontainers/melon/status
   :target: https://quay.io/repository/biocontainers/melon
.. _`melon/tags`: https://quay.io/repository/biocontainers/melon?tab=tags


.. raw:: html

    <script>
        var package = "melon";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/melon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/melon/README.html