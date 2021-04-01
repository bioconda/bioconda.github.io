:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidcli'
.. highlight: bash

r-acidcli
=========

.. conda:recipe:: r-acidcli
   :replaces_section_title:
   :noindex:

   Interative R command line interface toolkit for Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidcli/
   :developer docs: https://github.com/acidgenomics/r-acidcli
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidcli/meta.yaml>`_

   


.. conda:package:: r-acidcli

   |downloads_r-acidcli| |docker_r-acidcli|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cli: ``>=2.3``
   :depends r-crayon: ``>=1.4``
   :depends r-goalie: ``>=0.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidcli

   and update with::

      conda update r-acidcli

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidcli:<tag>

   (see `r-acidcli/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidcli| image:: https://img.shields.io/conda/dn/bioconda/r-acidcli.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidcli
   :alt:   (downloads)
.. |docker_r-acidcli| image:: https://quay.io/repository/biocontainers/r-acidcli/status
   :target: https://quay.io/repository/biocontainers/r-acidcli
.. _`r-acidcli/tags`: https://quay.io/repository/biocontainers/r-acidcli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidcli/README.html