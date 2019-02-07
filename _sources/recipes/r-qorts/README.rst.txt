.. title:: Package Recipe 'r-qorts'
.. highlight: bash


r-qorts
=======

.. conda:recipe:: r-qorts
   :replaces_section_title:

   The QoRTs software package is a fast\, efficient\, and portable multifunction toolkit designed to assist in the analysis\, quality control\, and data management of RNA\-Seq datasets.

   :homepage: https://github.com/hartleys/QoRTs
   :license: Public Domain
   :recipe: /`r-qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qorts/meta.yaml>`_

   


.. conda:package:: r-qorts

   |downloads_r-qorts| |docker_r-qorts|

   :versions: 1.3.0

   :depends: :conda:package:`r-base` >=3.0.2 

   :required~by: |required_by_r-qorts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qorts

   and update with::

      conda update r-qorts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-qorts


.. |required_by_r-qorts| conda:required_by:: r-qorts
.. |downloads_r-qorts| image:: https://img.shields.io/conda/dn/bioconda/r-qorts.svg?style=flat
   :alt:   (downloads)
.. |docker_r-qorts| image:: https://quay.io/repository/biocontainers/r-qorts/status
   :target: https://quay.io/repository/biocontainers/r-qorts






Notes
-----
This package is a requirement of the main QoRTs package\; \"qorts\".



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qorts/README.html

