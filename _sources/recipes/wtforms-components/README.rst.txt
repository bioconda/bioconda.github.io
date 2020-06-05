:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtforms-components'
.. highlight: bash

wtforms-components
==================

.. conda:recipe:: wtforms-components
   :replaces_section_title:
   :noindex:

   Additional fields\, validators and widgets for WTForms.

   :homepage: https://github.com/kvesteri/wtforms-components
   :license: BSD License
   :recipe: /`wtforms-components <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-components/meta.yaml>`_

   


.. conda:package:: wtforms-components

   |downloads_wtforms-components| |docker_wtforms-components|

   :versions:
      
      

      ``0.10.0-2``,  ``0.10.0-0``

      

   
   :depends intervals: ``>=0.6.0``
   :depends phonenumbers: 
   :depends python: 
   :depends six: ``>=1.4.1``
   :depends validators: ``>=0.5.0``
   :depends wtforms: ``>=1.0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wtforms-components

   and update with::

      conda update wtforms-components

   or use the docker container::

      docker pull quay.io/biocontainers/wtforms-components:<tag>

   (see `wtforms-components/tags`_ for valid values for ``<tag>``)


.. |downloads_wtforms-components| image:: https://img.shields.io/conda/dn/bioconda/wtforms-components.svg?style=flat
   :target: https://anaconda.org/bioconda/wtforms-components
   :alt:   (downloads)
.. |docker_wtforms-components| image:: https://quay.io/repository/biocontainers/wtforms-components/status
   :target: https://quay.io/repository/biocontainers/wtforms-components
.. _`wtforms-components/tags`: https://quay.io/repository/biocontainers/wtforms-components?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-components/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-components/README.html