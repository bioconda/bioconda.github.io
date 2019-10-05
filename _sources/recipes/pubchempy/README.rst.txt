:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubchempy'
.. highlight: bash

pubchempy
=========

.. conda:recipe:: pubchempy
   :replaces_section_title:

   A simple Python wrapper around the PubChem PUG REST API.

   :homepage: https://github.com/mcs07/PubChemPy
   :documentation: http://pubchempy.readthedocs.io/
   
   :license: MIT
   :recipe: /`pubchempy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubchempy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubchempy/meta.yaml>`_

   


.. conda:package:: pubchempy

   |downloads_pubchempy| |docker_pubchempy|

   :versions: 1.0.4-1, 1.0.4-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pubchempy

   and update with::

      conda update pubchempy

   or use the docker container::

      docker pull quay.io/biocontainers/pubchempy:<tag>

   (see `pubchempy/tags`_ for valid values for ``<tag>``)


.. |downloads_pubchempy| image:: https://img.shields.io/conda/dn/bioconda/pubchempy.svg?style=flat
   :target: https://anaconda.org/bioconda/pubchempy
   :alt:   (downloads)
.. |docker_pubchempy| image:: https://quay.io/repository/biocontainers/pubchempy/status
   :target: https://quay.io/repository/biocontainers/pubchempy
.. _`pubchempy/tags`: https://quay.io/repository/biocontainers/pubchempy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubchempy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubchempy/README.html