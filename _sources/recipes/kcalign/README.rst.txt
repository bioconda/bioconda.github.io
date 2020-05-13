:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kcalign'
.. highlight: bash

kcalign
=======

.. conda:recipe:: kcalign
   :replaces_section_title:

   Kalgin\-based codon\-aware aligner for multiple sequences

   :homepage: https://github.com/davebx/kc-align
   :documentation: https://github.com/davebx/kc-align/blob/master/README.md
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`kcalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kcalign/meta.yaml>`_

   


.. conda:package:: kcalign

   |downloads_kcalign| |docker_kcalign|

   :versions: 0.6-0, 0.5.16-0, 0.5.15-0, 0.5.14-0, 0.5.13-1, 0.5.13-0, 0.5.11-0, 0.5.9-0, 0.5.8-0, 0.5.7-0, 0.5.6-0, 0.5.4-0, 0.5.3-0, 0.5.2-0, 0.5-0
   
   :depends biopython: 
   :depends kalign3: 
   :depends mafft: 
   :depends python: >=3.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kcalign

   and update with::

      conda update kcalign

   or use the docker container::

      docker pull quay.io/biocontainers/kcalign:<tag>

   (see `kcalign/tags`_ for valid values for ``<tag>``)


.. |downloads_kcalign| image:: https://img.shields.io/conda/dn/bioconda/kcalign.svg?style=flat
   :target: https://anaconda.org/bioconda/kcalign
   :alt:   (downloads)
.. |docker_kcalign| image:: https://quay.io/repository/biocontainers/kcalign/status
   :target: https://quay.io/repository/biocontainers/kcalign
.. _`kcalign/tags`: https://quay.io/repository/biocontainers/kcalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kcalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kcalign/README.html