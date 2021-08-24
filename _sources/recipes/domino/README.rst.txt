:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domino'
.. highlight: bash

domino
======

.. conda:recipe:: domino
   :replaces_section_title:
   :noindex:

   AMI algorithm with low rate of false calls

   :homepage: https://github.com/Shamir-Lab/DOMINO
   :license: MIT / MIT
   :recipe: /`domino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino/meta.yaml>`_

   


.. conda:package:: domino

   |downloads_domino| |docker_domino|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: ``2.4.*``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.0.1.*``
   :depends pcst-fast: ``1.0.7.*``
   :depends python-louvain: ``0.14.*``
   :depends scipy: ``1.4.1.*``
   :depends statsmodels: ``0.11.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install domino

   and update with::

      conda update domino

   or use the docker container::

      docker pull quay.io/biocontainers/domino:<tag>

   (see `domino/tags`_ for valid values for ``<tag>``)


.. |downloads_domino| image:: https://img.shields.io/conda/dn/bioconda/domino.svg?style=flat
   :target: https://anaconda.org/bioconda/domino
   :alt:   (downloads)
.. |docker_domino| image:: https://quay.io/repository/biocontainers/domino/status
   :target: https://quay.io/repository/biocontainers/domino
.. _`domino/tags`: https://quay.io/repository/biocontainers/domino?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domino/README.html