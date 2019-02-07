.. title:: Package Recipe 'regional'
.. highlight: bash


regional
========

.. conda:recipe:: regional
   :replaces_section_title:

   simple manipulation and display of spatial regions in python

   :homepage: https://github.com/freeman-lab/regional
   :license: MIT
   :recipe: /`regional <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regional>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regional/meta.yaml>`_

   


.. conda:package:: regional

   |downloads_regional| |docker_regional|

   :versions: 1.1.2

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy` !=1.13.0 :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_regional|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install regional

   and update with::

      conda update regional

   or use the docker container::

      docker pull quay.io/repository/biocontainers/regional


.. |required_by_regional| conda:required_by:: regional
.. |downloads_regional| image:: https://img.shields.io/conda/dn/bioconda/regional.svg?style=flat
   :alt:   (downloads)
.. |docker_regional| image:: https://quay.io/repository/biocontainers/regional/status
   :target: https://quay.io/repository/biocontainers/regional







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regional/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regional/README.html

