:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tendo'
.. highlight: bash

tendo
=====

.. conda:recipe:: tendo
   :replaces_section_title:
   :noindex:

   Tendo is a python module that adds basic functionality that is not \(yet\) provided by Python.

   :homepage: https://github.com/phom9/tendo
   :documentation: https://pythonhosted.org/tendo/
   
   :license: BSD / BSD
   :recipe: /`tendo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tendo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tendo/meta.yaml>`_

   


.. conda:package:: tendo

   |downloads_tendo| |docker_tendo|

   :versions:
      
      

      ``0.2.15-0``

      

   
   :depends pbr: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tendo

   and update with::

      conda update tendo

   or use the docker container::

      docker pull quay.io/biocontainers/tendo:<tag>

   (see `tendo/tags`_ for valid values for ``<tag>``)


.. |downloads_tendo| image:: https://img.shields.io/conda/dn/bioconda/tendo.svg?style=flat
   :target: https://anaconda.org/bioconda/tendo
   :alt:   (downloads)
.. |docker_tendo| image:: https://quay.io/repository/biocontainers/tendo/status
   :target: https://quay.io/repository/biocontainers/tendo
.. _`tendo/tags`: https://quay.io/repository/biocontainers/tendo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tendo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tendo/README.html