:orphan:  .. only available via index, not via toctree

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

   :versions: 0.5.5-3, 0.5.5-2, 0.5.5-1, 0.5.5-0
   
   :depends bedtools: 
   :depends blat: 
   :depends bwa: 
   :depends perl: 
   :depends r-ada: 
   :depends r-base: 
   :depends samtools: 0.1.19.*
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ericscript

   and update with::

      conda update ericscript

   or use the docker container::

      docker pull quay.io/biocontainers/ericscript:<tag>

   (see `ericscript/tags`_ for valid values for ``<tag>``)


.. |downloads_ericscript| image:: https://img.shields.io/conda/dn/bioconda/ericscript.svg?style=flat
   :target: https://anaconda.org/bioconda/ericscript
   :alt:   (downloads)
.. |docker_ericscript| image:: https://quay.io/repository/biocontainers/ericscript/status
   :target: https://quay.io/repository/biocontainers/ericscript
.. _`ericscript/tags`: https://quay.io/repository/biocontainers/ericscript?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ericscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ericscript/README.html