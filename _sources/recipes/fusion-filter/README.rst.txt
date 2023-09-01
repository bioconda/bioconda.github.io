:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-filter'
.. highlight: bash

fusion-filter
=============

.. conda:recipe:: fusion-filter
   :replaces_section_title:
   :noindex:

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework for the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\).

   :homepage: https://github.com/FusionFilter/FusionFilter
   :license: BSD-3-Clause
   :recipe: /`fusion-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-filter/meta.yaml>`_

   FusionFilter provides a common fusion\-finding\, filtering\, and annotation framework used by the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). This system is leveraged for preparing a target genome and annotation set for fusion transcript identification\, fusion feature annotation\, and integrates utilities for filtering likely false\-positive fusions. \- https\:\/\/github.com\/FusionFilter\/FusionFilter\/wiki


.. conda:package:: fusion-filter

   |downloads_fusion-filter| |docker_fusion-filter|

   :versions:
      
      

      ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends blast: ``>=2.7.1``
   :depends gmap: ``>=2017.10.30``
   :depends perl: 
   :depends perl-carp: 
   :depends perl-db-file: 
   :depends perl-json-xs: 
   :depends perl-perlio-gzip: 
   :depends perl-set-intervaltree: 
   :depends perl-uri: 
   :depends python: ``<3``
   :depends samtools: 
   :depends star: ``>=2.5.4a``
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

      mamba install fusion-filter

   and update with::

      mamba update fusion-filter

  To create a new environment, run::

      mamba create --name myenvname fusion-filter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fusion-filter:<tag>

   (see `fusion-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_fusion-filter| image:: https://img.shields.io/conda/dn/bioconda/fusion-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-filter
   :alt:   (downloads)
.. |docker_fusion-filter| image:: https://quay.io/repository/biocontainers/fusion-filter/status
   :target: https://quay.io/repository/biocontainers/fusion-filter
.. _`fusion-filter/tags`: https://quay.io/repository/biocontainers/fusion-filter?tab=tags


.. raw:: html

    <script>
        var package = "fusion-filter";
        var versions = ["0.5.0","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-filter/README.html