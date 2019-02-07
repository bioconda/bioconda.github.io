.. title:: Package Recipe 'emperor'
.. highlight: bash


emperor
=======

.. conda:recipe:: emperor
   :replaces_section_title:

   Emperor a tool for the analysis and visualization of large microbial ecology datasets

   :homepage: http://github.com/biocore/emperor
   :license: BSD License
   :recipe: /`emperor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emperor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emperor/meta.yaml>`_

   


.. conda:package:: emperor

   |downloads_emperor| |docker_emperor|

   :versions: 0.9.51, 0.9.3

   :depends: :conda:package:`numpy` >=1.7 :conda:package:`python` 2.7* :conda:package:`qcli`  :conda:package:`scikit-bio` >=0.2.1,<0.3.0 

   :required~by: |required_by_emperor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emperor

   and update with::

      conda update emperor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/emperor


.. |required_by_emperor| conda:required_by:: emperor
.. |downloads_emperor| image:: https://img.shields.io/conda/dn/bioconda/emperor.svg?style=flat
   :alt:   (downloads)
.. |docker_emperor| image:: https://quay.io/repository/biocontainers/emperor/status
   :target: https://quay.io/repository/biocontainers/emperor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emperor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emperor/README.html

