:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'escher'
.. highlight: bash

escher
======

.. conda:recipe:: escher
   :replaces_section_title:
   :noindex:

   Escher\: A Web Application for Building\, Sharing\, and Embedding Data\-Rich Visualizations of Metabolic Pathways

   :homepage: https://escher.github.io
   :license: MIT / MIT
   :recipe: /`escher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/escher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/escher/meta.yaml>`_

   


.. conda:package:: escher

   |downloads_escher| |docker_escher|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :depends cobra: ``>=0.5.0``
   :depends ipywidgets: ``>=7.4.0,<8``
   :depends jinja2: ``>=2.7.3,<3``
   :depends jsonschema: ``>=3.0.1,<4``
   :depends pandas: ``>=0.18``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install escher

   and update with::

      conda update escher

   or use the docker container::

      docker pull quay.io/biocontainers/escher:<tag>

   (see `escher/tags`_ for valid values for ``<tag>``)


.. |downloads_escher| image:: https://img.shields.io/conda/dn/bioconda/escher.svg?style=flat
   :target: https://anaconda.org/bioconda/escher
   :alt:   (downloads)
.. |docker_escher| image:: https://quay.io/repository/biocontainers/escher/status
   :target: https://quay.io/repository/biocontainers/escher
.. _`escher/tags`: https://quay.io/repository/biocontainers/escher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/escher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/escher/README.html