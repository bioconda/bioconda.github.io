:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aplanat'
.. highlight: bash

aplanat
=======

.. conda:recipe:: aplanat
   :replaces_section_title:
   :noindex:

   Bokeh plotting API\, with bio\-focussed extras.

   :homepage: https://github.com/epi2me-labs/aplanat
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`aplanat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aplanat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aplanat/meta.yaml>`_

   


.. conda:package:: aplanat

   |downloads_aplanat| |docker_aplanat|

   :versions:
      
      

      ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``

      

   
   :depends bokeh: 
   :depends icon_font_to_png: 
   :depends markdown: 
   :depends numpy: 
   :depends pandas: ``>=1.0.3``
   :depends pillow: 
   :depends python: 
   :depends scipy: 
   :depends si-prefix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aplanat

   and update with::

      conda update aplanat

   or use the docker container::

      docker pull quay.io/biocontainers/aplanat:<tag>

   (see `aplanat/tags`_ for valid values for ``<tag>``)


.. |downloads_aplanat| image:: https://img.shields.io/conda/dn/bioconda/aplanat.svg?style=flat
   :target: https://anaconda.org/bioconda/aplanat
   :alt:   (downloads)
.. |docker_aplanat| image:: https://quay.io/repository/biocontainers/aplanat/status
   :target: https://quay.io/repository/biocontainers/aplanat
.. _`aplanat/tags`: https://quay.io/repository/biocontainers/aplanat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aplanat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aplanat/README.html