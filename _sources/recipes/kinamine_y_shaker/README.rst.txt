:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinamine_y_shaker'
.. highlight: bash

kinamine_y_shaker
=================

.. conda:recipe:: kinamine_y_shaker
   :replaces_section_title:
   :noindex:

   Kinamine is a tool to export all phospho\-peptides that were discovered by a mass spec search program

   :homepage: https://github.com/LaurieParkerLab/KinamineY-shaker
   :license: APACHE / Apache License 2.0
   :recipe: /`kinamine_y_shaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinamine_y_shaker/meta.yaml>`_
   :links: doi: :doi:`10.1021/ja507164a`

   Kinamine searches for phosphopeptides that were discovered by a mass spec search program \(in this case Peptide Shaker\) and outputs those peptides into a single file.  The peptides are centered on their phosphorylated amino acid.



.. conda:package:: kinamine_y_shaker

   |downloads_kinamine_y_shaker| |docker_kinamine_y_shaker|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install kinamine_y_shaker

   and update with::

      mamba update kinamine_y_shaker

  To create a new environment, run::

      mamba create --name myenvname kinamine_y_shaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kinamine_y_shaker:<tag>

   (see `kinamine_y_shaker/tags`_ for valid values for ``<tag>``)


.. |downloads_kinamine_y_shaker| image:: https://img.shields.io/conda/dn/bioconda/kinamine_y_shaker.svg?style=flat
   :target: https://anaconda.org/bioconda/kinamine_y_shaker
   :alt:   (downloads)
.. |docker_kinamine_y_shaker| image:: https://quay.io/repository/biocontainers/kinamine_y_shaker/status
   :target: https://quay.io/repository/biocontainers/kinamine_y_shaker
.. _`kinamine_y_shaker/tags`: https://quay.io/repository/biocontainers/kinamine_y_shaker?tab=tags


.. raw:: html

    <script>
        var package = "kinamine_y_shaker";
        var versions = ["1.0.0","1.0.0"];
    </script>





Notes
-----
Kinamine is a Java program originally written by Kevin Murray of UMN and updated by John Blankenhorn also of UMN



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinamine_y_shaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinamine_y_shaker/README.html