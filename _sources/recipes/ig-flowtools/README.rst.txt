.. title:: Package Recipe 'ig-flowtools'
.. highlight: bash


ig-flowtools
============

.. conda:recipe:: ig-flowtools
   :replaces_section_title:

   set of tools for flow cytometry analysis

   :homepage: https://github.com/ImmPortDB/ig-flowtools
   :license: BSD / BSD License
   :recipe: /`ig-flowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools/meta.yaml>`_

   


.. conda:package:: ig-flowtools

   |downloads_ig-flowtools| |docker_ig-flowtools|

   :versions: 2.0.2, 2.0.1, 2.0.0, 1.4.1, 1.4.0, 1.3.0, 1.0.0

   :depends: :conda:package:`bioconductor-flowai`  :conda:package:`bioconductor-flowcl`  :conda:package:`bioconductor-flowcore`  :conda:package:`bioconductor-flowdensity`  :conda:package:`bioconductor-flowsom`  :conda:package:`bioconductor-flowviz`  :conda:package:`bioconductor-ggcyto`  :conda:package:`clustergrammer`  :conda:package:`flock`  :conda:package:`jinja2`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`r` 3.3.2* :conda:package:`scipy`  

   :required~by: |required_by_ig-flowtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ig-flowtools

   and update with::

      conda update ig-flowtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ig-flowtools


.. |required_by_ig-flowtools| conda:required_by:: ig-flowtools
.. |downloads_ig-flowtools| image:: https://img.shields.io/conda/dn/bioconda/ig-flowtools.svg?style=flat
   :alt:   (downloads)
.. |docker_ig-flowtools| image:: https://quay.io/repository/biocontainers/ig-flowtools/status
   :target: https://quay.io/repository/biocontainers/ig-flowtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-flowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-flowtools/README.html

