:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yleaf'
.. highlight: bash

yleaf
=====

.. conda:recipe:: yleaf
   :replaces_section_title:
   :noindex:

   Yleaf \- A tool for Y\-chromosome haplogroup prediction

   :homepage: https://github.com/genid/Yleaf
   :documentation: https://academic.oup.com/mbe/article/35/5/1291/4922696
   
   :license: MIT / MIT
   :recipe: /`yleaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yleaf/meta.yaml>`_

   Yleaf is a tool for Y\-chromosome haplogroup prediction from next\-generation sequencing data.
   It provides a comprehensive solution for analyzing Y\-chromosome genetic data and determining
   haplogroup assignments.



.. conda:package:: yleaf

   |downloads_yleaf| |docker_yleaf|

   :versions:
      
      

      ``3.2.1-0``

      

   
   :depends graphviz: ``>=2.40``
   :depends networkx: ``>=2.6``
   :depends numpy: 
   :depends pandas: ``>=1.3``
   :depends pip: 
   :depends python: 
   :depends python-dateutil: ``>=2.8``
   :depends pytz: ``>=2021``
   :depends six: ``>=1.16``
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

      mamba install yleaf

   and update with::

      mamba update yleaf

  To create a new environment, run::

      mamba create --name myenvname yleaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yleaf:<tag>

   (see `yleaf/tags`_ for valid values for ``<tag>``)


.. |downloads_yleaf| image:: https://img.shields.io/conda/dn/bioconda/yleaf.svg?style=flat
   :target: https://anaconda.org/bioconda/yleaf
   :alt:   (downloads)
.. |docker_yleaf| image:: https://quay.io/repository/biocontainers/yleaf/status
   :target: https://quay.io/repository/biocontainers/yleaf
.. _`yleaf/tags`: https://quay.io/repository/biocontainers/yleaf?tab=tags


.. raw:: html

    <script>
        var package = "yleaf";
        var versions = ["3.2.1"];
    </script>





Notes
-----
Yleaf requires reference genome files for analysis. These will be downloaded automatically
when needed\, or you can specify their location in the config.txt file.

Basic usage\:
  Yleaf \-fastq input.fastq \-rg hg38 \-o output\_dir

For more information\, see the documentation at\:
  https\:\/\/github.com\/genid\/Yleaf


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yleaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yleaf/README.html