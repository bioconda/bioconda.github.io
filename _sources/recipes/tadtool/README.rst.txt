.. title:: Package Recipe 'tadtool'
.. highlight: bash


tadtool
=======

.. conda:recipe:: tadtool
   :replaces_section_title:

   TADtool is an interactive tool for the identification of meaningful parameters in TAD\-calling algorithms for Hi\-C data

   :homepage: https://github.com/vaquerizaslab/tadtool
   :license: MIT / MIT License
   :recipe: /`tadtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadtool/meta.yaml>`_

   


.. conda:package:: tadtool

   |downloads_tadtool| |docker_tadtool|

   :versions: 0.77, 0.75

   :depends: :conda:package:`future`  :conda:package:`matplotlib`  :conda:package:`numpy` >=1.9.0 :conda:package:`progressbar2`  :conda:package:`python`  

   :required~by: |required_by_tadtool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadtool

   and update with::

      conda update tadtool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tadtool


.. |required_by_tadtool| conda:required_by:: tadtool
.. |downloads_tadtool| image:: https://img.shields.io/conda/dn/bioconda/tadtool.svg?style=flat
   :alt:   (downloads)
.. |docker_tadtool| image:: https://quay.io/repository/biocontainers/tadtool/status
   :target: https://quay.io/repository/biocontainers/tadtool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadtool/README.html

