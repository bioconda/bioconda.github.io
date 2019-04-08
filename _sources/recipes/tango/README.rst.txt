:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tango'
.. highlight: bash

tango
=====

.. conda:recipe:: tango
   :replaces_section_title:

   Assign taxonomy to metagenomic contigs using blastx searches

   :homepage: https://github.com/johnne/tango
   :license: GPL3
   :recipe: /`tango <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tango>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tango/meta.yaml>`_

   


.. conda:package:: tango

   |downloads_tango| |docker_tango|

   :versions: 0.4.2-0, 0.3.1-0, 0.3.0-0, 0.2.0-0
   
   :depends biopython: 
   :depends diamond: 
   :depends ete3: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >3
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tango

   and update with::

      conda update tango

   or use the docker container::

      docker pull quay.io/biocontainers/tango:<tag>

   (see `tango/tags`_ for valid values for ``<tag>``)


.. |downloads_tango| image:: https://img.shields.io/conda/dn/bioconda/tango.svg?style=flat
   :alt:   (downloads)
.. |docker_tango| image:: https://quay.io/repository/biocontainers/tango/status
   :target: https://quay.io/repository/biocontainers/tango
.. _`tango/tags`: https://quay.io/repository/biocontainers/tango?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tango/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tango/README.html