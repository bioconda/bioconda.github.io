.. title:: Package Recipe 'pygenometracks'
.. highlight: bash


pygenometracks
==============

.. conda:recipe:: pygenometracks
   :replaces_section_title:

   Standalone program and library to plot beautiful genome browser tracks.

   :homepage: https://github.com/deeptools/pyGenomeTracks/
   :license: GPL3
   :recipe: /`pygenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks/meta.yaml>`_

   


.. conda:package:: pygenometracks

   |downloads_pygenometracks| |docker_pygenometracks|

   :versions: 2.1, 2.0, 1.0, 0.1

   :depends: :conda:package:`configparser` >=3.5.0 :conda:package:`future` >=0.16.0 :conda:package:`hicexplorer` >=2.1.4 :conda:package:`intervaltree` >=2.1.0 :conda:package:`matplotlib` 2.1.* :conda:package:`numpy` 1.13.* :conda:package:`pybigwig` >=0.3.4 :conda:package:`pytest`  :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_pygenometracks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygenometracks

   and update with::

      conda update pygenometracks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pygenometracks


.. |required_by_pygenometracks| conda:required_by:: pygenometracks
.. |downloads_pygenometracks| image:: https://img.shields.io/conda/dn/bioconda/pygenometracks.svg?style=flat
   :alt:   (downloads)
.. |docker_pygenometracks| image:: https://quay.io/repository/biocontainers/pygenometracks/status
   :target: https://quay.io/repository/biocontainers/pygenometracks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenometracks/README.html

