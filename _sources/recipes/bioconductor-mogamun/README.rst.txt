:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogamun'
.. highlight: bash

bioconductor-mogamun
====================

.. conda:recipe:: bioconductor-mogamun
   :replaces_section_title:
   :noindex:

   MOGAMUN\: A Multi\-Objective Genetic Algorithm to Find Active Modules in Multiplex Biological Networks

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MOGAMUN.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-mogamun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogamun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogamun/meta.yaml>`_

   MOGAMUN is a multi\-objective genetic algorithm that identifies active modules in a multiplex biological network. This allows analyzing different biological networks at the same time. MOGAMUN is based on NSGA\-II \(Non\-Dominated Sorting Genetic Algorithm\, version II\)\, which we adapted to work on networks.


.. conda:package:: bioconductor-mogamun

   |downloads_bioconductor-mogamun| |docker_bioconductor-mogamun|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rcy3: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-runit: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mogamun

   and update with::

      conda update bioconductor-mogamun

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogamun:<tag>

   (see `bioconductor-mogamun/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogamun| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogamun.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogamun
   :alt:   (downloads)
.. |docker_bioconductor-mogamun| image:: https://quay.io/repository/biocontainers/bioconductor-mogamun/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogamun
.. _`bioconductor-mogamun/tags`: https://quay.io/repository/biocontainers/bioconductor-mogamun?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogamun";
        var versions = ["1.4.0","1.2.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogamun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogamun/README.html