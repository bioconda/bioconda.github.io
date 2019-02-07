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

   :versions: 1.1.1, 1.1

   :depends: :conda:package:`h5py`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.6 :conda:package:`scikit-allel` >=1.2 :conda:package:`scipy`  :conda:package:`zarr` >=2.2 

   :required~by: |required_by_xpclr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xpclr

   and update with::

      conda update xpclr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xpclr


.. |required_by_xpclr| conda:required_by:: xpclr
.. |downloads_xpclr| image:: https://img.shields.io/conda/dn/bioconda/xpclr.svg?style=flat
   :alt:   (downloads)
.. |docker_xpclr| image:: https://quay.io/repository/biocontainers/xpclr/status
   :target: https://quay.io/repository/biocontainers/xpclr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpclr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpclr/README.html

