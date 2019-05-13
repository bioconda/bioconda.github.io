:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sexdeterrmine'
.. highlight: bash

sexdeterrmine
=============

.. conda:recipe:: sexdeterrmine
   :replaces_section_title:

   A python script carry out calculate the relative coverage of X and Y chromosomes\, and their associated error bars\, out of capture data.

   :homepage: https://github.com/TCLamnidis/Sex.DetERRmine
   :license: GPL-3.0
   :recipe: /`sexdeterrmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sexdeterrmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sexdeterrmine/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-018-07483-5`

   


.. conda:package:: sexdeterrmine

   |downloads_sexdeterrmine| |docker_sexdeterrmine|

   :versions: 1.0-1
   
   :depends python: 3.7.1.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sexdeterrmine

   and update with::

      conda update sexdeterrmine

   or use the docker container::

      docker pull quay.io/biocontainers/sexdeterrmine:<tag>

   (see `sexdeterrmine/tags`_ for valid values for ``<tag>``)


.. |downloads_sexdeterrmine| image:: https://img.shields.io/conda/dn/bioconda/sexdeterrmine.svg?style=flat
   :target: https://anaconda.org/bioconda/sexdeterrmine
   :alt:   (downloads)
.. |docker_sexdeterrmine| image:: https://quay.io/repository/biocontainers/sexdeterrmine/status
   :target: https://quay.io/repository/biocontainers/sexdeterrmine
.. _`sexdeterrmine/tags`: https://quay.io/repository/biocontainers/sexdeterrmine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sexdeterrmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sexdeterrmine/README.html