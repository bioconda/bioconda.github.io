:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpclr'
.. highlight: bash

xpclr
=====

.. conda:recipe:: xpclr
   :replaces_section_title:

   Code to compute xp\-clr values to detect selection as per Chen\, Patterson \& Reich 2010.

   :homepage: https://github.com/hardingnj/xpclr
   :license: MIT / MIT
   :recipe: /`xpclr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr/meta.yaml>`_

   


.. conda:package:: xpclr

   |downloads_xpclr| |docker_xpclr|

   :versions: 1.1.1-0, 1.1-0
   
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.6
   :depends scikit-allel: >=1.2
   :depends scipy: 
   :depends zarr: >=2.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xpclr

   and update with::

      conda update xpclr

   or use the docker container::

      docker pull quay.io/biocontainers/xpclr:<tag>

   (see `xpclr/tags`_ for valid values for ``<tag>``)


.. |downloads_xpclr| image:: https://img.shields.io/conda/dn/bioconda/xpclr.svg?style=flat
   :target: https://anaconda.org/bioconda/xpclr
   :alt:   (downloads)
.. |docker_xpclr| image:: https://quay.io/repository/biocontainers/xpclr/status
   :target: https://quay.io/repository/biocontainers/xpclr
.. _`xpclr/tags`: https://quay.io/repository/biocontainers/xpclr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpclr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpclr/README.html