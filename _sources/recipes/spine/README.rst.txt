:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spine'
.. highlight: bash

spine
=====

.. conda:recipe:: spine
   :replaces_section_title:

   Identification of conserved nucleotide core genome of bacteria and other small genome organisms

   :homepage: https://github.com/egonozer/Spine
   :license: GPL-3.0
   :recipe: /`spine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine/meta.yaml>`_

   


.. conda:package:: spine

   |downloads_spine| |docker_spine|

   :versions: 0.2.2-1, 0.2.2-0
   
   :depends mummer: >=3.22
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-file-which: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spine

   and update with::

      conda update spine

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spine:<tag>

   (see `spine/tags`_ for valid values for ``<tag>``)


.. |downloads_spine| image:: https://img.shields.io/conda/dn/bioconda/spine.svg?style=flat
   :alt:   (downloads)
.. |docker_spine| image:: https://quay.io/repository/biocontainers/spine/status
   :target: https://quay.io/repository/biocontainers/spine
.. _`spine/tags`: https://quay.io/repository/biocontainers/spine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spine/README.html