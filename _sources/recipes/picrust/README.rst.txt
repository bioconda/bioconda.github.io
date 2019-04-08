:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picrust'
.. highlight: bash

picrust
=======

.. conda:recipe:: picrust
   :replaces_section_title:

   PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

   :homepage: http://picrust.github.com
   :license: GPL-3.0
   :recipe: /`picrust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust/meta.yaml>`_

   


.. conda:package:: picrust

   |downloads_picrust| |docker_picrust|

   :versions: 1.1.3-2, 1.1.3-1, 1.1.3-0, 1.1.2-0, 1.1.1-0, 1.1.0-0, 1.0.1-0
   
   :depends biom-format: >=2.1.4,<2.2.0
   :depends cogent: >=1.5.3
   :depends future: >=0.16
   :depends h5py: >=1.7.0
   :depends numpy: >=1.5.1
   :depends python: >=2.7,<2.8.0a0
   :depends r-ape: >=5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picrust

   and update with::

      conda update picrust

   or use the docker container::

      docker pull quay.io/biocontainers/picrust:<tag>

   (see `picrust/tags`_ for valid values for ``<tag>``)


.. |downloads_picrust| image:: https://img.shields.io/conda/dn/bioconda/picrust.svg?style=flat
   :alt:   (downloads)
.. |docker_picrust| image:: https://quay.io/repository/biocontainers/picrust/status
   :target: https://quay.io/repository/biocontainers/picrust
.. _`picrust/tags`: https://quay.io/repository/biocontainers/picrust?tab=tags






Notes
-----
PICRUST requires a set of large pre\-calculated data files. PICRUST contains a script\, \"download\_picrust\_files.py\"\, which downloads the data in the proper location\, and which can be run after PICRUST has been installed.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picrust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picrust/README.html