:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampligone'
.. highlight: bash

ampligone
=========

.. conda:recipe:: ampligone
   :replaces_section_title:
   :noindex:

   Ampligone is a tool which accurately removes primer sequences from FastQ NGS reads in an amplicon sequencing experiment

   :homepage: https://rivm-bioinformatics.github.io/AmpliGone/
   :developer docs: https://github.com/RIVM-bioinformatics/AmpliGone
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`ampligone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampligone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampligone/meta.yaml>`_

   


.. conda:package:: ampligone

   |downloads_ampligone| |docker_ampligone|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends mappy: ``2.24``
   :depends pandas: ``>=1.3``
   :depends parmap: ``1.5.*``
   :depends pysam: ``0.19.*``
   :depends python: ``>=3.8``
   :depends regex: ``>=2021.11.10``
   :depends rich: ``12.5.*``
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

      mamba install ampligone

   and update with::

      mamba update ampligone

  To create a new environment, run::

      mamba create --name myenvname ampligone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ampligone:<tag>

   (see `ampligone/tags`_ for valid values for ``<tag>``)


.. |downloads_ampligone| image:: https://img.shields.io/conda/dn/bioconda/ampligone.svg?style=flat
   :target: https://anaconda.org/bioconda/ampligone
   :alt:   (downloads)
.. |docker_ampligone| image:: https://quay.io/repository/biocontainers/ampligone/status
   :target: https://quay.io/repository/biocontainers/ampligone
.. _`ampligone/tags`: https://quay.io/repository/biocontainers/ampligone?tab=tags


.. raw:: html

    <script>
        var package = "ampligone";
        var versions = ["1.3.1","1.3.0","1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampligone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampligone/README.html