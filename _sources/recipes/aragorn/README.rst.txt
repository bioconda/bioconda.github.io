:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aragorn'
.. highlight: bash

aragorn
=======

.. conda:recipe:: aragorn
   :replaces_section_title:

   ARAGORN\, tRNA \(and tmRNA\) detection

   :homepage: http://mbio-serv2.mbioekol.lu.se/ARAGORN/
   :license: GPLv3
   :recipe: /`aragorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn/meta.yaml>`_

   


.. conda:package:: aragorn

   |downloads_aragorn| |docker_aragorn|

   :versions: 1.2.38-2, 1.2.38-1, 1.2.36-1, 1.2.36-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aragorn

   and update with::

      conda update aragorn

   or use the docker container::

      docker pull quay.io/biocontainers/aragorn:<tag>

   (see `aragorn/tags`_ for valid values for ``<tag>``)


.. |downloads_aragorn| image:: https://img.shields.io/conda/dn/bioconda/aragorn.svg?style=flat
   :target: https://anaconda.org/bioconda/aragorn
   :alt:   (downloads)
.. |docker_aragorn| image:: https://quay.io/repository/biocontainers/aragorn/status
   :target: https://quay.io/repository/biocontainers/aragorn
.. _`aragorn/tags`: https://quay.io/repository/biocontainers/aragorn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aragorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aragorn/README.html