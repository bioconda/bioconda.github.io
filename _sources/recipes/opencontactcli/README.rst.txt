:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opencontactcli'
.. highlight: bash

opencontactcli
==============

.. conda:recipe:: opencontactcli
   :replaces_section_title:
   :noindex:

   Static contact mapping algorithm to identify potential peptide biomimetics from protein interaction partner structure files.

   :homepage: https://github.com/galaxyproteomics/OpenContact/tree/master
   :license: https://github.com/galaxyproteomics/OpenContact/blob/master/LICENSE_AGREEMENT/OpenContact_License.txt
   :recipe: /`opencontactcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opencontactcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opencontactcli/meta.yaml>`_

   


.. conda:package:: opencontactcli

   |downloads_opencontactcli| |docker_opencontactcli|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: ``>=7,<8.0a0``
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install opencontactcli

   and update with::

      conda update opencontactcli

   or use the docker container::

      docker pull quay.io/biocontainers/opencontactcli:<tag>

   (see `opencontactcli/tags`_ for valid values for ``<tag>``)


.. |downloads_opencontactcli| image:: https://img.shields.io/conda/dn/bioconda/opencontactcli.svg?style=flat
   :target: https://anaconda.org/bioconda/opencontactcli
   :alt:   (downloads)
.. |docker_opencontactcli| image:: https://quay.io/repository/biocontainers/opencontactcli/status
   :target: https://quay.io/repository/biocontainers/opencontactcli
.. _`opencontactcli/tags`: https://quay.io/repository/biocontainers/opencontactcli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opencontactcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opencontactcli/README.html