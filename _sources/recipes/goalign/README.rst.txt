:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goalign'
.. highlight: bash

goalign
=======

.. conda:recipe:: goalign
   :replaces_section_title:

   goalign is a set of command line tools to manipulate multiple alignments

   :homepage: https://github.com/fredericlemoine/goalign
   :license: GPL-2.0
   :recipe: /`goalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goalign/meta.yaml>`_

   


.. conda:package:: goalign

   |downloads_goalign| |docker_goalign|

   :versions: 0.2.9-0, 0.2.8-1, 0.2.8-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goalign

   and update with::

      conda update goalign

   or use the docker container::

      docker pull quay.io/biocontainers/goalign:<tag>

   (see `goalign/tags`_ for valid values for ``<tag>``)


.. |downloads_goalign| image:: https://img.shields.io/conda/dn/bioconda/goalign.svg?style=flat
   :alt:   (downloads)
.. |docker_goalign| image:: https://quay.io/repository/biocontainers/goalign/status
   :target: https://quay.io/repository/biocontainers/goalign
.. _`goalign/tags`: https://quay.io/repository/biocontainers/goalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goalign/README.html