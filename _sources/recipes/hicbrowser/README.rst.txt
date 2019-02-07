.. title:: Package Recipe 'hicbrowser'
.. highlight: bash


hicbrowser
==========

.. conda:recipe:: hicbrowser
   :replaces_section_title:

   A simple web browser to visualize Hi\-C and other genomic tracks \(bigwig\, bed\, interactions\).

   :homepage: https://github.com/maxplanck-ie/HiCBrowser
   :license: GPL3
   :recipe: /`hicbrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicbrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicbrowser/meta.yaml>`_

   


.. conda:package:: hicbrowser

   |downloads_hicbrowser| |docker_hicbrowser|

   :versions: 1.0

   :depends: :conda:package:`bx-python`  :conda:package:`flask` >=0.10.1 :conda:package:`hicexplorer` >=1.7 :conda:package:`python` 2.7* 

   :required~by: |required_by_hicbrowser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicbrowser

   and update with::

      conda update hicbrowser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hicbrowser


.. |required_by_hicbrowser| conda:required_by:: hicbrowser
.. |downloads_hicbrowser| image:: https://img.shields.io/conda/dn/bioconda/hicbrowser.svg?style=flat
   :alt:   (downloads)
.. |docker_hicbrowser| image:: https://quay.io/repository/biocontainers/hicbrowser/status
   :target: https://quay.io/repository/biocontainers/hicbrowser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicbrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicbrowser/README.html

