:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novoplasty'
.. highlight: bash

novoplasty
==========

.. conda:recipe:: novoplasty
   :replaces_section_title:

   The organelle assembler and heteroplasmy caller

   :homepage: https://github.com/ndierckx/NOVOPlasty
   :license: other
   :recipe: /`novoplasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoplasty/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw955`

   NOVOPlasty is a de novo assembler for short circular genomes.



.. conda:package:: novoplasty

   |downloads_novoplasty| |docker_novoplasty|

   :versions: 3.7-0, 2.2.2-1, 2.2.2-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install novoplasty

   and update with::

      conda update novoplasty

   or use the docker container::

      docker pull quay.io/biocontainers/novoplasty:<tag>

   (see `novoplasty/tags`_ for valid values for ``<tag>``)


.. |downloads_novoplasty| image:: https://img.shields.io/conda/dn/bioconda/novoplasty.svg?style=flat
   :target: https://anaconda.org/bioconda/novoplasty
   :alt:   (downloads)
.. |docker_novoplasty| image:: https://quay.io/repository/biocontainers/novoplasty/status
   :target: https://quay.io/repository/biocontainers/novoplasty
.. _`novoplasty/tags`: https://quay.io/repository/biocontainers/novoplasty?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoplasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoplasty/README.html