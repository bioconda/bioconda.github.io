:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fido'
.. highlight: bash

fido
====

.. conda:recipe:: fido
   :replaces_section_title:
   :noindex:

   A method for protein identification in MS\/MS proteomics. Think of it like a protein delivery dog. You bring it the scored matches between peptides and spectra\, and it fetches a list of proteins ranked by posterior probability by doing clever tricks.

   :homepage: https://noble.gs.washington.edu/proj/fido/
   :license: MIT license
   :recipe: /`fido <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fido/meta.yaml>`_

   


.. conda:package:: fido

   |downloads_fido| |docker_fido|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fido

   and update with::

      conda update fido

   or use the docker container::

      docker pull quay.io/biocontainers/fido:<tag>

   (see `fido/tags`_ for valid values for ``<tag>``)


.. |downloads_fido| image:: https://img.shields.io/conda/dn/bioconda/fido.svg?style=flat
   :target: https://anaconda.org/bioconda/fido
   :alt:   (downloads)
.. |docker_fido| image:: https://quay.io/repository/biocontainers/fido/status
   :target: https://quay.io/repository/biocontainers/fido
.. _`fido/tags`: https://quay.io/repository/biocontainers/fido?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fido/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fido/README.html