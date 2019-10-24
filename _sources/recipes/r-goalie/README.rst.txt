:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-goalie'
.. highlight: bash

r-goalie
========

.. conda:recipe:: r-goalie
   :replaces_section_title:

   Assertive check functions for defensive R programming.

   :homepage: https://goalie.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/goalie
   :license: MIT
   :recipe: /`r-goalie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie/meta.yaml>`_

   


.. conda:package:: r-goalie

   |downloads_r-goalie| |docker_r-goalie|

   :versions: 0.4.0-0, 0.3.12-0, 0.3.11-0, 0.3.10-0, 0.3.9-0, 0.3.8-0, 0.3.7-0, 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.3.2-0, 0.3.1-0, 0.3.0-0, 0.2.19-0, 0.2.16-0, 0.2.9-0, 0.2.8-0
   
   :depends r-acidbase: >=0.1.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-goalie

   and update with::

      conda update r-goalie

   or use the docker container::

      docker pull quay.io/biocontainers/r-goalie:<tag>

   (see `r-goalie/tags`_ for valid values for ``<tag>``)


.. |downloads_r-goalie| image:: https://img.shields.io/conda/dn/bioconda/r-goalie.svg?style=flat
   :target: https://anaconda.org/bioconda/r-goalie
   :alt:   (downloads)
.. |docker_r-goalie| image:: https://quay.io/repository/biocontainers/r-goalie/status
   :target: https://quay.io/repository/biocontainers/r-goalie
.. _`r-goalie/tags`: https://quay.io/repository/biocontainers/r-goalie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-goalie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-goalie/README.html