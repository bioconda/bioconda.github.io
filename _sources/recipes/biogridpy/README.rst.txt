.. title:: Package Recipe 'biogridpy'
.. highlight: bash


biogridpy
=========

.. conda:recipe:: biogridpy
   :replaces_section_title:

   Python client for the BioGRID REST API webservice

   :homepage: https://github.com/arvkevi/biogridpy
   :license: MIT / MIT
   :recipe: /`biogridpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biogridpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biogridpy/meta.yaml>`_

   


.. conda:package:: biogridpy

   |downloads_biogridpy| |docker_biogridpy|

   :versions: 0.1.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_biogridpy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biogridpy

   and update with::

      conda update biogridpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biogridpy


.. |required_by_biogridpy| conda:required_by:: biogridpy
.. |downloads_biogridpy| image:: https://img.shields.io/conda/dn/bioconda/biogridpy.svg?style=flat
   :alt:   (downloads)
.. |docker_biogridpy| image:: https://quay.io/repository/biocontainers/biogridpy/status
   :target: https://quay.io/repository/biocontainers/biogridpy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biogridpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biogridpy/README.html

