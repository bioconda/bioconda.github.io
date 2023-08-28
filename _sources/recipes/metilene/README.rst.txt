:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metilene'
.. highlight: bash

metilene
========

.. conda:recipe:: metilene
   :replaces_section_title:
   :noindex:

   Fast and sensitive detection of differential DNA methylation

   :homepage: http://www.bioinf.uni-leipzig.de/Software/metilene/
   :license: GPLv2
   :recipe: /`metilene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metilene/meta.yaml>`_

   


.. conda:package:: metilene

   |downloads_metilene| |docker_metilene|

   :versions:
      
      

      ``0.2.8-3``,  ``0.2.8-2``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends bedtools: ``>=2.24``
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
   :depends r-ggplot2: ``>=2.0.0``
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

      mamba install metilene

   and update with::

      mamba update metilene

  To create a new environment, run::

      mamba create --name myenvname metilene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metilene:<tag>

   (see `metilene/tags`_ for valid values for ``<tag>``)


.. |downloads_metilene| image:: https://img.shields.io/conda/dn/bioconda/metilene.svg?style=flat
   :target: https://anaconda.org/bioconda/metilene
   :alt:   (downloads)
.. |docker_metilene| image:: https://quay.io/repository/biocontainers/metilene/status
   :target: https://quay.io/repository/biocontainers/metilene
.. _`metilene/tags`: https://quay.io/repository/biocontainers/metilene?tab=tags


.. raw:: html

    <script>
        var package = "metilene";
        var versions = ["0.2.8","0.2.8","0.2.8","0.2.8","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metilene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metilene/README.html