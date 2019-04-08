:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ga4ghmongo'
.. highlight: bash

ga4ghmongo
==========

.. conda:recipe:: ga4ghmongo
   :replaces_section_title:

   A document based Variant database inspired by ga4gh Variants schema

   :homepage: https://github.com/Phelimb/ga4gh-mongo
   :license: MIT / MIT
   :recipe: /`ga4ghmongo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4ghmongo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ga4ghmongo/meta.yaml>`_

   


.. conda:package:: ga4ghmongo

   |downloads_ga4ghmongo| |docker_ga4ghmongo|

   :versions: 0.0.1.2-1, 0.0.1.2-0
   
   :depends mongoengine: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ga4ghmongo

   and update with::

      conda update ga4ghmongo

   or use the docker container::

      docker pull quay.io/biocontainers/ga4ghmongo:<tag>

   (see `ga4ghmongo/tags`_ for valid values for ``<tag>``)


.. |downloads_ga4ghmongo| image:: https://img.shields.io/conda/dn/bioconda/ga4ghmongo.svg?style=flat
   :alt:   (downloads)
.. |docker_ga4ghmongo| image:: https://quay.io/repository/biocontainers/ga4ghmongo/status
   :target: https://quay.io/repository/biocontainers/ga4ghmongo
.. _`ga4ghmongo/tags`: https://quay.io/repository/biocontainers/ga4ghmongo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ga4ghmongo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ga4ghmongo/README.html