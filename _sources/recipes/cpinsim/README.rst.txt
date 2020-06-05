:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpinsim'
.. highlight: bash

cpinsim
=======

.. conda:recipe:: cpinsim
   :replaces_section_title:
   :noindex:

   CPINSim is a package for the simulation of protein complex assembly with constrained
   protein interaction networks.


   :homepage: https://github.com/BiancaStoecker/cpinsim
   :license: MIT / MIT License
   :recipe: /`cpinsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim/meta.yaml>`_

   


.. conda:package:: cpinsim

   |downloads_cpinsim| |docker_cpinsim|

   :versions:
      
      

      ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``

      

   
   :depends bitarray: 
   :depends networkx: 
   :depends python: ``>3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cpinsim

   and update with::

      conda update cpinsim

   or use the docker container::

      docker pull quay.io/biocontainers/cpinsim:<tag>

   (see `cpinsim/tags`_ for valid values for ``<tag>``)


.. |downloads_cpinsim| image:: https://img.shields.io/conda/dn/bioconda/cpinsim.svg?style=flat
   :target: https://anaconda.org/bioconda/cpinsim
   :alt:   (downloads)
.. |docker_cpinsim| image:: https://quay.io/repository/biocontainers/cpinsim/status
   :target: https://quay.io/repository/biocontainers/cpinsim
.. _`cpinsim/tags`: https://quay.io/repository/biocontainers/cpinsim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpinsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpinsim/README.html