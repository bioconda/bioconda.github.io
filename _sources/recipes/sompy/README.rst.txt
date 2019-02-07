.. title:: Package Recipe 'sompy'
.. highlight: bash


sompy
=====

.. conda:recipe:: sompy
   :replaces_section_title:

   Numpy based SOM Library.

   :homepage: https://github.com/ttlg/sompy
   :license: MIT / MIT
   :recipe: /`sompy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sompy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sompy/meta.yaml>`_

   


.. conda:package:: sompy

   |downloads_sompy| |docker_sompy|

   :versions: 0.1.1

   :depends: :conda:package:`matplotlib`  :conda:package:`numexpr` >=2.5 :conda:package:`numpy` >=1.7 :conda:package:`python` <3 :conda:package:`scikit-learn` >=0.16 :conda:package:`scipy` >=0.9 

   :required~by: |required_by_sompy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sompy

   and update with::

      conda update sompy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sompy


.. |required_by_sompy| conda:required_by:: sompy
.. |downloads_sompy| image:: https://img.shields.io/conda/dn/bioconda/sompy.svg?style=flat
   :alt:   (downloads)
.. |docker_sompy| image:: https://quay.io/repository/biocontainers/sompy/status
   :target: https://quay.io/repository/biocontainers/sompy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sompy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sompy/README.html

