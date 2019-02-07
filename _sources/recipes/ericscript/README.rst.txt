.. title:: Package Recipe 'ericscript'
.. highlight: bash


ericscript
==========

.. conda:recipe:: ericscript
   :replaces_section_title:

   EricScript is a computational framework for the discovery of gene fusions in paired end RNA\-seq data. It is able to generate synthetic gene fusions by using the EricScript simulator and calculate a number of statistical measures for evaluating gene fusion detection methods performance with EricScript CalcStats.

   :homepage: https://sites.google.com/site/bioericscript
   :license: GPL3 / GPL3
   :recipe: /`ericscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript/meta.yaml>`_

   


.. conda:package:: ericscript

   |downloads_ericscript| |docker_ericscript|

   :versions: 0.5.5

   :depends: :conda:package:`bedtools`  :conda:package:`blat`  :conda:package:`bwa`  :conda:package:`perl`  :conda:package:`r-ada`  :conda:package:`r-base`  :conda:package:`samtools` 0.1.19.* :conda:package:`seqtk`  

   :required~by: |required_by_ericscript|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ericscript

   and update with::

      conda update ericscript

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ericscript


.. |required_by_ericscript| conda:required_by:: ericscript
.. |downloads_ericscript| image:: https://img.shields.io/conda/dn/bioconda/ericscript.svg?style=flat
   :alt:   (downloads)
.. |docker_ericscript| image:: https://quay.io/repository/biocontainers/ericscript/status
   :target: https://quay.io/repository/biocontainers/ericscript







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ericscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ericscript/README.html

