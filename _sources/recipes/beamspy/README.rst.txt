:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beamspy'
.. highlight: bash

beamspy
=======

.. conda:recipe:: beamspy
   :replaces_section_title:
   :noindex:

   BEAMSpy \- Birmingham mEtabolite Annotation for Mass Spectrometry \(Python package\)

   :homepage: https://github.com/computational-metabolomics/beamspy
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`beamspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beamspy/meta.yaml>`_

   


.. conda:package:: beamspy

   |downloads_beamspy| |docker_beamspy|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends biopython: ``<=1.78``
   :depends matplotlib: 
   :depends networkx: ``<=2.5``
   :depends numpy: 
   :depends pandas: 
   :depends pyside2: ``5.13.1``
   :depends pyteomics: ``<=4.4.1``
   :depends python: ``>3.7,<3.9``
   :depends requests: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beamspy

   and update with::

      conda update beamspy

   or use the docker container::

      docker pull quay.io/biocontainers/beamspy:<tag>

   (see `beamspy/tags`_ for valid values for ``<tag>``)


.. |downloads_beamspy| image:: https://img.shields.io/conda/dn/bioconda/beamspy.svg?style=flat
   :target: https://anaconda.org/bioconda/beamspy
   :alt:   (downloads)
.. |docker_beamspy| image:: https://quay.io/repository/biocontainers/beamspy/status
   :target: https://quay.io/repository/biocontainers/beamspy
.. _`beamspy/tags`: https://quay.io/repository/biocontainers/beamspy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beamspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beamspy/README.html