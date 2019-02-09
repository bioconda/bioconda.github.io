.. title:: Package Recipe 'hapflk'
.. highlight: bash


hapflk
======

.. conda:recipe:: hapflk
   :replaces_section_title:

   hapflk is a software implementing the hapFLK and FLK tests for the detection of selection signatures based on multiple population genotyping data.

   :homepage: https://forge-dga.jouy.inra.fr/projects/hapflk
   :license: GPLv3
   :recipe: /`hapflk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapflk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapflk/meta.yaml>`_

   


.. conda:package:: hapflk

   |downloads_hapflk| |docker_hapflk|

   :versions: 1.3.0

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_hapflk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hapflk

   and update with::

      conda update hapflk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hapflk


.. |required_by_hapflk| conda:required_by:: hapflk
.. |downloads_hapflk| image:: https://img.shields.io/conda/dn/bioconda/hapflk.svg?style=flat
   :alt:   (downloads)
.. |docker_hapflk| image:: https://quay.io/repository/biocontainers/hapflk/status
   :target: https://quay.io/repository/biocontainers/hapflk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapflk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapflk/README.html

