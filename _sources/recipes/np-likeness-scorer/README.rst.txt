:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'np-likeness-scorer'
.. highlight: bash

np-likeness-scorer
==================

.. conda:recipe:: np-likeness-scorer
   :replaces_section_title:
   :noindex:

   Calculates Natural Product\(NP\)\-likeness of a molecule\, i.e. the similarity of the molecule to the structure space covered by known natural products. NP\-likeness is a useful criterion to screen compound libraries and to design new lead compounds

   :homepage: https://sourceforge.net/projects/np-likeness/
   :license: None
   :recipe: /`np-likeness-scorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/np-likeness-scorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/np-likeness-scorer/meta.yaml>`_

   


.. conda:package:: np-likeness-scorer

   |downloads_np-likeness-scorer| |docker_np-likeness-scorer|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: ``2.7*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install np-likeness-scorer

   and update with::

      conda update np-likeness-scorer

   or use the docker container::

      docker pull quay.io/biocontainers/np-likeness-scorer:<tag>

   (see `np-likeness-scorer/tags`_ for valid values for ``<tag>``)


.. |downloads_np-likeness-scorer| image:: https://img.shields.io/conda/dn/bioconda/np-likeness-scorer.svg?style=flat
   :target: https://anaconda.org/bioconda/np-likeness-scorer
   :alt:   (downloads)
.. |docker_np-likeness-scorer| image:: https://quay.io/repository/biocontainers/np-likeness-scorer/status
   :target: https://quay.io/repository/biocontainers/np-likeness-scorer
.. _`np-likeness-scorer/tags`: https://quay.io/repository/biocontainers/np-likeness-scorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/np-likeness-scorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/np-likeness-scorer/README.html