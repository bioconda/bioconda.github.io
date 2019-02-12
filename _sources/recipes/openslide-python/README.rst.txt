.. title:: Package Recipe 'openslide-python'
.. highlight: bash


openslide-python
================

.. conda:recipe:: openslide-python
   :replaces_section_title:

   Python interface to OpenSlide

   :homepage: http://openslide.org/
   :license: LGPL / GNU Lesser General Public v2 (LGPLv2)
   :recipe: /`openslide-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openslide-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openslide-python/meta.yaml>`_

   


.. conda:package:: openslide-python

   |downloads_openslide-python| |docker_openslide-python|

   :versions: 1.1.1

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`openslide`  :conda:package:`pillow`  :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_openslide-python|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openslide-python

   and update with::

      conda update openslide-python

   or use the docker container::

      docker pull quay.io/repository/biocontainers/openslide-python


.. |required_by_openslide-python| conda:required_by:: openslide-python
.. |downloads_openslide-python| image:: https://img.shields.io/conda/dn/bioconda/openslide-python.svg?style=flat
   :alt:   (downloads)
.. |docker_openslide-python| image:: https://quay.io/repository/biocontainers/openslide-python/status
   :target: https://quay.io/repository/biocontainers/openslide-python







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openslide-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openslide-python/README.html

