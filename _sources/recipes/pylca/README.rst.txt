:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylca'
.. highlight: bash

pylca
=====

.. conda:recipe:: pylca
   :replaces_section_title:

   Lowest common ancestor \(LCA\) algorithm implementation in python

   :homepage: https://github.com/pirovc/pylca
   :license: MIT / MIT License
   :recipe: /`pylca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylca/meta.yaml>`_

   Adaptation of the the lowest common ancestor \(LCA\) algorithm 
   originally developed by D. Eppstein 
   \(https\:\/\/www.ics.uci.edu\/\~eppstein\/\)



.. conda:package:: pylca

   |downloads_pylca| |docker_pylca|

   :versions: 1.0.0-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pylca

   and update with::

      conda update pylca

   or use the docker container::

      docker pull quay.io/biocontainers/pylca:<tag>

   (see `pylca/tags`_ for valid values for ``<tag>``)


.. |downloads_pylca| image:: https://img.shields.io/conda/dn/bioconda/pylca.svg?style=flat
   :target: https://anaconda.org/bioconda/pylca
   :alt:   (downloads)
.. |docker_pylca| image:: https://quay.io/repository/biocontainers/pylca/status
   :target: https://quay.io/repository/biocontainers/pylca
.. _`pylca/tags`: https://quay.io/repository/biocontainers/pylca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylca/README.html