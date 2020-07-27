:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opentargets'
.. highlight: bash

opentargets
===========

.. conda:recipe:: opentargets
   :replaces_section_title:
   :noindex:

   Client for Open Targets REST API at targetvalidation.org

   :homepage: https://github.com/opentargets/opentargets-py
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`opentargets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opentargets/meta.yaml>`_

   


.. conda:package:: opentargets

   |downloads_opentargets| |docker_opentargets|

   :versions:
      
      

      ``3.1.16-1``,  ``3.1.16-0``

      

   
   :depends addict: 
   :depends cachecontrol: 
   :depends future: 
   :depends h2: 
   :depends hyper: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install opentargets

   and update with::

      conda update opentargets

   or use the docker container::

      docker pull quay.io/biocontainers/opentargets:<tag>

   (see `opentargets/tags`_ for valid values for ``<tag>``)


.. |downloads_opentargets| image:: https://img.shields.io/conda/dn/bioconda/opentargets.svg?style=flat
   :target: https://anaconda.org/bioconda/opentargets
   :alt:   (downloads)
.. |docker_opentargets| image:: https://quay.io/repository/biocontainers/opentargets/status
   :target: https://quay.io/repository/biocontainers/opentargets
.. _`opentargets/tags`: https://quay.io/repository/biocontainers/opentargets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opentargets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opentargets/README.html