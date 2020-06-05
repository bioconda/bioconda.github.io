:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvpytor'
.. highlight: bash

cnvpytor
========

.. conda:recipe:: cnvpytor
   :replaces_section_title:
   :noindex:

   Python extension of CNVnator

   :homepage: https://github.com/abyzovlab/CNVpytor
   :license: MIT / MIT
   :recipe: /`cnvpytor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor/meta.yaml>`_

   


.. conda:package:: cnvpytor

   |downloads_cnvpytor| |docker_cnvpytor|

   :versions:
      
      

      ``1.0b3-1``,  ``1.0b3-0``

      

   
   :depends h5py: ``>=2.9``
   :depends matplotlib-base: ``>=2.2``
   :depends numpy: ``>=1.16``
   :depends pathlib: ``>=1.0``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3``
   :depends requests: ``>=2.0``
   :depends scipy: ``>=1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cnvpytor

   and update with::

      conda update cnvpytor

   or use the docker container::

      docker pull quay.io/biocontainers/cnvpytor:<tag>

   (see `cnvpytor/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvpytor| image:: https://img.shields.io/conda/dn/bioconda/cnvpytor.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvpytor
   :alt:   (downloads)
.. |docker_cnvpytor| image:: https://quay.io/repository/biocontainers/cnvpytor/status
   :target: https://quay.io/repository/biocontainers/cnvpytor
.. _`cnvpytor/tags`: https://quay.io/repository/biocontainers/cnvpytor?tab=tags






Notes
-----
The package comes with downloaded reference data\, such that \`cnvpytor \-download\` can be omitted.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvpytor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvpytor/README.html