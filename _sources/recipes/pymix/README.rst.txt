.. title:: Package Recipe 'pymix'
.. highlight: bash


pymix
=====

.. conda:recipe:: pymix
   :replaces_section_title:

   Python mixture package

   :homepage: http://www.pymix.org/pymix
   :license: GPL2
   :recipe: /`pymix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix/meta.yaml>`_

   


.. conda:package:: pymix

   |downloads_pymix| |docker_pymix|

   :versions: 0.8

   :depends: :conda:package:`ghmm`  :conda:package:`glib`  :conda:package:`gsl`  :conda:package:`libgcc`  :conda:package:`matplotlib` >=1.1.0,!=1.4.2,<1.5.0 :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`xorg-libsm`  :conda:package:`xorg-libxau`  :conda:package:`xorg-libxdmcp`  :conda:package:`xorg-libxext`  :conda:package:`xorg-libxrender`  

   :required~by: |required_by_pymix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymix

   and update with::

      conda update pymix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymix


.. |required_by_pymix| conda:required_by:: pymix
.. |downloads_pymix| image:: https://img.shields.io/conda/dn/bioconda/pymix.svg?style=flat
   :alt:   (downloads)
.. |docker_pymix| image:: https://quay.io/repository/biocontainers/pymix/status
   :target: https://quay.io/repository/biocontainers/pymix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymix/README.html

