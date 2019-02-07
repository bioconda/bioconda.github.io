.. title:: Package Recipe 'multigps'
.. highlight: bash


multigps
========

.. conda:recipe:: multigps/0.74
   :replaces_section_title:

   MultiGPS is a framework for analyzing collections of multi\-condition ChIP\-seq datasets and characterizing differential binding events between conditions.

   :homepage: http://mahonylab.org/software/multigps/
   :license: MIT
   :recipe: /`multigps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps>`_/`0.74 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps/0.74>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multigps/0.74/meta.yaml>`_

   


.. conda:package:: multigps

   |downloads_multigps| |docker_multigps|

   :versions: 0.74, 0.73, 0.72, 0.5

   :depends: :conda:package:`bioconductor-edger`  :conda:package:`meme` >=4.11.2 :conda:package:`openjdk` >=8 :conda:package:`r-base`  

   :required~by: |required_by_multigps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multigps

   and update with::

      conda update multigps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/multigps


.. |required_by_multigps| conda:required_by:: multigps
.. |downloads_multigps| image:: https://img.shields.io/conda/dn/bioconda/multigps.svg?style=flat
   :alt:   (downloads)
.. |docker_multigps| image:: https://quay.io/repository/biocontainers/multigps/status
   :target: https://quay.io/repository/biocontainers/multigps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multigps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multigps/README.html

