.. title:: Package Recipe 'deblur'
.. highlight: bash


deblur
======

.. conda:recipe:: deblur
   :replaces_section_title:

   Deblur is a greedy deconvolution algorithm based on known read error profiles.

   :homepage: https://github.com/biocore/deblur
   :license: BSD license
   :recipe: /`deblur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur/meta.yaml>`_

   


.. conda:package:: deblur

   |downloads_deblur| |docker_deblur|

   :versions: 1.1.0, 1.0.4

   :depends: :conda:package:`biom-format`  :conda:package:`click`  :conda:package:`h5py`  :conda:package:`mafft` 7.310 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scikit-bio` >=0.5.0 :conda:package:`sortmerna` 2.0 :conda:package:`vsearch` >=2.0.3 

   :required~by: |required_by_deblur|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deblur

   and update with::

      conda update deblur

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deblur


.. |required_by_deblur| conda:required_by:: deblur
.. |downloads_deblur| image:: https://img.shields.io/conda/dn/bioconda/deblur.svg?style=flat
   :alt:   (downloads)
.. |docker_deblur| image:: https://quay.io/repository/biocontainers/deblur/status
   :target: https://quay.io/repository/biocontainers/deblur







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deblur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deblur/README.html

