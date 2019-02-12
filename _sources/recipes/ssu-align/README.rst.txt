:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssu-align'
.. highlight: bash

ssu-align
=========

.. conda:recipe:: ssu-align
   :replaces_section_title:

   SSU\-ALIGN\: structural alignment of SSU rRNA sequences

   :homepage: http://eddylab.org/software/ssu-align/
   :license: BSD
   :recipe: /`ssu-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssu-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssu-align/meta.yaml>`_

   


.. conda:package:: ssu-align

   |downloads_ssu-align| |docker_ssu-align|

   :versions: 0.1.1-1, 0.1.1-0
   
   :depends libgcc-ng: >=4.9
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ssu-align

   and update with::

      conda update ssu-align

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ssu-align:<tag>

   (see `ssu-align/tags`_ for valid values for ``<tag>``)


.. |downloads_ssu-align| image:: https://img.shields.io/conda/dn/bioconda/ssu-align.svg?style=flat
   :alt:   (downloads)
.. |docker_ssu-align| image:: https://quay.io/repository/biocontainers/ssu-align/status
   :target: https://quay.io/repository/biocontainers/ssu-align
.. _`ssu-align/tags`: https://quay.io/repository/biocontainers/ssu-align?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssu-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssu-align/README.html