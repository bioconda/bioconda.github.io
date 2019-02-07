.. title:: Package Recipe 'rmats2sashimiplot'
.. highlight: bash


rmats2sashimiplot
=================

.. conda:recipe:: rmats2sashimiplot
   :replaces_section_title:

   rmats2sashimiplot is a tool that generates sahimi plots from rMATS outputs.

   :homepage: https://github.com/Xinglab/rmats2sashimiplot
   :license: GPL / GPL-2.0
   :recipe: /`rmats2sashimiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot/meta.yaml>`_

   


.. conda:package:: rmats2sashimiplot

   |downloads_rmats2sashimiplot| |docker_rmats2sashimiplot|

   :versions: 2.0.3, 2.0.0

   :depends: :conda:package:`matplotlib`  :conda:package:`pysam` ==0.9.0 :conda:package:`python` ==2.6*|2.7* :conda:package:`samtools` ==1.3.1 :conda:package:`scipy`  

   :required~by: |required_by_rmats2sashimiplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmats2sashimiplot

   and update with::

      conda update rmats2sashimiplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rmats2sashimiplot


.. |required_by_rmats2sashimiplot| conda:required_by:: rmats2sashimiplot
.. |downloads_rmats2sashimiplot| image:: https://img.shields.io/conda/dn/bioconda/rmats2sashimiplot.svg?style=flat
   :alt:   (downloads)
.. |docker_rmats2sashimiplot| image:: https://quay.io/repository/biocontainers/rmats2sashimiplot/status
   :target: https://quay.io/repository/biocontainers/rmats2sashimiplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats2sashimiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats2sashimiplot/README.html

