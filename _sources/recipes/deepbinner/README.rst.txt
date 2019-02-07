.. title:: Package Recipe 'deepbinner'
.. highlight: bash


deepbinner
==========

.. conda:recipe:: deepbinner
   :replaces_section_title:

   A signal\-level demultiplexer for Oxford Nanopore reads.

   :homepage: https://github.com/rrwick/Deepbinner
   :license: GPL3
   :recipe: /`deepbinner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbinner/meta.yaml>`_

   


.. conda:package:: deepbinner

   |downloads_deepbinner| |docker_deepbinner|

   :versions: 0.2.0, 0.1.2

   :depends: :conda:package:`h5py`  :conda:package:`keras`  :conda:package:`matplotlib`  :conda:package:`noise`  :conda:package:`numpy`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`tensorflow`  

   :required~by: |required_by_deepbinner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepbinner

   and update with::

      conda update deepbinner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deepbinner


.. |required_by_deepbinner| conda:required_by:: deepbinner
.. |downloads_deepbinner| image:: https://img.shields.io/conda/dn/bioconda/deepbinner.svg?style=flat
   :alt:   (downloads)
.. |docker_deepbinner| image:: https://quay.io/repository/biocontainers/deepbinner/status
   :target: https://quay.io/repository/biocontainers/deepbinner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbinner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbinner/README.html

