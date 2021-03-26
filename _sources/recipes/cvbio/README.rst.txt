:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cvbio'
.. highlight: bash

cvbio
=====

.. conda:recipe:: cvbio
   :replaces_section_title:
   :noindex:

   Tools for working with genomic and sequencing data\, including multi\-species read disambiguation

   :homepage: https://github.com/clintval/cvbio
   :license: MIT / MIT
   :recipe: /`cvbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvbio/meta.yaml>`_

   


.. conda:package:: cvbio

   |downloads_cvbio| |docker_cvbio|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cvbio

   and update with::

      conda update cvbio

   or use the docker container::

      docker pull quay.io/biocontainers/cvbio:<tag>

   (see `cvbio/tags`_ for valid values for ``<tag>``)


.. |downloads_cvbio| image:: https://img.shields.io/conda/dn/bioconda/cvbio.svg?style=flat
   :target: https://anaconda.org/bioconda/cvbio
   :alt:   (downloads)
.. |docker_cvbio| image:: https://quay.io/repository/biocontainers/cvbio/status
   :target: https://quay.io/repository/biocontainers/cvbio
.. _`cvbio/tags`: https://quay.io/repository/biocontainers/cvbio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cvbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cvbio/README.html