.. title:: Package Recipe 'osra'
.. highlight: bash


osra
====

.. conda:recipe:: osra/2.0.1
   :replaces_section_title:

   OSRA is a utility designed to convert graphical representations of chemical structures\, as they appear in journal articles\, patent documents\, textbooks\, trade magazines etc.\, into SMILES or SDF.

   :homepage: http://cactus.nci.nih.gov/osra/
   :license: Simplified BSD Licence
   :recipe: /`osra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra>`_/`2.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra/2.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/osra/2.0.1/meta.yaml>`_

   


.. conda:package:: osra

   |downloads_osra| |docker_osra|

   :versions: 2.1.0, 2.0.1

   :depends: :conda:package:`gocr`  :conda:package:`graphicsmagick` >=1.3.26 :conda:package:`libgcc`  :conda:package:`ocrad`  :conda:package:`poppler`  :conda:package:`potrace`  :conda:package:`tclap`  :conda:package:`tesseract`  

   :required~by: |required_by_osra|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install osra

   and update with::

      conda update osra

   or use the docker container::

      docker pull quay.io/repository/biocontainers/osra


.. |required_by_osra| conda:required_by:: osra
.. |downloads_osra| image:: https://img.shields.io/conda/dn/bioconda/osra.svg?style=flat
   :alt:   (downloads)
.. |docker_osra| image:: https://quay.io/repository/biocontainers/osra/status
   :target: https://quay.io/repository/biocontainers/osra







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/osra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/osra/README.html

