:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meneco'
.. highlight: bash

meneco
======

.. conda:recipe:: meneco/1.5.2
   :replaces_section_title:

   Metabolic Network Completion. Compute minimal completions to your draft network with reactions from a repair network.

   :homepage: http://bioasp.github.io/meneco/
   :license: GPLv3+
   :recipe: /`meneco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco>`_/`1.5.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco/1.5.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meneco/1.5.2/meta.yaml>`_

   


.. conda:package:: meneco

   |downloads_meneco| |docker_meneco|

   :versions: 1.5.2-0
   
   :depends pyasp: >=1.4.3
   
   :depends python: 3.5*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meneco

   and update with::

      conda update meneco

   or use the docker container::

      docker pull quay.io/biocontainers/meneco:<tag>

   (see `meneco/tags`_ for valid values for ``<tag>``)


.. |downloads_meneco| image:: https://img.shields.io/conda/dn/bioconda/meneco.svg?style=flat
   :alt:   (downloads)
.. |docker_meneco| image:: https://quay.io/repository/biocontainers/meneco/status
   :target: https://quay.io/repository/biocontainers/meneco
.. _`meneco/tags`: https://quay.io/repository/biocontainers/meneco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meneco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meneco/README.html