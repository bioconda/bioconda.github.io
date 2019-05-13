:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdock'
.. highlight: bash

rdock
=====

.. conda:recipe:: rdock
   :replaces_section_title:

   A Fast\, Versatile and Open Source Program for Docking Ligands to Proteins and Nucleic Acids

   :homepage: http://rdock.sourceforge.net/
   :license: LGPLv3
   :recipe: /`rdock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdock/meta.yaml>`_

   


.. conda:package:: rdock

   |downloads_rdock| |docker_rdock|

   :versions: 2013.1-1, 2013.1-0
   
   :depends libgcc: 
   :depends numpy: 
   :depends openbabel: 
   :depends perl: 5.22.0*
   :depends popt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdock

   and update with::

      conda update rdock

   or use the docker container::

      docker pull quay.io/biocontainers/rdock:<tag>

   (see `rdock/tags`_ for valid values for ``<tag>``)


.. |downloads_rdock| image:: https://img.shields.io/conda/dn/bioconda/rdock.svg?style=flat
   :target: https://anaconda.org/bioconda/rdock
   :alt:   (downloads)
.. |docker_rdock| image:: https://quay.io/repository/biocontainers/rdock/status
   :target: https://quay.io/repository/biocontainers/rdock
.. _`rdock/tags`: https://quay.io/repository/biocontainers/rdock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdock/README.html