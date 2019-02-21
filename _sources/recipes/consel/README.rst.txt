:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consel'
.. highlight: bash

consel
======

.. conda:recipe:: consel
   :replaces_section_title:

   CONSEL calculates the probability value \(i.e.\, p\-value\) to assess the confidence in the selection problem. Although CONSEL is applicable to any selection problem\, it is mainly designed for the phylogenetic tree selection

   :homepage: http://stat.sys.i.kyoto-u.ac.jp/prog/consel/
   :license: GNU GENERAL PUBLIC LICENSE Version 2
   :recipe: /`consel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consel/meta.yaml>`_

   


.. conda:package:: consel

   |downloads_consel| |docker_consel|

   :versions: 0.20-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install consel

   and update with::

      conda update consel

   or use the docker container::

      docker pull quay.io/biocontainers/consel:<tag>

   (see `consel/tags`_ for valid values for ``<tag>``)


.. |downloads_consel| image:: https://img.shields.io/conda/dn/bioconda/consel.svg?style=flat
   :alt:   (downloads)
.. |docker_consel| image:: https://quay.io/repository/biocontainers/consel/status
   :target: https://quay.io/repository/biocontainers/consel
.. _`consel/tags`: https://quay.io/repository/biocontainers/consel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consel/README.html